import { useState } from 'react';
import './index.css';
import Preview from './components/Preview';
import { Profile, Link } from './types';

export function App() {
  // Profile data - edit this directly in code
  const [profile] = useState<Profile>({
    name: 'Pete McCarthy',
    bio: 'AI Product Leadership',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    username: 'peteknowsai',
    socials: {
      twitter: 'https://twitter.com/peteknowsai',
      github: 'https://github.com/peteknowsai',
      linkedin: 'https://linkedin.com/in/peteknowsai',
      substack: 'https://peteknowsai.substack.com',
      youtube: 'https://youtube.com/@peteknowsai',
      email: 'pete@example.com',
    }
  });
  
  // Links data - edit this directly in code
  const [links] = useState<Link[]>([
    { id: '1', title: 'My AI Newsletter', url: 'https://substack.com', active: true, color: 'bg-blue-400 hover:bg-blue-500' },
    { id: '2', title: 'AI Product Strategy Guide', url: 'https://guide-example.com', active: true, color: 'bg-purple-400 hover:bg-purple-500' },
    { id: '3', title: 'Latest AI Research', url: 'https://research-example.com', active: true, color: 'bg-indigo-400 hover:bg-indigo-500' },
    { id: '4', title: 'Speaking Engagements', url: 'https://speaking-example.com', active: true, color: 'bg-green-400 hover:bg-green-500' },
    { id: '5', title: 'AI Product Framework', url: 'https://framework-example.com', active: true, color: 'bg-yellow-400 hover:bg-yellow-500' },
  ]);

  return (
    <div className="min-h-screen bg-[#e0e8e4]">
      <div className="max-w-lg mx-auto p-4">
        <Preview profile={profile} links={links.filter(link => link.active)} />
      </div>
    </div>
  );
}

export default App;
