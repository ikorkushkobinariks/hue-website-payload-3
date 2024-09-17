import React, { FC } from 'react';
import LogoLink from '../../LogoLink';
import PrimaryButton from '../../PrimaryButton';
import { ButtonType } from '../../PrimaryButton/types';

const FooterContactSection: FC = () => {
  return (
    <div className="FooterContactSection flex flex-col gap-16 w-full tablet:w-auto">
      <div className="Logo">
        <LogoLink src="/static/images/logo-footer.png" width={67} />
      </div>
      <div className="Social flex gap-24">
        <LogoLink src="/static/images/instagram-logo.png" width={24} />
        <LogoLink src="/static/images/linkedin-logo.png" width={24} />
      </div>
      <div className="ButtonBlock flex w-full mt-32 gap-16 items-start">
        <PrimaryButton label="Get Started" buttonType={ButtonType.Accent} />
        <PrimaryButton
          label="Join Hue Community"
          isTM
          buttonType={ButtonType.Secondary}
        />
      </div>
    </div>
  );
};

export default FooterContactSection;
