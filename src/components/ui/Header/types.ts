import { Dispatch, SetStateAction } from 'react';
import { DropdownColumn } from '../NavLink/types';

export type NavItem = {
  label: string;
  href?: string;
  isExpandable?: boolean;
};

export type UseHeaderReturn = {
  dropdownData: DropdownColumn[];
  handleDropdownMouseEnter: () => void;
  handleDropdownMouseLeave: () => void;
  handleLinkClick: (item: NavItem) => void;
  handleOnMouseLeave: () => void;
  handleOnMouseOver: (item: NavItem) => void;
  hoveredItemLabel: string | null;
  isDropdownOpen: boolean;
  isForCreators: boolean;
  isScrolled: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export interface ActiveLink {
  label: string;
  href?: string;
}
