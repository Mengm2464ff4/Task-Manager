# 📝 Task Manager App (React + Vite)

A modern and responsive **Task Manager application** built with **React + Vite + Tailwind CSS**.  
This project demonstrates real-world React architecture using components, hooks, context, and reusable UI design.

---

## 🚀 Features

- ➕ Add tasks
- ✏️ Edit tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed
- 🔍 Filter tasks (All / Active / Completed)
- 🌙 Dark Mode support
- 🖱️ Custom cursor effect
- 💾 Persistent state management (Context + Hooks)
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

- React JS
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Context API
- Custom Hooks

---

## 📁 Project Structure
task-manager-app/
│
├── src/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Container.jsx
│ │ │ └── Navbar.jsx
│ │ │
│ │ ├── tasks/
│ │ │ ├── TaskForm.jsx
│ │ │ ├── TaskList.jsx
│ │ │ ├── TaskItem.jsx
│ │ │ └── TaskFilter.jsx
│ │ │
│ │ ├── ui/
│ │ │ ├── Button.jsx
│ │ │ ├── CustomCursor.jsx
│ │ │ └── Input.jsx
│
│ ├── context/
│ │ └── TaskContext.jsx
│
│ ├── hooks/
│ │ ├── useDarkMode.js
│ │ ├── useMouseEffect.js
│ │ └── useTasks.js
│
│ ├── pages/
│ │ └── Home.jsx
│
│ ├── utils/
│ │ └── helper.js
│
│ ├── App.jsx
│ └── main.jsx
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md


---

## ▶️ How to Run Project

```bash
npm install
npm run dev