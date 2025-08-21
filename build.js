#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the config.js file
const configPath = path.join(__dirname, 'config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Replace the placeholder with the actual environment variable
const apiUrl = process.env.API_URL || 'https://api-not-configured.com';
configContent = configContent.replace('{{API_URL}}', apiUrl);

// Write the updated config back
fs.writeFileSync(configPath, configContent);

console.log(`✅ API URL configured: ${apiUrl}`);