import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

const app = express()
const port = 8080;

app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:3000"
	})
)
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/tasks", async (req, res) => {
  const tasksRef = collection(db, "tasks");
  const snapshot = await getDocs(tasksRef);
  const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const { text } = req.body;
  const docRef = await addDoc(collection(db, "tasks"), { text, done: false });
  res.json({ id: docRef.id, text, done: false });
});

app.delete("/tasks/:id", async (req, res) => {
  await deleteDoc(doc(db, "tasks", req.params.id));
  res.json({ message: "Deleted" });
});

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()