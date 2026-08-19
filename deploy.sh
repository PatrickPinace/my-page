#!/usr/bin/env bash
# Deploy skrypt dla my-page na VPS (ronim.com.pl).
#
# Żyje w repo (wersjonowany, code review), ale WYKONYWANY z kopii poza
# katalogu app/ (/opt/apps/my-page/deploy.sh) -- analogicznie do wzorca
# /opt/apps/bdo-filler-demo/deploy-demo.sh -- żeby `git reset --hard`
# wewnątrz tego samego przebiegu nie mógł nadpisać skryptu, który go
# aktualnie wykonuje.
set -Eeuo pipefail

APP_ROOT="/opt/apps/my-page"
APP_DIR="$APP_ROOT/app"
LOG_FILE="$APP_ROOT/deploy.log"
PREV_SHA_FILE="$APP_ROOT/.previous_deploy_sha"
BRANCH="main"
COMPOSE_FILE="compose.vps.yml"
CONTAINER="my-page-frontend"
MAX_WAIT=60

mkdir -p "$APP_ROOT"
touch "$LOG_FILE"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "=================================================="
echo "DEPLOY START: $(date '+%Y-%m-%d %H:%M:%S')"
echo "=================================================="

cd "$APP_DIR"

echo "[1/5] Fetching latest code"
git fetch origin "$BRANCH"

CURRENT_SHA="$(git rev-parse HEAD)"
echo "$CURRENT_SHA" > "$PREV_SHA_FILE"
echo "Saved previous SHA: $CURRENT_SHA"

echo "[2/5] Resetting to origin/$BRANCH"
git reset --hard "origin/$BRANCH"

NEW_SHA="$(git rev-parse HEAD)"
echo "Deploying SHA: $NEW_SHA"

echo "[3/5] Building and starting container"
docker compose -f "$COMPOSE_FILE" up -d --build

echo "[4/5] Waiting for container health"
START_TS=$(date +%s)
until [ "$(docker inspect -f '{{.State.Health.Status}}' "$CONTAINER" 2>/dev/null)" = "healthy" ]; do
  NOW_TS=$(date +%s)
  ELAPSED=$((NOW_TS - START_TS))
  if [ "$ELAPSED" -ge "$MAX_WAIT" ]; then
    echo "Health check failed after ${MAX_WAIT}s"
    exit 1
  fi
  echo "Health not ready yet... (${ELAPSED}s)"
  sleep 3
done
echo "Container is healthy"

echo "[5/5] Deploy successful"
echo "Previous SHA: $CURRENT_SHA"
echo "Current  SHA: $NEW_SHA"
echo "DEPLOY END: $(date '+%Y-%m-%d %H:%M:%S')"
echo
