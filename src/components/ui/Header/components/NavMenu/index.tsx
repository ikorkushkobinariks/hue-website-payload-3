import { navItems } from '../../data';
import { NavMenuProps } from './types';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import LogoLink from '@/components/ui/LogoLink';
import NavLink from '@/components/ui/NavLink';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { ButtonType } from '@/components/ui/PrimaryButton/types';

const NavMenu = ({
  handleDropdownMouseEnter,
  handleLinkClick,
  handleOnMouseLeave,
  handleOnMouseOver,
  hoveredItemLabel,
  isDropdownOpen,
  isForCreators,
  isScrolled,
}: NavMenuProps) => {
  const pathname = usePathname();

  return (
    <div className="container z-50 mx-auto hidden min-h-[80px] items-center justify-between px-[165px] tablet:flex">
      <div className="z-50 flex h-full items-center gap-32">
        {!isForCreators ? (
          <LogoLink
            src={
              isScrolled
                ? '/static/images/logo-small.png'
                : '/static/images/logo-text.png'
            }
            width={isScrolled ? 69 : 100}
          />
        ) : (
          <LogoLink src="/static/images/hue-community-logo.png" width={207} />
        )}

        {!isForCreators && (
          <nav
            className="z-50 flex h-full gap-24"
            onMouseLeave={handleOnMouseLeave}
            onMouseOver={handleDropdownMouseEnter}
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="group flex items-center"
                onMouseOver={() => handleOnMouseOver(item)}
                onClick={() => handleLinkClick(item)}
              >
                <NavLink
                  label={item.label}
                  href={item.href || ''}
                  className={cn(
                    'flex border-b-2 min-h-[81px] border-transparent hover:border-lilac',
                    {
                      'tablet:border-lilac': pathname === item.href,
                    },
                  )}
                  isExpandable={item.isExpandable}
                  iconClassName={cn(
                    'ml-8 transition-transform duration-300 group-hover:rotate-180',
                    {
                      'rotate-180':
                        item.label === hoveredItemLabel && isDropdownOpen,
                    },
                  )}
                />
              </div>
            ))}
          </nav>
        )}
      </div>
      {!isForCreators ? (
        <PrimaryButton />
      ) : (
        <div className="flex gap-16">
          <PrimaryButton label="Apply Today" />
          <PrimaryButton label="Login" buttonType={ButtonType.Secondary} />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
