'use client';

import { useHeader } from './useHeader';
import NavMenu from './components/NavMenu';
import NavMenuMobile from './components/NavMenuMobile';
import DropdownMenu from './components/DropdownMenu';
import cn from 'classnames';

export default function Header() {
  const {
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
  } = useHeader();

  return (
    <header
      className={cn(
        'z-50 flex w-full flex-col border-b border-yellow-light bg-white sticky top-0',
        { 'shadow-md': isScrolled },
      )}
    >
      <NavMenuMobile isForCreators={isForCreators} />
      <NavMenu
        {...{
          hoveredItemLabel,
          handleLinkClick,
          handleOnMouseOver,
          handleOnMouseLeave,
          isDropdownOpen,
          handleDropdownMouseEnter,
          isScrolled,
          isForCreators,
        }}
      />
      {isDropdownOpen && dropdownData && (
        <div
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <DropdownMenu
            data={dropdownData}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </div>
      )}
    </header>
  );
}
