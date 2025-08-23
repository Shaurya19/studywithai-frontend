export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-cache');
  
  const config = `
    window.API_URL = '${process.env.API_URL || ''}';
  `;
  
  res.status(200).send(config);
}