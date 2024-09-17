import { useState, useRef } from 'react';
import ChevronDownIcon from '../icons/ChevronDownIcon';

export const useFooter = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const icon = <ChevronDownIcon className="size-24" color="none" />;

  const toggleItem = (index: number) => {
    setOpenItem((prevIndex) => (prevIndex === index ? null : index));
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

  return { openItem, handleToggle, icon, dropdownRefs };
};
