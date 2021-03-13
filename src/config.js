import Bold from "./Shared/Bold";

const config = {
  navItems: [
    {
      title: "Contact",
      // follow this format: mailto:youremail@website.com
      link: "mailto:hello@mattupham.com",
    },
    {
      title: "Github",
      link: "https://github.com/mattupham",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mattupham",
    },
    {
      title: "Socials",
      link: "https://links.mattupham.com",
    },
  ],
  banner: {
    bannerTitle: "Hi 👋 I'm Matt Upham",
    bannerParagraph: (
      <>
        A Silicon Valley <Bold>software engineer</Bold> who specializes in web
        development.
      </>
    ),
    bannerImagePath: "./profile.png",
  },
  about: {
    aboutTitle: "About Me",
    aboutParagraph: (
      <>
        I'm a software engineer with a passion for learning, teaching, and
        creating content on social media. My favorite technologies right now are{" "}
        <Bold>TypeScript, React, HTML, CSS, Python, and Flask</Bold>. I love
        coding because it's both technical, and creative!
      </>
    ),
  },
  projects: [
    {
      projectSrc: "./project1.png",
      projectAlt: "Personal Website",
      projectTitle: "Personal Website",
      projectDescription: [
        "TypeScript, React, Next.js, NodeJS",
        <br />,
        <br />,
        "My Personal Website, which includes information about who I am, what mysocial media accounts are, and subscribe to my monthly newsletter!",
      ],
    },
    {
      projectSrc: "./project2.png",
      projectAlt: "Discord Bot",
      projectTitle: "Discord Bot",
      projectDescription: [
        "TypeScript, NodeJS, Discord.js",
        <br />,
        <br />,
        "My Discord community bot, which onboards people into the community, promps them to introduce themselves, and provides commands for staff",
      ],
    },
    {
      projectSrc: "./project3.png",
      projectAlt: "My Links Site",
      projectTitle: "My Links Site",
      projectDescription: [
        "TypeScript, NodeJS, Discord.js",
        <br />,
        <br />,
        "My custom link site, where people can click through to any of my social media sites. They can also subscribe to my newsletter!",
      ],
    },
  ],
};

export default config;
