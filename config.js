// Configuration file for StudyWithAI Frontend
window.CONFIG = {
    API_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? 'http://localhost:8000' 
        : (typeof process !== 'undefined' && process.env && process.env.API_URL) 
            ? process.env.API_URL 
            : window.API_URL || ''
};