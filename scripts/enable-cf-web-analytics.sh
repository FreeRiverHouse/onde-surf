#!/usr/bin/env bash
# Enable Cloudflare Web Analytics for onde.surf
# Run after creating a CF API token with account.rum:edit scope
# Usage: CF_API_TOKEN=<token> bash scripts/enable-cf-web-analytics.sh

set -euo pipefail

ACCOUNT_ID="91ddd4ffd23fb9da94bb8c2a99225a3f"
ZONE_TAG="5c8ed77a62e5b4fef107c6b80d563773"
HOST="onde.surf"

if [[ -z "${CF_API_TOKEN:-}" ]]; then
  echo "ERROR: CF_API_TOKEN not set"
  echo "Create a token at dash.cloudflare.com/profile/api-tokens"
  echo "Required permission: Account > Cloudflare Web Analytics > Edit"
  exit 1
fi

echo "Creating Web Analytics site for $HOST..."
RESPONSE=$(curl -s -X POST \
  "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/rum/site_info" \
  -H "Authorization: Bearer ${CF_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data "{\"host\":\"${HOST}\",\"zone_tag\":\"${ZONE_TAG}\",\"auto_install\":true}")

SUCCESS=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('success'))")
if [[ "$SUCCESS" != "True" ]]; then
  echo "ERROR: $RESPONSE"
  exit 1
fi

SITE_TAG=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['result']['site_tag'])")
echo ""
echo "SUCCESS! site_tag: $SITE_TAG"
echo ""
echo "Next steps:"
echo "  1. Set env var in CF Pages > onde-surf > Settings > Environment variables:"
echo "     NEXT_PUBLIC_CF_ANALYTICS_TOKEN = $SITE_TAG"
echo "  2. Redeploy: CF Pages will auto-deploy on next git push to main"
