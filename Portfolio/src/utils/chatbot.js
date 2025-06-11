export async function sendMessage(message) {
  const response = await fetch('http://localhost:8000/api/chat/ ' || "https://ia-portfolio-fxyb.onrender.com", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data.response;
}


