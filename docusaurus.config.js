const config = {
  title: 'Mahesh Kumar Sivakumarappa',
  tagline: 'Senior Software Developer | 13+ Years Experience',
  url: 'https://maheshsiv.github.io',
  baseUrl: '/my-profile/',
  organizationName: 'maheshsiv',
  projectName: 'my-profile',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs for resume site
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Mahesh Sivakumarappa',
      logo: {
        alt: 'MS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'About', position: 'left'},
        {to: '/experience', label: 'Experience', position: 'left'},
        {to: '/skills', label: 'Skills', position: 'left'},
        {
          href: 'https://github.com/maheshsiv',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/mahesh-kumar-sivakumarappa-07977475/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/mahesh-kumar-sivakumarappa-07977475/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/maheshsiv',
            },
            {
              label: 'Email',
              href: 'mailto:maheshsiv2008@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mahesh Kumar Sivakumarappa. Built with Docusaurus.`,
    },
  },
};

module.exports = config;