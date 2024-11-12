export default function SocialLinks() {
    const links = [
      { name: 'LinkedIn', url: 'https://linkedin.com/nileshkanti', icon: 'linkedin.svg' },
      { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github.svg' },
      { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter.svg' },
      { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: 'instagram.svg' },
    ];
  
    return (
      <div className="flex space-x-4">
        {links.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={`/images/${link.icon}`} alt={link.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
    );
  }