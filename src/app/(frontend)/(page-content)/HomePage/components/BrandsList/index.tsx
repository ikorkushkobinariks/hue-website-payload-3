import Image from 'next/image';
import DesktopSlider from './DesktopSlider';

const BrandsList = () => {
  const brandsList = [
    {
      src: '/static/images/homepage/brands/tatcha.svg',
      alt: 'tatcha',
    },
    {
      src: '/static/images/homepage/brands/laura_mercier.png',
      alt: 'laura_mervier',
    },
    {
      src: '/static/images/homepage/brands/crown_affair.png',
      alt: 'crown_affair',
    },
    {
      src: '/static/images/homepage/brands/111_skin.png',
      alt: '111_skin',
    },
    {
      src: '/static/images/homepage/brands/ceremonia.png',
      alt: 'ceremonia',
    },
    {
      src: '/static/images/homepage/brands/tinted.png',
      alt: 'tinted',
    },
    {
      src: '/static/images/homepage/brands/bare_minerals.png',
      alt: 'bare_minerals',
    },
    {
      src: '/static/images/homepage/brands/ami_cole.png',
      alt: 'ami_cole',
    },
    {
      src: '/static/images/homepage/brands/credo.png',
      alt: 'credo',
    },
    {
      src: '/static/images/homepage/brands/kate_somerville.png',
      alt: 'kate_somerville',
    },
    {
      src: '/static/images/homepage/brands/patchology.png',
      alt: 'patchology',
    },
    {
      src: '/static/images/homepage/brands/blume.png',
      alt: 'blume',
    },
  ];

  return (
    <>
      <div className="mt-24">
        <h3 className="body-sm mb-24 uppercase text-center tracking-[0.6px]">
          Trusted By
        </h3>

        <div className="grid grid-cols-4 gap-32 tablet:hidden px-16">
          {brandsList.map((image, index) => (
            <div className="relative min-h-40" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>

        <div className="hidden tablet:block">
          <DesktopSlider />
        </div>
      </div>
    </>
  );
};

export default BrandsList;
