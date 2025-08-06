const config = {
  title: 'Your Name',
  tagline: 'Senior Developer | Full Stack Engineer',
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
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'My professional thoughts and experiences',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Your Name',
      logo: {
        alt: 'Your Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'About', position: 'left'},
        {to: '/experience', label: 'Experience', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/skills', label: 'Skills', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/maheshsiv',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/yourprofile',
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
              href: 'https://linkedin.com/in/yourprofile',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/maheshsiv',
            },
            {
              label: 'Email',
              href: 'mailto:your.email@example.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Name. Built with Docusaurus.`,
    },
  },
};

module.exports = config;