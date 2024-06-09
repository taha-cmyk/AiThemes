"use client";

import * as React from "react";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "./ui/use-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

export function SettingsDropDown() {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        toast({
          description: "You Loged out",
        });
      })
      .catch((error) => {
        toast({
          description: "It may be a problem try again",
        });
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm'>
          <Settings className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Settings className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {user ? (
          <>
            <DropdownMenuItem onClick={handleLogout}>Profile</DropdownMenuItem>
          </>
        ) : (
          <></>
        )}
        <DropdownMenuItem>Settings</DropdownMenuItem>

        {user ? (
          <>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </>
        ) : (
          <></>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
