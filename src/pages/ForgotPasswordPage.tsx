import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Define the validation schema using Zod
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is a placeholder. In a real app, you would call your API here.
    console.log('Password reset requested for:', values.email);
    
    // Show a success message to the user
    toast.success(`Password reset link sent to ${values.email}`, {
        description: 'Please check your inbox to continue.',
    });

    // Optionally, reset the form or redirect
    form.reset();
    // navigate('/'); // Or redirect to a confirmation page
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 items-center justify-center p-4">
        <AuthFormWrapper
          title="Forgot Your Password?"
          description="Enter your email below, and we'll send you a link to reset it."
          footerContent={
            <>
              Remember your password?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Login here
              </Link>
            </>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;