#!/bin/zsh

set -euo pipefail

REPO_DIR="/Users/dvidal1205-mini/Documents/portfolio-v4"
TARGET_FILE="src/blog/project-framework.md"

cd "$REPO_DIR"

day_of_week="$(date +%u)"
current_time="$(date +%H:%M)"

# Only publish on Friday at 1:00 PM local time.
if [[ "$day_of_week" != "5" || "$current_time" != "13:00" ]]; then
  exit 0
fi

# Remove the unpublished flag if present.
sed -i '' '/^published: false$/d' "$TARGET_FILE"

# Exit if there is nothing to commit.
if git diff --quiet -- "$TARGET_FILE"; then
  exit 0
fi

git add "$TARGET_FILE"
git commit -m "Publish project framework blog post"
git push
