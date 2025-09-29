#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Charger le fichier .env s'il existe
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match && match[1] && match[2] && !process.env[match[1]]) {
      process.env[match[1]] = match[2];
    }
  });
}

console.log('🔍 Vérification des variables d\'environnement EmailJS...');

const requiredVars = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID', 
  'VITE_EMAILJS_PUBLIC_KEY'
];

let allPresent = true;

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 8)}...`);
  } else {
    console.log(`❌ ${varName}: NON DÉFINIE`);
    allPresent = false;
  }
});

if (allPresent) {
  console.log('✅ Toutes les variables EmailJS sont définies');
} else {
  console.log('❌ Des variables EmailJS sont manquantes');
  process.exit(1);
}