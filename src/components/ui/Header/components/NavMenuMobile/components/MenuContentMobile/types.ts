import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface MenuContentMobileProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export interface UseMenuContentMobileReturn {
  openItem: number | null;
  handleToggle: (index: number) => void;
  renderDropdownContent: (label: string) => JSX.Element | null;
  icon: JSX.Element;
  dropdownRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}
