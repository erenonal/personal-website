// next-seo.config.js

export default {
  title: "Eren Onal - Frontend Developer | Personal Website",
  description:
    "Eren Onal's personal website showcasing frontend development skills, projects, and contact information.",
  openGraph: {
    type: "website",
    url: "https://erenonal.com",
    title: "Eren Onal - Frontend Developer | Personal Website",
    description:
      "Explore the personal website of Eren Onal, a talented frontend developer. Learn more about my skills, projects, and professional experience.",
    images: [
      {
        url: "https://erenonal.com/erenonal.jpg",
        width: 1200,
        height: 630,
        alt: "Eren Onal Frontend Developer",
      },
    ],
    site_name: "Eren Onal Personal Website",
  },
  additionalMetaTags: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Eren Onal",
    },
    {
      name: "keywords",
      content:
        "Frontend Developer, Eren Onal, Web Development, JavaScript, React, Vue, HTML, CSS, Web Developer Portfolio",
    },
  ],
  additionalLinkTags: [
    {
      rel: "canonical",
      href: "https://erenonal.com",
    },
  ],
  openGraph: {
    type: "profile",
    profile: {
      firstName: "Eren",
      lastName: "Onal",
      username: "onaleren",
    },
    images: [
      {
        url: "https://erenonal.com/erenonal.jpg",
        width: 1200,
        height: 630,
        alt: "Eren Onal LinkedIn Profile",
      },
    ],
    url: "https://www.linkedin.com/in/onaleren",
    title: "Eren Onal - Frontend Developer | Personal Website",
    description:
      "Visit Eren Onal's personal website to explore his frontend development skills and projects.",
  },
};
