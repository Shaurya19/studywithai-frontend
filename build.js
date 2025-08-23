const fs = require('fs');
const path = require('path');

// Read the source HTML file
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Get the API URL from environment variable
const apiUrl = process.env.API_URL;

// Validate that API_URL is provided
if (!apiUrl) {
    console.error('❌ Error: API_URL environment variable is required');
    process.exit(1);
}

// Replace the API URL in the HTML content
const updatedContent = htmlContent.replace(
  'const API_BASE_URL = window.API_URL;',
  `const API_BASE_URL = '${apiUrl}';`
);

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write the updated HTML to dist directory
fs.writeFileSync('dist/index.html', updatedContent);

console.log(`✅ Build complete! API URL set to: ${apiUrl}`);