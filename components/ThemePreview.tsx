"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "./theme-provider";

const ThemePreview = () => {
  const { theme, mode } = useTheme();
  const currentTheme = theme[mode];

  return (
    <div
      className='min-h-screen flex flex-col'
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.onBackground,
      }}
    >
      <header
        className='p-6 shadow-md flex justify-between items-center'
        style={{
          backgroundColor: currentTheme.primary,
          color: currentTheme.onPrimary,
        }}
      >
        <h1 className='text-2xl font-bold'>Your Brand</h1>
        <nav className='space-x-4'>
          <Button variant='link' style={{ color: currentTheme.onPrimary }}>
            Home
          </Button>
          <Button variant='link' style={{ color: currentTheme.onPrimary }}>
            About
          </Button>
          <Button variant='link' style={{ color: currentTheme.onPrimary }}>
            Services
          </Button>
          <Button variant='link' style={{ color: currentTheme.onPrimary }}>
            Contact
          </Button>
        </nav>
      </header>

      <main className='flex-grow space-y-12 p-6'>
        {/* Hero Section */}
        <section
          className='p-8 rounded-lg shadow-lg text-center'
          style={{
            backgroundColor: currentTheme.surface,
            color: currentTheme.onSurface,
          }}
        >
          <h2 className='text-4xl font-bold mb-4'>Welcome to Your Brand</h2>
          <p className='mb-6'>
            We offer amazing services to help you succeed. Get started with us
            today!
          </p>
          <Button
            size='lg'
            style={{
              backgroundColor: currentTheme.secondary,
              color: currentTheme.onSecondary,
            }}
          >
            Get Started
          </Button>
        </section>

        {/* Primary Color Showcase */}
        <section
          className='p-8 rounded-lg shadow-lg text-center'
          style={{
            backgroundColor: currentTheme.primary,
            color: currentTheme.onPrimary,
          }}
        >
          <h2 className='text-4xl font-bold mb-4'>Primary Color</h2>
          <p>This section showcases the primary color scheme.</p>
        </section>

        {/* Secondary Color Showcase */}
        <section
          className='p-8 rounded-lg shadow-lg text-center'
          style={{
            backgroundColor: currentTheme.secondary,
            color: currentTheme.onSecondary,
          }}
        >
          <h2 className='text-4xl font-bold mb-4'>Secondary Color</h2>
          <p>This section showcases the secondary color scheme.</p>
        </section>

        {/* Error Color Showcase */}
        <section
          className='p-8 rounded-lg shadow-lg text-center'
          style={{
            backgroundColor: currentTheme.error,
            color: currentTheme.onError,
          }}
        >
          <h2 className='text-4xl font-bold mb-4'>Error Color</h2>
          <p>This section showcases the error color scheme.</p>
        </section>

        {/* Surface Color Showcase */}
        <section
          className='p-8 rounded-lg shadow-lg text-center'
          style={{
            backgroundColor: currentTheme.surface,
            color: currentTheme.onSurface,
          }}
        >
          <h2 className='text-4xl font-bold mb-4'>Surface Color</h2>
          <p>This section showcases the surface color scheme.</p>
        </section>

        {/* Form Elements */}
        <section
          className='p-8 rounded-lg shadow-lg'
          style={{
            backgroundColor: currentTheme.surface,
            color: currentTheme.onSurface,
          }}
        >
          <h2 className='text-2xl font-semibold mb-6'>Contact Us</h2>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                placeholder='John Doe'
                style={{
                  backgroundColor: currentTheme.surface,
                  color: currentTheme.onSurface,
                }}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                placeholder='john@example.com'
                style={{
                  backgroundColor: currentTheme.surface,
                  color: currentTheme.onSurface,
                }}
              />
            </div>
            <Button
              style={{
                backgroundColor: currentTheme.primary,
                color: currentTheme.onPrimary,
              }}
            >
              Submit
            </Button>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section
          className='p-8 rounded-lg shadow-lg'
          style={{
            backgroundColor: currentTheme.surface,
            color: currentTheme.onSurface,
          }}
        >
          <h2 className='text-2xl font-semibold mb-6'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-medium'>What is Your Brand?</h3>
              <p>
                Your Brand is a leading provider of innovative solutions
                designed to help your business grow.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-medium'>How can I get started?</h3>
              <p>
                Simply click the "Get Started" button above to begin your
                journey with us.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-medium'>
                What services do you offer?
              </h3>
              <p>
                We offer a wide range of services, including web development,
                marketing, and consulting.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        className='p-6 mt-12 text-center shadow-md'
        style={{
          backgroundColor: currentTheme.primary,
          color: currentTheme.onPrimary,
        }}
      >
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThemePreview;
