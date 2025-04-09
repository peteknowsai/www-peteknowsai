import React from 'react';
import { Profile, Link } from '../types';
import { ExternalLink, Github, Linkedin, Mail, Newspaper, Twitter, Youtube } from 'lucide-react';

interface PreviewProps {
  profile: Profile;
  links: Link[];
}

const Preview: React.FC<PreviewProps> = ({ profile, links }) => {
  // Define color classes for links
  const colorClasses = [
    'bg-red-400 hover:bg-red-500',
    'bg-green-400 hover:bg-green-500',
    'bg-blue-400 hover:bg-blue-500',
    'bg-purple-400 hover:bg-purple-500',
    'bg-yellow-400 hover:bg-yellow-500',
  ];

  // Assign colors to links if not already assigned
  const linksWithColors = links.map((link, index) => {
    if (!link.color) {
      return {
        ...link,
        color: colorClasses[index % colorClasses.length]
      };
    }
    return link;
  });

  return (
    <div className="bg-[#e0e8e4] rounded-lg overflow-hidden max-w-md mx-auto p-6 pb-12">
      <div className="flex flex-col items-center text-center mb-8">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative" 
             style={{ border: '3px solid black', boxShadow: 'rgb(0, 0, 0) 5px 5px 0px 0px' }}>
          <img 
            src={profile.avatar} 
            alt={`${profile.name}'s profile`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name and Bio */}
        <h1 className="text-3xl font-extrabold mb-1">{profile.name}</h1>
        <p className="text-lg mb-2">{profile.bio}</p>
        
        {/* Username Badge */}
        {profile.username && (
          <div className="inline-block px-3 py-1 bg-[#ffde59] -rotate-2 text-sm font-bold"
               style={{ border: '2px solid black' }}>
            @{profile.username}
          </div>
        )}
      </div>
      
      {/* Links */}
      <div className="mb-8">
        {linksWithColors.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group w-full p-4 mb-4 ${link.color} transform transition-all duration-200 hover:-translate-y-1 hover:rotate-1 block`}
            style={{ border: '3px solid black', boxShadow: 'rgb(0, 0, 0) 5px 5px 0px 0px' }}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{link.title}</span>
              <ExternalLink size={24} />
            </div>
          </a>
        ))}
        
        {links.length === 0 && (
          <p className="text-gray-500 text-center py-6">
            No active links to display.
          </p>
        )}
      </div>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        <a 
          href={profile.socials?.twitter || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Twitter size={24} />
        </a>
        <a 
          href={profile.socials?.github || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Github size={24} />
        </a>
        <a 
          href={profile.socials?.linkedin || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Linkedin size={24} />
        </a>
        <a 
          href={profile.socials?.substack || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Newspaper size={24} />
        </a>
        <a 
          href={profile.socials?.youtube || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Youtube size={24} />
        </a>
        <a 
          href={`mailto:${profile.socials?.email || ""}`}
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Mail size={24} />
        </a>
      </div>
      
      {/* Copyright Footer */}
      <div className="mt-12 text-center">
        <p className="text-sm">© {new Date().getFullYear()} {profile.name} | Pete Knows AI</p>
      </div>
    </div>
  );
};

export default Preview;
