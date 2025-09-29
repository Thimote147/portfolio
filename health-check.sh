#!/bin/bash

# Script de vérification du déploiement
# Usage: ./health-check.sh [url]

URL="${1:-http://localhost:7777}"
MAX_RETRIES=30
RETRY_COUNT=0

echo "🏥 Vérification de la santé du déploiement sur $URL"

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  echo "⏳ Tentative $((RETRY_COUNT + 1))/$MAX_RETRIES..."
  
  if curl -sf "$URL" > /dev/null 2>&1; then
    echo "✅ Le site est accessible !"
    
    # Vérifier que le contenu est bien chargé
    if curl -s "$URL" | grep -q "Thimoté"; then
      echo "✅ Le contenu semble correct"
      
      # Vérifier les assets principaux
      if curl -sf "$URL/assets/" > /dev/null 2>&1; then
        echo "✅ Les assets sont accessibles"
      fi
      
      echo "🎉 Déploiement réussi !"
      exit 0
    else
      echo "⚠️  Le site répond mais le contenu semble incorrect"
    fi
  fi
  
  RETRY_COUNT=$((RETRY_COUNT + 1))
  sleep 2
done

echo "❌ Le déploiement a échoué - le site n'est pas accessible après $MAX_RETRIES tentatives"
exit 1