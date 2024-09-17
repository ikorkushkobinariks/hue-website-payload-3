import React, { FC } from 'react';
import cn from 'classnames';
import { FooterMobileDropdownProps } from '../types';
import FooterUnitData from './FooterUnitData';
import MobileNavLink from '../../Header/components/NavMenuMobile/components/MobileNavLink';

const FooterMobileDropdown: FC<FooterMobileDropdownProps> = ({
  unit,
  index,
  icon,
  openItem,
  handleToggle,
  dropdownRefs,
}) => {
  return (
    <div className="FooterMobileDropdown">
      <MobileNavLink
        label={unit.unitTitle}
        icon={icon}
        onClick={() => handleToggle(index)}
        isOpen={openItem === index}
        className={cn({
          'opacity-50': openItem !== index,
          'opacity-100': openItem === index,
        })}
      />
      <div
        ref={(el) => {
          dropdownRefs.current[index] = el;
        }}
        className={cn(
          'transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-16',
        )}
        style={{
          maxHeight:
            openItem === index
              ? `${dropdownRefs.current[index]?.scrollHeight}px`
              : '0px',
        }}
      >
        {unit.unitData.map((data, dataIndex) => (
          <FooterUnitData key={dataIndex} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FooterMobileDropdown;
