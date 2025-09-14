const API_URL = "http://localhost:8080";

export async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
}

export async function addTask(text) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
  return res.json();
}
