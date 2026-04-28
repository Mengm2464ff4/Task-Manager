// src/pages/Home.jsx
import React, { useState } from 'react';
import Container from '../components/layout/Container';
import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';
import TaskFilter from '../components/tasks/TaskFilter';
import { useTasks } from '../hooks/useTasks';

const Home = () => {
  const { tasks, filter, sortBy, addTask, updateTask, deleteTask, toggleTask, setFilter, setSortBy } = useTasks();
  const [editingTask, setEditingTask] = useState(null);
  
  const handleSubmit = (taskData) => {
    if (editingTask) {
      updateTask(taskData);
      setEditingTask(null);
    } else {
      addTask({
        ...taskData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        completed: false
      });
    }
  };
  
  return (
    <Container className="py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {editingTask ? 'Edit Task' : 'Create New Task'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {editingTask ? 'Update your task details below' : 'Add a new task to your list'}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <TaskForm
            onSubmit={handleSubmit}
            initialData={editingTask}
            onCancel={editingTask ? () => setEditingTask(null) : null}
          />
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Your Tasks
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({tasks.length} {tasks.length === 1 ? 'task' : 'tasks'})
              </span>
            </h2>
          </div>
          
          <TaskFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            currentSort={sortBy}
            onSortChange={setSortBy}
          />
          
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={setEditingTask}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;