import React from 'react';
import { Profile, Link } from '../types';
import { ExternalLink, Github, Linkedin, Mail, Download } from 'lucide-react';

// X logo (formerly Twitter) - more accurate representation
const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
  </svg>
);

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
        <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden relative" 
             style={{ border: '3px solid black', boxShadow: 'rgb(0, 0, 0) 5px 5px 0px 0px' }}>
          <img 
            src={profile.avatar} 
            alt={`${profile.name}'s profile`} 
            className="w-full h-full object-cover"
            style={{ objectPosition: '48% 15%' }}
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
            target={link.isDownload ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={link.isDownload ? "Pete_McCarthy_Resume.pdf" : undefined}
            className={`relative group w-full p-4 mb-4 ${link.color} transform transition-all duration-200 hover:-translate-y-1 hover:rotate-1 block ${
              link.isDownload ? 'animate-pulse-subtle' : ''
            }`}
            style={{ 
              border: '3px solid black', 
              boxShadow: link.isDownload 
                ? 'rgb(0, 0, 0) 5px 5px 0px 0px' 
                : 'rgb(0, 0, 0) 5px 5px 0px 0px' 
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{link.title}</span>
              {link.isDownload ? <Download size={24} className="animate-bounce" /> : <ExternalLink size={24} />}
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
          href={profile.socials?.x || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <XIcon />
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
          href={`mailto:${profile.socials?.email || ""}`}
          className="p-2 bg-white transition-all duration-200 hover:-translate-y-1"
          style={{ border: '2px solid black', boxShadow: 'rgb(0, 0, 0) 3px 3px 0px 0px' }}
        >
          <Mail size={24} />
        </a>
      </div>
      
      {/* Copyright Footer */}
      <div className="mt-12 text-center">
        <p className="text-sm"> {new Date().getFullYear()} {profile.name} | Pete Knows AI</p>
      </div>
    </div>
  );
};

export default Preview;
