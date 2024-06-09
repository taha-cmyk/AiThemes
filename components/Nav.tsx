"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ThemeSwitcher";
import { SettingsDropDown } from "./SettingsDropDown";
import { useAuth } from "@/contexts/AuthContext";

const Nav = () => {
  const { user, loading } = useAuth();

  return (
    <nav className='p-4 flex justify-between items-center border-b border-whitesmoke text-sm'>
      <div className='flex items-center'>
        <Link href='/' className='font-semibold text-xl'>
          TechPulse
        </Link>
      </div>
      <ul className='flex items-center gap-4'>
        <li>
          <Link
            href='/chat'
            className='hover:text-primary-500 dark:hover:text-primary-300'
          >
            Chat
          </Link>
        </li>

        <li>
          <Link
            href='/analytics'
            className='hover:text-primary-500 dark:hover:text-primary-300'
          >
            Analytics
          </Link>
        </li>

        <li>
          <ModeToggle />
        </li>
        {user && (
          <>
            <li>
              <SettingsDropDown></SettingsDropDown>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
