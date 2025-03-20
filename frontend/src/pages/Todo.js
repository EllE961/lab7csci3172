import React, { useState, useEffect } from "react";
import "../styles/Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // Using jsonplaceholder as mock API
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
        setIsLoading(false);
      } catch (err) {
        // Error handling
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Add new todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    // Optimistic UI update
    const tempTodo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, tempTodo]);
    setNewTodo("");

    try {
      // API call to add todo
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: newTodo,
          completed: false,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // Replace temp todo with server response
      setTodos(todos.map(todo => todo.id === tempTodo.id ? {...todo, id: data.id} : todo));
    } catch (err) {
      // Revert optimistic update on error
      setError("Failed to add todo. Please try again.");
      setTodos(todos.filter(todo => todo.id !== tempTodo.id));
    }
  };

  // Toggle todo completion
  const handleToggle = async (id) => {
    // Find todo to toggle
    const todoToToggle = todos.find(todo => todo.id === id);
    // Create updated todo with toggled completion
    const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    
    // Optimistic update
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));

    try {
      // API call to update todo
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: updatedTodo.completed,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      // Revert on error
      setError("Failed to update todo. Please try again.");
      setTodos(todos.map(todo => todo.id === id ? todoToToggle : todo));
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    // Save todo for potential rollback
    const deletedTodo = todos.find(todo => todo.id === id);
    
    // Optimistic update
    setTodos(todos.filter(todo => todo.id !== id));

    try {
      // API call to delete todo
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      // Revert on error
      setError("Failed to delete todo. Please try again.");
      setTodos([...todos, deletedTodo]);
    }
  };

  // Clear error message
  const clearError = () => {
    setError(null);
  };

  if (isLoading) {
    return (
      <div className="container my-5 text-center">
        <h2 className="section-title">Todo List</h2>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading todos...</p>
      </div>
    );
  }

  return (
    <main className="container my-5">
      <h2 className="section-title">Todo List</h2>
      
      {/* Error alert */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button 
            type="button" 
            className="btn-close" 
            onClick={clearError} 
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Add todo form */}
      <form onSubmit={handleAddTodo} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            aria-label="Add new task"
          />
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </div>
      </form>

      {/* Todo list */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="text-center my-4">
            <p>No tasks yet. Add a task to get started!</p>
          </div>
        ) : (
          <ul className="list-group">
            {todos.map((todo) => (
              <li 
                key={todo.id} 
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  todo.completed ? "completed-todo" : ""
                }`}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                    id={`todo-${todo.id}`}
                  />
                  <label className="form-check-label" htmlFor={`todo-${todo.id}`}>
                    {todo.title}
                  </label>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(todo.id)}
                  aria-label="Delete task"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Todo; 