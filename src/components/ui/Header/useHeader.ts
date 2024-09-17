import {
  platformDropdownData,
  resourcesDropdownData,
  secondaryNavItems,
} from './data';
import { DropdownColumn } from '../NavLink/types';
import { NavItem, UseHeaderReturn } from './types';
import { useEffect, useRef, useState } from 'react';
import { DROPDOWN_TIMEOUT } from '@/constants';
import { usePathname } from 'next/navigation';

export const useHeader = (): UseHeaderReturn => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownData, setDropdownData] =
    useState<DropdownColumn[]>(platformDropdownData);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isForCreators = pathname.includes(secondaryNavItems[1].href);

  const [hoveredItemLabel, setHoveredItemLabel] = useState<string | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLinkClick = (item: NavItem) => {
    if (item.isExpandable) return;

    setIsDropdownOpen(false);
  };

  const handleOnMouseOver = (item: NavItem) => {
    if (!item.isExpandable) return;

    setHoveredItemLabel(item.label);

    const dropdownMapping: { [key: string]: any } = {
      Platform: platformDropdownData,
      Resources: resourcesDropdownData,
    };

    setDropdownData(dropdownMapping[item.label] || null);
    setIsDropdownOpen(true);
  };

  const handleOnMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setDropdownData([]);
    }, DROPDOWN_TIMEOUT);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    handleOnMouseLeave();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    dropdownData,
    handleDropdownMouseEnter,
    handleDropdownMouseLeave,
    handleLinkClick,
    handleOnMouseLeave,
    handleOnMouseOver,
    hoveredItemLabel,
    isDropdownOpen,
    isForCreators,
    isScrolled,
    setIsDropdownOpen,
  };
};
