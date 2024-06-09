"use client";

import { Button } from "./ui/button";
import BlackWhiteDiv from "@/components/BlackWhiteDivs";
import { useAuth } from "@/contexts/AuthContext";

import { handleLogin } from "./handlers";

const HomePage = () => {
  const { user, loading } = useAuth();

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-center py-10 px-4 max-w-screen-xl mx-auto'>
        <div className='lg:w-1/2 text-center lg:text-left lg:pr-8'>
          <div className='max-w-lg'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Explore the Power of Multi-Model Chatbots
            </h1>
            <p className='text-base md:text-lg mb-6'>
              Engage in dynamic conversations with advanced chatbots like
              ChatGPT, Gemini, and more. Experience seamless interactions and
              diverse capabilities, all within a single conversation.
            </p>

            {user ? (
              <>
                <h1 className='text-5xl'>
                  Hi 👋 , <b>{user.displayName}!</b>
                </h1>
              </>
            ) : (
              <Button
                onClick={handleLogin}
                variant='outline'
                className='w-full'
              >
                Sign up for Event Updates (Google)
              </Button>
            )}
          </div>
        </div>

        <div className='lg:w-1/2'>
          <BlackWhiteDiv></BlackWhiteDiv>
        </div>
      </div>
    </>
  );
};

export default HomePage;
