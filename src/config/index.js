module.exports = {
  siteTitle: 'Kofi Obrasi Ocran | Software Engineer',
  siteDescription:
    'Kofi Obrasi Ocran is a Software Engineer based in Accra, Ghana who specializes in builing exceptional, high-quality websites and applications',
  siteKeywords:
    'Kofi Obrasi Ocran, Kofi, Obrasi, mupati, software engineer, front-end engineer, web developer, javascript, accra',
  siteUrl: 'https://mupati.devcodes.co',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-131436918-1',
  googleVerification: 'Rp9VlvZsqbp3ytslgNr2JwQS_F8sc2rmSh3n7wgyFns',
  name: 'Kofi Obrasi Ocran',
  location: 'Accra, GH',
  email: 'ocran.obrasi@gmail.com',
  github: 'https://github.com/mupati',
  twitterHandle: '@kofi_mupati',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mupati',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kofiobrasiocran',
    },

    {
      name: 'Blog',
      url: 'https://www.devcodes.co/articles/software',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kofi_mupati',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
