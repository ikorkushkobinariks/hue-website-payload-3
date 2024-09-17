'use client';

import FooterMobileDropdown from './components/FooterMobileDropdown';
import { footerLinks } from './data';
import FooterContactSection from './components/FooterContactSection';
import { useFooter } from './useFooter';
import FooterUnitData from './components/FooterUnitData';

const Footer = () => {
  const { openItem, handleToggle, icon, dropdownRefs } = useFooter();

  return (
    <div className="flex width-full bg-deep-purple">
      <div className="tablet:container tablet:px-[165px] w-full pt-32 tablet:pt-[80px] tablet:pb-[13px] pb-[20px] px-16 flex-col items-center">
        <div className="ContentWrapper flex flex-col tablet:flex-row tablet:gap-[64px]">
          <FooterContactSection />
          <div className="MenuSection text-white flex flex-col w-full mt-48 tablet:hidden">
            {footerLinks.map((unit, index) => (
              <FooterMobileDropdown
                key={index}
                unit={unit}
                index={index}
                icon={icon}
                openItem={openItem}
                handleToggle={handleToggle}
                dropdownRefs={dropdownRefs}
              />
            ))}
          </div>

          <div className="tablet:flex hidden gap-[35px] tablet:w-auto">
            {footerLinks.map((data, index) => (
              <div key={index} className="flex flex-col gap-16">
                <h3 className="text-white body-md opacity-50">
                  {data.unitTitle}
                </h3>
                {data.unitData.map((data, index) => (
                  <FooterUnitData key={index} data={data} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="AdditionalInfo flex flex-col items-center w-full mt-[64px] gap-20 tablet:flex-row-reverse tablet:justify-between">
          <div className="flex flex-col gap-20 items-center w-auto tablet:flex-row tablet:justify-end">
            <a className="text-white body-xs" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="text-white body-xs">Terms and Conditions</a>
          </div>
          <h3 className="text-white body-xs">
            Hue.beauty © 2024. All rights reserved.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
