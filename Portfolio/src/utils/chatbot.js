const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000/api/chat/'
  : 'https://ia-portfolio-fxyb.onrender.com/api/chat/';

export async function sendMessage(message) {
  const response = await fetch("https://ia-portfolio-fxyb.onrender.com/api/chat/", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data.response;
}
