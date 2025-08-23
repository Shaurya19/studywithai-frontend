# StudyWithAI Frontend

An interactive learning platform that generates AI-powered flashcards and quizzes from your study content.

## Features

- 🧠 AI-generated flashcards from text or PDF content
- 📝 Interactive quizzes with explanations
- 📱 Responsive design for all devices
- 🎯 Progress tracking and scoring
- 📄 PDF file upload support

## Backend

This frontend connects to the StudyWithAI backend API via environment variables.

## Deployment on Vercel

### Prerequisites

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Create a Vercel account at [vercel.com](https://vercel.com)

### Deploy Steps

1. **Clone or download this repository**

2. **Navigate to the project directory:**
   ```bash
   cd studywithai-frontend
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

5. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` (for first deployment)
   - What's your project's name? `studywithai-frontend`
   - In which directory is your code located? `./`

6. **Set Environment Variables:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add: `API_URL` with your backend API URL value
   - Redeploy the project if needed

### Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository or upload the project files
4. Vercel will automatically detect it as a static site
5. Set the `API_URL` environment variable in project settings
6. Click "Deploy"

### Environment Variables

The application requires the following environment variable:

- `API_URL`: The URL of your StudyWithAI backend API

## Local Development

To run locally:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Start development server:**
   ```bash
   vercel dev
   ```

3. **Or simply open `index.html` in a web browser**

Note: For local development, the app will automatically use `http://localhost:8000` as the API URL.

## Project Structure

```
studywithai-frontend/
├── index.html          # Main application file
├── config.js          # API configuration
├── package.json       # Project metadata
├── vercel.json        # Vercel deployment config
├── api/
│   └── config.js      # Environment variable API endpoint
└── README.md          # This file
```

## Technologies Used

- HTML5
- CSS3 (Custom styling with CSS variables)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License