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
      youtube: 'https://www.youtube.com/channel/UC7A7DmMPflHE0nzF4PGTe6A',
      email: 'pete@peteknowsai.xyz',
    }
  });
  
  // Links data - edit this directly in code
  const [links] = useState<Link[]>([
    { id: '1', title: 'YouTube Channel', url: 'https://www.youtube.com/channel/UC7A7DmMPflHE0nzF4PGTe6A', active: true, color: 'bg-red-400 hover:bg-red-500' },
    { id: '2', title: 'Newsletter', url: 'https://substack.com/@peteknowsai', active: true, color: 'bg-blue-400 hover:bg-blue-500' },
    { id: '3', title: 'home0', url: 'https://www.home0.xyz', active: true, color: 'bg-green-400 hover:bg-green-500' },
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
