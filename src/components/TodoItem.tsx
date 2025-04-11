import React from 'react';
import { Check, Trash2, Edit } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
      <div className="flex items-center flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 mr-4 rounded-full flex items-center justify-center border ${
            todo.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 dark:border-gray-600'
          }`}
        >
          {todo.completed && <Check size={14} className="text-white" />}
        </button>
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            className="flex-1 p-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            autoFocus
          />
        ) : (
          <span 
            className={`flex-1 ${
              todo.completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className="p-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          aria-label="Edit todo"
        >
          <Edit size={18} />
        </button>
        <button 
          onClick={() => onDelete(todo.id)} 
          className="p-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          aria-label="Delete todo"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
