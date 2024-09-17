import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownColumn } from '@/components/ui/NavLink/types';
import Badge from '@/components/ui/Badge';
import ChevronDownIcon from '@/components/ui/icons/ChevronDownIcon';

const MenuColumn: FC<DropdownColumn> = ({
  title,
  items,
  setMenuOpen,
  setIsDropdownOpen,
}) => {
  const closeMenuHandler = () => {
    setMenuOpen?.(false);
    setIsDropdownOpen?.(false);
  };

  return (
    <div className="border-b border-gray py-32 tablet:border-none tablet:py-0">
      <h3 className="body-md">{title}</h3>
      <div className="mt-20 flex flex-col gap-40">
        {items?.map((item, itemIndex) => (
          <div key={itemIndex} className="gap-1 flex flex-col">
            {!item.image ? (
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center gap-8">
                  <Link
                    href={item.href || ''}
                    className="heading-200 hover:text-peach"
                  >
                    <span className="font-bold" onClick={closeMenuHandler}>
                      {item.label}
                    </span>
                  </Link>
                  {item.badge && <Badge text={item.badge} bgColor="bg-mint" />}
                </div>
                {item.description && (
                  <p className="heading-200 text-dark-gray">
                    {item.description}
                  </p>
                )}
              </div>
            ) : (
              <div className="tablet:w-[312px]">
                <div className="flex items-center justify-between tablet:px-[22px]">
                  <p className="body-md">{item.CSTitle}</p>
                  <Link
                    href={item.href || ''}
                    className="heading-100-bold text-peach"
                  >
                    <span className="flex items-center">
                      {item.CSLink}
                      <ChevronDownIcon color="none" className="-rotate-90" />
                    </span>
                  </Link>
                </div>
                <Image
                  src={item.image as string}
                  alt={item.alt as string}
                  width={311}
                  height={210}
                  layout="responsive"
                  priority
                />
                <div className="flex flex-col gap-4 tablet:px-[22px]">
                  <p className="heading-200">{item.CSSubtitle}</p>
                  <p className="body-md">{item.CSDescription}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuColumn;
