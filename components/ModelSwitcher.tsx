"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModelSwitcher() {
  const [model, setModel] = React.useState("gpt-3.5");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>{model}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
          <DropdownMenuRadioItem value='gpt-4'>Gpt-4</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='gpt-3.5'>Gpt-3.5</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Cluade-3'>Claude</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
