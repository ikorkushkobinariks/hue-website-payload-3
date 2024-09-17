import React, { FC, useState } from 'react';
import MenuContentMobile from './components/MenuContentMobile';
import BurgerIcon from '../../../icons/BurgerIcon';
import MobileNavHeader from './components/MobileNavHeader';

interface NavMenuMobileProps {
  isForCreators: boolean;
}

const NavMenuMobile: FC<NavMenuMobileProps> = ({ isForCreators }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-neutral flex border-y border-gray px-16 py-[10px] tablet:hidden">
      <MobileNavHeader
        clickHandler={() => setMenuOpen(true)}
        icon={<BurgerIcon />}
        isForCreators={isForCreators}
      />
      <MenuContentMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default NavMenuMobile;
