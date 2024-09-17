'use client';

import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import NavLink from '../../NavLink';

type SecondaryNavMenuProps = {
  secondaryNavItems: { label: string; href: string }[];
};

const SecondaryNavMenu: React.FC<SecondaryNavMenuProps> = ({
  secondaryNavItems,
}) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>(
    secondaryNavItems[0]?.href || '',
  );

  useEffect(() => {
    const active =
      secondaryNavItems.find((item) => item.href === pathname)?.href ||
      secondaryNavItems[0]?.href;
    setActiveLink(active);
  }, [pathname, secondaryNavItems]);

  return (
    <div className="flex max-h-32 min-h-32 items-center justify-center bg-lilac px-16 tablet:h-full tablet:px-32">
      <div className="flex size-full items-center gap-24 tablet:container tablet:px-[165px]">
        {secondaryNavItems.map(({ label, href }) => (
          <NavLink
            key={label}
            href={href}
            label={label}
            onClick={() => setActiveLink(href)}
            className={cn(
              'secondary-nav-link body-md h-[32px] border-b-2',
              activeLink === href ? 'border-deep-purple' : 'border-transparent',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryNavMenu;
