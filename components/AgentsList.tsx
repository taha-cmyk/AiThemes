import React from "react";
import { Gamepad2, Globe, FileCode, Clock } from "lucide-react";

const AgentsList = () => {
  return (
    <div className='p-6 h-screen'>
      <h1 className='text-2xl text-bold'>AGENTS</h1>
      <hr />
      <a
        href='#'
        className='flex items-center mb-4 p-4 transition duration-300 ease-in-out hover:bg-gray-100  dark:hover:bg-gray-900 rounded-lg'
      >
        <div className=' w-8 h-8 flex items-center justify-center mr-4'>
          <Gamepad2 size={18} />
        </div>
        <div>
          <h2 className='text-xl font-bold'>Cosmic keystrokes</h2>
          <p className='text-gray-600'>
            Generate an interactive speed typing game in a single HTML file,
            featuring side-scrolling gameplay and Tailwind CSS styling
          </p>
        </div>
      </a>

      <a
        href='#'
        className='flex items-center mb-4 p-4 transition duration-300 ease-in-out hover:bg-gray-100  dark:hover:bg-gray-900  rounded-lg'
      >
        <div className=' w-8 h-8 flex items-center justify-center mr-4'>
          <Globe size={18} />
        </div>
        <div>
          <h2 className='text-xl font-bold'>Website wizard</h2>
          <p className='text-gray-600'>
            Create one-page websites based on user specifications
          </p>
        </div>
      </a>

      <a
        href='#'
        className='flex items-center mb-4 p-4 transition duration-300 ease-in-out hover:bg-gray-100  dark:hover:bg-gray-900  rounded-lg'
      >
        <div className=' w-8 h-8 flex items-center justify-center mr-4'>
          <FileCode size={18} />
        </div>
        <div>
          <h2 className='text-xl font-bold'>Google Apps scripter</h2>
          <p className='text-gray-600'>
            Generate Google Apps scripts to complete tasks based on user
            requirements
          </p>
        </div>
      </a>

      <a
        href='#'
        className='flex items-center p-4 transition duration-300 ease-in-out hover:bg-gray-100  dark:hover:bg-gray-900  rounded-lg'
      >
        <div className=' w-8 h-8 flex items-center justify-center mr-4'>
          <Clock size={18} />
        </div>
        <div>
          <h2 className='text-xl font-bold'>Time travel consultant</h2>
          <p className='text-gray-600'>
            Help the user navigate hypothetical time travel scenarios and their
            implications
          </p>
        </div>
      </a>
    </div>
  );
};

export default AgentsList;
