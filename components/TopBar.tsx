import {
  ChevronDown,
  MoreVertical,
  PlusCircle,
  PlusIcon,
  SeparatorHorizontal,
} from "lucide-react";

import { SettingsDropDown } from "./SettingsDropDown";
import { Button } from "./ui/button";

const TopBar = () => (
  <div
    style={{
      backgroundColor: "#F3F4F6",
    }}
    className='flex justify-between items-center p-4 border'
  >
    <div className='flex items-center'>
      <span className='font-bold mr-2'>AI</span>
      <Button variant='ghost' size='sm'>
        <PlusIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <PlusIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <span className='sr-only'>Add</span>
      </Button>
    </div>
    <div>
      <SettingsDropDown></SettingsDropDown>
    </div>
  </div>
);

export default TopBar;
