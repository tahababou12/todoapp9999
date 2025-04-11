import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { Trash2 } from 'lucide-react';

function App() {
  const {
    todos,
    todoCount,
    filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    clearCompleted
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-200">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transition-colors duration-200">
          <TodoForm onAdd={addTodo} />
          
          <TodoFilter 
            filter={filter} 
            onFilterChange={setFilter} 
            todoCount={todoCount} 
          />
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          
          {todoCount.completed > 0 && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={clearCompleted}
                className="flex items-center text-sm text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                <Trash2 size={16} className="mr-1" />
                Clear completed ({todoCount.completed})
              </button>
            </div>
          )}
        </div>
        
        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>TaskMaster &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
