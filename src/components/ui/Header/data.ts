import { DropdownColumn } from '../NavLink/types';

export const navItems = [
  {
    label: 'Platform',
    isExpandable: true,
  },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'Resources',
    isExpandable: true,
  },
  {
    label: 'About Hue',
    href: '/about-hue',
  },
];

export const secondaryNavItems = [
  { href: '/', label: 'For Brands' },
  { href: '/hue-community', label: 'For Creators' },
];

export const platformDropdownData: DropdownColumn[] = [
  {
    title: 'THE HUE PLATFORM',
    items: [
      {
        label: 'Shoppable Video',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'UGC Collection',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'AI Powered Quizzes',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'Retailer Syndication',
        href: '/',
      },
    ],
  },
  {
    title: 'HUE FOR',
    items: [
      {
        label: 'Beauty',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'Fashion',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
        badge: 'Coming Soon',
      },
      {
        label: 'Partners',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
        badge: 'Coming Soon',
      },
      {
        label: 'Developers',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
    ],
  },
  {
    items: [
      {
        CSDescription:
          'Ut vitae morbi pellentesque nec amet. Ut vitae morbi pellentesque nec amet.',
        CSLink: 'Read Case Study',
        CSSubtitle: 'Smart FiltersTM',
        CSTitle: 'Feature Highlight',
        alt: 'Feature Highlight',
        href: '/case-studies',
        image: '/static/images/menu-image.png',
      },
    ],
  },
];

export const resourcesDropdownData: DropdownColumn[] = [
  {
    title: 'THE HUE PLATFORM',
    items: [
      {
        label: 'BFCM 2024',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'Blogs',
        href: '/',
        description: 'Ut vitae morbi pellentesque nec amet.',
      },
      {
        label: 'Guides',
        href: '/',
        badge: 'Coming Soon',
      },
    ],
  },
  {
    items: [
      {
        CSDescription:
          'Ut vitae morbi pellentesque nec amet. Ut vitae morbi pellentesque nec amet.',
        CSLink: 'Read Case Study',
        CSSubtitle: 'Smart FiltersTM',
        CSTitle: 'Feature Highlight',
        alt: 'Feature Highlight',
        href: '/case-studies',
        image: '/static/images/menu-image.png',
      },
    ],
  },
];
