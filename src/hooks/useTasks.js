// src/hooks/useTasks.js
import { useTaskContext } from '../context/TaskContext';

export const useTasks = () => {
  const { state, dispatch } = useTaskContext();
  
  const getFilteredAndSortedTasks = () => {
    let filtered = [...state.tasks];
    
    // Apply filter
    switch (state.filter) {
      case 'active':
        filtered = filtered.filter(task => !task.completed);
        break;
      case 'completed':
        filtered = filtered.filter(task => task.completed);
        break;
      default:
        break;
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (state.sortBy) {
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        
        case 'title':
          return a.title.localeCompare(b.title);
        
        default: // createdAt
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
    
    return filtered;
  };
  
  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };
  
  const updateTask = (task) => {
    dispatch({ type: 'UPDATE_TASK', payload: task });
  };
  
  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch({ type: 'DELETE_TASK', payload: taskId });
    }
  };
  
  const toggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };
  
  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };
  
  const setSortBy = (sortBy) => {
    dispatch({ type: 'SET_SORT', payload: sortBy });
  };
  
  return {
    tasks: getFilteredAndSortedTasks(),
    rawTasks: state.tasks,
    filter: state.filter,
    sortBy: state.sortBy,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilter,
    setSortBy
  };
};