import PrimaryButton from '@/components/ui/PrimaryButton';
import Image from 'next/image';

const HomePageMasthead = () => {
  return (
    <>
      <div className="flex flex-col text-center pt-[60px]">
        <div className="px-16">
          <h2 className="heading-700 tablet:heading-950 mb-16 color-deep-purple">
            Drive Conversion with User-Generated Video Technology
          </h2>

          <div className="body-lg tablet:body-xl mb-32 color-deep-purple">
            Trusted Shoppable Video technology and curated UGC from one place.
          </div>

          <div className="block tablet:flex items-center justify-center">
            <PrimaryButton
              {...{ label: 'Request Demo', href: '/', size: 'big' }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-[-120px] tablet:hidden">
          <Image
            src={'/static/images/homepage/masthead_mobile.png'}
            alt="hero image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority={true}
          />
        </div>

        <div className="hidden tablet:block tablet:mt-[-80px] tablet:mb-[-60px] desktop:mt-[-220px] desktop:mb-[-180px] max-w-[1100px] mx-auto">
          <Image
            src={'/static/images/homepage/masthead_desktop.png'}
            alt="hero image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default HomePageMasthead;
