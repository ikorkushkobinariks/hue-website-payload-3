import { DropdownColumn } from '@/components/ui/NavLink/types';
import { Dispatch, SetStateAction } from 'react';

export interface DropdownMenuProps {
  data: DropdownColumn[];
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}
