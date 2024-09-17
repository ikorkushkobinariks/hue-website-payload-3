import Link from 'next/link';
import { ComponentProps, Dispatch, SetStateAction } from 'react';

export interface DropdownItem {
  CSDescription?: string;
  CSLink?: string;
  CSSubtitle?: string;
  CSTitle?: string;
  alt?: string;
  badge?: string;
  description?: string;
  href?: string;
  image?: string;
  label?: string;
}

export interface DropdownColumn {
  items: DropdownItem[];
  linkLabel?: string;
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  setIsDropdownOpen?: Dispatch<SetStateAction<boolean>>;
}

export type LinkWithDropdownProps = {
  className?: string;
  href?: string;
  iconClassName?: string;
  isExpandable?: boolean;
  label: string;
  onClick?: () => void;
} & ComponentProps<typeof Link>;
