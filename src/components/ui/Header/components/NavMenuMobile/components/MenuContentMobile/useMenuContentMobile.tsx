import MenuColumn from '../../../MenuColumn';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { UseMenuContentMobileReturn } from './types';
import ChevronDownIcon from '@/components/ui/icons/ChevronDownIcon';
import { DropdownColumn } from '@/components/ui/NavLink/types';
import {
  platformDropdownData,
  resourcesDropdownData,
} from '@/components/ui/Header/data';

export const useMenuContentMobile = (
  menuOpen: boolean,
  setMenuOpen: Dispatch<SetStateAction<boolean>>,
): UseMenuContentMobileReturn => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const icon = <ChevronDownIcon className="size-24" color="none" />;

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
      setOpenItem(null);
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  const toggleItem = (index: number) => {
    setOpenItem((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownDataMap: { [key: string]: DropdownColumn[] } = {
    Platform: platformDropdownData,
    Resources: resourcesDropdownData,
  };

  const renderDropdownContent = (label: string) => {
    const dropdownData = dropdownDataMap[label];

    if (!dropdownData) {
      return null;
    }

    return (
      <div>
        {dropdownData.map((column, colIndex) => (
          <MenuColumn key={colIndex} {...column} setMenuOpen={setMenuOpen} />
        ))}
      </div>
    );
  };

  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    toggleItem(index);

    dropdownRefs.current.forEach((content, i) => {
      if (content) {
        content.style.maxHeight =
          i === index && openItem !== index
            ? `${content.scrollHeight}px`
            : '0px';
      }
    });
  };

  return { openItem, handleToggle, renderDropdownContent, icon, dropdownRefs };
};
