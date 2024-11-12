import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Nilesh Kanti</h1>
      <div className="flex items-center space-x-4">
        <SocialLinks />
        <DarkModeToggle />
      </div>
    </header>
  );
}