import { DropdownColumn } from '@/components/NavLink/types';
import { Dispatch, SetStateAction } from 'react';

export interface DropdownMenuProps {
  data: DropdownColumn[];
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}
