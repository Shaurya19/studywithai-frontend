# StudyWithAI Frontend

An AI-powered interactive learning platform with flashcards and quizzes.

## Features

- 🧠 AI-generated flashcards from text or PDF content
- 📝 Interactive quizzes with explanations
- 🎯 Progress tracking and scoring
- 📱 Responsive design for all devices
- ⚡ Fast, static frontend optimized for Vercel

## Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/studywithai-frontend)

### Manual Deployment

1. **Fork this repository** or clone it to your GitHub account

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to your project settings
   - Add environment variables:
     ```
     VITE_API_URL=https://your-backend-api-url.com
     ```

4. **Deploy:**
   - Vercel will automatically deploy from your main branch
   - Your app will be available at `https://your-project.vercel.app`

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/studywithai-frontend.git
cd studywithai-frontend

# Install dependencies (optional, for local server)
npm install

# Start local development server
npm run dev
# or simply open index.html in your browser
```

## Configuration

The application automatically detects the environment:

- **Local Development:** Uses `http://localhost:8000` for API calls
- **Production:** Uses the API URL from environment variables or falls back to configured domain

To change the API URL for production:

1. **Option 1 (Recommended):** Set environment variable in Vercel:
   ```
   VITE_API_URL=https://your-api-domain.com
   ```

2. **Option 2:** Edit `config.js` and replace `'https://your-api-domain.com'` with your actual API URL

## Project Structure

```
studywithai-frontend/
├── index.html          # Main application file
├── config.js           # Configuration and API settings
├── package.json        # Project metadata and dependencies
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## Backend Requirements

This frontend requires a compatible backend API with the following endpoints:

- `GET /health` - Health check
- `POST /generate-flashcards` - Generate flashcards from content
- `POST /generate-quiz` - Generate quiz questions from content

## Technologies Used

- Vanilla JavaScript (ES6+)
- CSS3 with CSS Variables
- Font Awesome Icons
- Google Fonts (Inter)
- Responsive Design

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - see LICENSE file for details