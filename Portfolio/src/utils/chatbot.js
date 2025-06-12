export async function sendMessage(message) {
  const isLocal = window.location.hostname === 'localhost';
  const API_URL = isLocal
    ? 'http://localhost:8000/api/chat/'
    : 'https://ia-portfolio-fxyb.onrender.com/api/chat/';

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.response;
}
