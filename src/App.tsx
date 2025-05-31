import { useState } from 'react';
import './index.css';
import Preview from './components/Preview';
import { Profile, Link } from './types';

export function App() {
  // Profile data - edit this directly in code
  const [profile] = useState<Profile>({
    name: 'Pete McCarthy',
    bio: 'AI Product Leader',
    avatar: '/images/profile.jpg',
    username: 'peteknowsai',
    socials: {
      twitter: 'https://twitter.com/peteknowsai',
      x: 'https://x.com/peteknowsai',
      github: 'https://github.com/peteknowsai',
      linkedin: 'https://www.linkedin.com/in/peteknowsai',
      substack: 'https://substack.com/@peteknowsai',
      email: 'pete@peteknowsai.xyz',
    }
  });
  
  // Links data - edit this directly in code
  const [links] = useState<Link[]>([
    { id: '1', title: 'GitHub', url: 'https://github.com/peteknowsai', active: true, color: 'bg-gray-400 hover:bg-gray-500' },
    { id: '2', title: 'Newsletter', url: 'https://substack.com/@peteknowsai', active: true, color: 'bg-blue-400 hover:bg-blue-500' },
    { id: '3', title: 'Home0', url: 'https://www.home0.xyz', active: true, color: 'bg-green-400 hover:bg-green-500' },
    { id: '4', title: 'Download Resume', url: '/resume.pdf', active: true, color: 'bg-yellow-400 hover:bg-yellow-500', isDownload: true },
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
