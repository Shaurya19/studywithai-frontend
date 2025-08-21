// Configuration for StudyWithAI Frontend
window.CONFIG = {
    // Use environment-based API URL
    API_URL: (() => {
        // Check if we're in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:8000';
        }
        
        // For production, this will be replaced by the build script
        return '{{API_URL}}';
    })()
};