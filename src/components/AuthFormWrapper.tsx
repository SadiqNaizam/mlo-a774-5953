import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface AuthFormWrapperProps {
  /**
   * The main title for the form (e.g., "Login", "Create an account").
   */
  title: string;
  /**
   * A short description or instruction displayed below the title.
   */
  description: string;
  /**
   * The main content of the form, typically input fields and a submit button.
   */
  children: React.ReactNode;
  /**
   * The content for the footer, usually for secondary actions like
   * linking to sign-up or forgot-password pages.
   */
  footerContent: React.ReactNode;
  /**
   * Optional additional class names for the card.
   */
  className?: string;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  footerContent,
  className,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className={`w-full max-w-md ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-sm text-muted-foreground">
          {footerContent}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;