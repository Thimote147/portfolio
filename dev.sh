#!/bin/bash

# Script de développement et déploiement local
# Usage: ./dev.sh [command]

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_help() {
  echo "📚 Usage: ./dev.sh [command]"
  echo ""
  echo "🛠️  Commands:"
  echo "  dev        - Démarrer le serveur de développement"
  echo "  build      - Builder le projet"
  echo "  preview    - Prévisualiser le build"
  echo "  docker     - Builder et démarrer avec Docker (production)"
  echo "  docker-dev - Démarrer avec Docker (développement)"
  echo "  lint       - Linter et formatter le code"
  echo "  test-env   - Tester les variables d'environnement"
  echo "  clean      - Nettoyer les builds et containers"
  echo "  help       - Afficher cette aide"
}

check_env() {
  echo -e "${BLUE}🔍 Vérification des variables d'environnement...${NC}"
  
  if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  Fichier .env non trouvé${NC}"
    echo "📝 Créez un fichier .env avec :"
    echo "VITE_EMAILJS_SERVICE_ID=votre_service_id"
    echo "VITE_EMAILJS_TEMPLATE_ID=votre_template_id" 
    echo "VITE_EMAILJS_PUBLIC_KEY=votre_public_key"
    return 1
  fi
  
  source .env
  node check-env.js
}

case "${1:-help}" in
  "dev")
    echo -e "${BLUE}🚀 Démarrage du serveur de développement...${NC}"
    check_env && npm run dev
    ;;
  
  "build")
    echo -e "${BLUE}🏗️  Building du projet...${NC}"
    check_env && npm run build
    ;;
  
  "preview")
    echo -e "${BLUE}👀 Prévisualisation du build...${NC}"
    npm run preview
    ;;
  
  "docker")
    echo -e "${BLUE}🐳 Build et démarrage avec Docker (production)...${NC}"
    check_env || exit 1
    source .env
    docker-compose down || true
    docker-compose build --no-cache
    docker-compose up -d
    echo -e "${GREEN}✅ Portfolio disponible sur http://localhost:7777${NC}"
    ;;
  
  "docker-dev")
    echo -e "${BLUE}🐳 Démarrage avec Docker (développement)...${NC}"
    if [ -f ".env" ]; then
      source .env
    fi
    docker-compose -f docker-compose.dev.yml down || true
    docker-compose -f docker-compose.dev.yml up --build
    ;;
  
  "lint")
    echo -e "${BLUE}🧹 Linting et formatting...${NC}"
    npm run lint:fix
    ;;
  
  "test-env")
    echo -e "${BLUE}🧪 Test des variables d'environnement...${NC}"
    check_env
    ;;
  
  "clean")
    echo -e "${BLUE}🧽 Nettoyage...${NC}"
    docker-compose down --remove-orphans || true
    docker system prune -f || true
    rm -rf dist node_modules/.cache
    echo -e "${GREEN}✅ Nettoyage terminé${NC}"
    ;;
  
  "help"|*)
    print_help
    ;;
esac