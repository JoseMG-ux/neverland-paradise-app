export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Lista de jugadores",
      href: "/docs",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
  navGroupDungeons : [
    {
      id: 1,
      label: "Grupales",
      href: "/activities/group-dungeons"
    },
    {
      id: 2,
      label: "Estáticas",
      href: "/activities/static-dungeons"
    },
    {
      id: 3,
      label: "Title",
      href: ""
    },
    {
      id: 4,
      label: "Title",
      href: ""
    },
  ]
};
