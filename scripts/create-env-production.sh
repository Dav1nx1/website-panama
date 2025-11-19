#!/bin/bash

# Script to create .env.production file on the server
# Run this on your server: bash scripts/create-env-production.sh

set -e

ENV_FILE=".env.production"

echo "📝 Creating $ENV_FILE file..."

if [ -f "$ENV_FILE" ]; then
    echo "⚠️  $ENV_FILE already exists. Backing up to ${ENV_FILE}.backup"
    cp "$ENV_FILE" "${ENV_FILE}.backup"
fi

cat > "$ENV_FILE" << 'EOF'
# Production Environment Variables
# This file is used by docker-compose.yml for production deployment
# DO NOT commit this file to git (it's in .gitignore)

NODE_ENV=production
NEXT_PUBLIC_DOMAIN=https://oportunidadenislagrande.com
EOF

echo "✅ $ENV_FILE created successfully!"
echo ""
echo "📋 Current contents:"
cat "$ENV_FILE"
echo ""
echo "💡 You can edit this file with: nano $ENV_FILE"

