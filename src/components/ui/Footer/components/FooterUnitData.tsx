import React, { FC } from 'react';
import { FooterLinkUnitData } from '../types';
import Badge from '../../Badge';

interface FooterUnitDataProps {
  data: FooterLinkUnitData;
}

const FooterUnitData: FC<FooterUnitDataProps> = ({ data }) => {
  return (
    <div className="FooterMobileDropdownData flex w-full flex-col gap-16 tablet:w-[150px]">
      {data.title && (
        <h3 className="body-md opacity-50 text-white">{data.title}</h3>
      )}
      <div className="FooterLinkItems flex flex-col gap-12">
        {data.items.map((item) => (
          <div key={item.label} className="flex items-center gap-8">
            <p className="body-md text-white hover:text-lilac cursor-pointer">
              {item.label}
            </p>
            {item.badge && <Badge text={item.badge} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterUnitData;
