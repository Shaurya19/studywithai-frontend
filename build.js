const fs = require('fs');
const path = require('path');

// Read the source HTML file
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Get environment variables
const apiUrl = process.env.API_URL;
const apiSecretKey = process.env.API_SECRET_KEY;

// Validate that required environment variables are provided
if (!apiUrl) {
    console.error('❌ Error: API_URL environment variable is required');
    process.exit(1);
}

if (!apiSecretKey) {
    console.error('❌ Error: API_SECRET_KEY environment variable is required');
    process.exit(1);
}

// Replace the environment variables in the HTML content
let updatedContent = htmlContent.replace(
    'const API_BASE_URL = window.API_URL;',
    `const API_BASE_URL = '${apiUrl}';`
);

updatedContent = updatedContent.replace(
    'const API_SECRET_KEY = window.API_SECRET_KEY;',
    `const API_SECRET_KEY = '${apiSecretKey}';`
);

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write the updated HTML to dist directory
fs.writeFileSync('dist/index.html', updatedContent);

console.log(`✅ Build complete!`);
console.log(`📡 API URL: ${apiUrl}`);
console.log(`🔑 API Key: ${apiSecretKey ? '***' + apiSecretKey.slice(-4) : 'Not set'}`);