import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} SecureAccess. All Rights Reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            to="/terms"
            className="text-sm text-muted-foreground hover:text-primary hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:text-primary hover:underline"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;