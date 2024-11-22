// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'seydavina',
  },
  base: '/git-profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Seydina Limamou Laye Yade',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'limamou-laye',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: 'seydinayade',
    medium: 'seydinalimamoulayeyade',
    dev: '',
    stackoverflow: '20530873', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'seydavina',
    website: '',
    phone: '+221 77 419 34 89',
    email: 'seydavinaa@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'Vue.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'REST API',
    'Microservices',
    'Docker',
    'Kubernetes',
    'Git',
    'GitHub',
    'GitLab',
    'PHPUnit',
    'Jest',
    'CSS',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Sosen Afrique',
      position: 'Développeur Web/Mobile',
      from: 'Mai 2023',
      to: 'Septembre 2023',
      companyLink: '',
    },
    {
      company: 'Ecoles Au Sénégal',
      position: 'Développeur Fullstack',
      from: 'Juil. 2024',
      to: "Aujourd'hui",
      companyLink: 'https://www.ecolesausenegal.org/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Ecole Supérieure Polytechnique de Dakar (ESP)',
      degree: 
        "Licence Professionnelle en Génie Logiciel et Systèmes d'Information",
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Ecole Supérieure Polytechnique de Dakar (ESP)',
      degree: 'Diplôme Supérieur de Technologie en Informatique',
      from: '2021',
      to: '2023',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ` <a 
      class="text-primary" href="https://github.com/seydavinaa"
      target="_blank"
      rel="noreferrer"
    >La Pepita</a> ❤️`,

  enablePWA: true,
};

export default CONFIG;
