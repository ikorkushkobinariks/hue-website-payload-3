import React, { FC } from 'react';
import XIcon from '../../../../../icons/XIcon';
import MobileNavHeader from '../MobileNavHeader';
import MobileNavLink from '../MobileNavLink';
import cn from 'classnames';
import { useMenuContentMobile } from './useMenuContentMobile';
import { MenuContentMobileProps } from './types';
import { navItems } from '@/components/ui/Header/data';
import PrimaryButton from '@/components/ui/PrimaryButton';

const MenuContentMobile: FC<MenuContentMobileProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const { openItem, handleToggle, renderDropdownContent, icon, dropdownRefs } =
    useMenuContentMobile(menuOpen, setMenuOpen);

  return (
    <div className="absolute top-0">
      <div
        className={cn(
          'fixed inset-[0px] bg-dark-gray/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out',
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`inset-y-0 fixed left-[-5px] flex h-screen w-5/6 flex-col bg-white transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } tablet:hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <MobileNavHeader
          clickHandler={() => setMenuOpen(false)}
          icon={<XIcon />}
          className="border-b border-gray px-16 py-[10px]"
        />

        {/* Menu content area */}
        <div className="flex-1 overflow-y-auto px-16 py-32">
          <div className="flex flex-col gap-8">
            {navItems.map((item, index) => (
              <div key={index}>
                <MobileNavLink
                  label={item.label}
                  href={item.href}
                  icon={item.isExpandable && icon}
                  onClick={() => {
                    if (item.isExpandable) {
                      handleToggle(index);
                      return;
                    }
                    setMenuOpen(false);
                  }}
                  isOpen={openItem === index}
                />
                {item.isExpandable && (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[index] = el;
                    }}
                    className={cn(
                      'transition-all duration-300 ease-in-out overflow-hidden',
                    )}
                    style={{
                      maxHeight:
                        openItem === index
                          ? `${dropdownRefs.current[index]?.scrollHeight}px`
                          : '0px',
                    }}
                  >
                    {renderDropdownContent(item.label)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="px-16 pb-40">
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default MenuContentMobile;
