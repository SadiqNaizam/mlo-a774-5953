import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="text-lg">SecureAccess</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;