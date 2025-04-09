import React from 'react';
import { Link } from '../types';
import { ExternalLink, Trash2 } from 'lucide-react';

interface LinkEditorProps {
  link: Link;
  updateLink: (link: Link) => void;
  deleteLink: (id: string) => void;
}

// Color options for links
const colorOptions = [
  { value: 'bg-red-400 hover:bg-red-500', label: 'Red' },
  { value: 'bg-green-400 hover:bg-green-500', label: 'Green' },
  { value: 'bg-blue-400 hover:bg-blue-500', label: 'Blue' },
  { value: 'bg-purple-400 hover:bg-purple-500', label: 'Purple' },
  { value: 'bg-yellow-400 hover:bg-yellow-500', label: 'Yellow' },
  { value: 'bg-pink-400 hover:bg-pink-500', label: 'Pink' },
  { value: 'bg-indigo-400 hover:bg-indigo-500', label: 'Indigo' },
  { value: 'bg-gray-400 hover:bg-gray-500', label: 'Gray' },
];

const LinkEditor: React.FC<LinkEditorProps> = ({ link, updateLink, deleteLink }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    updateLink({
      ...link,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition"
         style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 2px 2px 0px 0px' }}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-grow space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link Title
            </label>
            <input
              type="text"
              name="title"
              value={link.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., My YouTube Channel"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL
            </label>
            <input
              type="url"
              name="url"
              value={link.url}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://example.com"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Color
              </label>
              <select
                name="color"
                value={link.color || colorOptions[0].value}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {colorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center pt-7">
              <input
                type="checkbox"
                id={`active-${link.id}`}
                name="active"
                checked={link.active}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`active-${link.id}`} className="ml-2 block text-sm text-gray-700">
                Active
              </label>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => deleteLink(link.id)}
          className="text-red-500 hover:text-red-700 transition p-1"
          aria-label="Delete link"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      {/* Link Preview */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="block text-sm font-medium text-gray-700 mb-2">Preview:</span>
        <div 
          className={`relative p-3 rounded-lg ${link.color || 'bg-gray-100'}`}
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{link.title || 'Link Title'}</span>
            <ExternalLink size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkEditor;
