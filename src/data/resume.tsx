import { IconProps, Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LucideProps } from "lucide-react";
import { ReactNode } from "react";

interface IResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: {
    href: string;
    icon: React.ComponentType<LucideProps>;
    label: string;
  }[];
  contact: {
    email: string;
    tel: string;
    social: {
      [key: string]: {
        name: string;
        url: string;
        icon: React.ComponentType<LucideProps>;
        navbar: boolean;
      };
    };
  };
  work: {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[];
  education: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[];
  projects: {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: {
      type: string;
      href: string;
      icon: ReactNode;
    }[];
    image: string;
    video: string | undefined;
  }[];
  hackathons: {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    links: {
      title: string;
      icon: ReactNode;
      href: string;
    }[];
    win?: string;
  }[];
}

export const DATA: IResumeData = {
  name: "Aman Negi",
  initials: "AN",
  url: "https://asterjoules.netlify.app",
  location: "Uttarakhand, India",
  locationLink: "https://www.google.com/maps/place/uttarakhand",
  description:
    "I'm an app & web developer, a freelancer, and a big fan of open-source communities. Oh, and did I mention I love Flutter? 💙",
  summary:
    "I started my journey as an Android developer, but transitioned to Flutter soon after its launch. After working as a freelancer for some time, I discovered the world of open source, and the idea of having proof of work and code ownership really resonated with me. Since then, I’ve had the privilege of participating in two prestigious open source programs—Google Summer of Code (GSoC) and GitHub Octernships. These opportunities have been transformative, offering immense growth both as a developer and on a personal level.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Dart",
    "Java",
    "TypeScript",
    "C/C++",
    "JavaScript",
    "Python",
    "SQL",
    "Flutter",
    "ExpressJS",
    "ReactJS",
    "NextJS",
    "SpringBoot",
    "Django",
    "TailwindCSS",
    "Bootstrap",
    "MUI",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Android Studio",
    "VS Code",
    "IntelliJ",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "asterjoules@gmail.com",
    tel: "~",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amannegi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-negi-3a1a221a9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/asterjoules",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@asterjoules",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Summer of Code 2024",
      href: "https://summerofcode.withgoogle.com/programs/2024/projects/41d12z0y",
      badges: [],
      location: "Remote",
      title: "GSoC'24 @Rocket.Chat",
      logoUrl: "/gsoc.png",
      start: "May 2024",
      end: "August 2024",
      description:
        "Built a Rocket.Chat app enabling direct GIF generation from chat using react and typescript. While working discovered a bug, fixed it and boosted frontend performance by reducing excessive API calls with debouncing, reducing multiple requests by 90%",
    },
    {
      company: "GitHub Education",
      badges: [],
      href: "https://github.com/AppFlowy-IO/AppFlowy/pulls?q=is%3Apr+is%3Aclosed+author%3Aamannegi",
      location: "Remote",
      title: "GitHub Octern @AppFlowy",
      logoUrl: "/appflowy.png",
      start: "June 2023",
      end: "August 2023",
      description:
        "Collaborated with the AppFlowy team and contributors to develop the Outline and Template feature. Worked on other minor bugs, improving overall application stability and performance through 10+ PRs. Utilized Flutter and learned about BLoC architecture, Git and GitHub usage in large-scale projects, and industry-grade code abstraction and management techniques.",
    },
    {
      company: "iWeBron Technologies Private Limited",
      href: "https://www.linkedin.com/company/iwebron-technologies-private-limited",
      badges: [],
      location: "Remote",
      logoUrl: "/iwebron.jpeg",
      title: "Software Developer Intern",
      start: "July 2022",
      end: "Sep 2022",
      description:
        "Contributed to the development of 10+ entry-level web projects, mastering core concepts of React and Node. Automated testing and deployment processes using GitHub Actions (CI/CD), reducing manual efforts by 75%. Implemented Docker and containerization for enhanced project scalability and consistency.",
    },
    {
      company: "Technofox Solutions",
      href: "https://www.linkedin.com/company/technofox-solutions/",
      badges: [],
      location: "Remote",
      logoUrl: "/technofox.png",
      title: "Flutter Developer Intern",
      start: "Jun 2020",
      end: "Sep 2020",
      description:
        "Led a team of two interns. Oversaw the development of Flutter applications, fostering collaboration and honing leadership abilities. Gained hands-on experience in project management and contributed to the delivery of effective app solutions.",
    },
    {
      company: "Prescient Automation",
      href: "https://www.linkedin.com/company/prescient-automation/",
      badges: [],
      location: "Remote",
      logoUrl: "/prescient.jpeg",
      title: "Junior Flutter Intern",
      start: "Apr 2020",
      end: "Sep 2020",
      description:
        "Worked closely with team lead, gaining insights into collaborative teamwork and honing Flutter skills. Gained solid foundation in both teamwork dynamics and Flutter application development methodologies.",
    },
    {
      company: "Freelancer.com",
      href: "http://Freelancer.com",
      badges: [],
      location: "Remote",
      logoUrl: "/freelancer.png",
      title: "Freelancer",
      start: "Feb 2018",
      end: "Mar 2020",
      description:
        "Undertook Flutter projects that allowed acquisition of practical expertise in creating applications with Flutter. Gained hands-on experience and earned compensation for work. Refined Flutter skills and understood the dynamics of freelancing in the tech industry.",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "",
      degree: "BTech Computer Science (Lateral Entry) - 8.8 CGPA",
      logoUrl: "/lpu.png", // Added empty string as placeholder
      start: "2023",
      end: "2026",
    },
    {
      school: "Uttaranchal University",
      href: "",
      degree: "Diploma in Computer Science - 9 CGPA",
      logoUrl: "/uu.jpg", // Added empty string as placeholder
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Apps.AI.GIF",
      href: "https://github.com/rocketchat/apps.ai.gif",
      description:
        "Developed an innovative Rocket.Chat application enabling AI-generated GIFs directly within the platform. Features include GIF generation from user prompts or queries, profanity filtering, and viewing past generations. The app integrates seamlessly with Rocket.Chat, utilizing webhooks for non-blocking experiences and leveraging LLMs for prompt generation and content filtering.",
      technologies: [
        "TypeScript",
        "Apps Engine",
        "LLM (Text-to-GIF)",
        "AI Integration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rocketchat/apps.ai.gif",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Documentation",
          href: "https://github.com/amannegi/google-summer-of-code-24",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/yBfYn37eXyU?si=Uu5Y-jPOyRVu5hHl",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/appsaigif_banner.png",
      video: "",
      active: true,
      dates: "",
    },
    {
      title: "FreshNest",
      href: "https://github.com/amannegi/freshnest",
      dates: "",
      active: true,
      description:
        "FreshNest is an open-source platform that connects local farmers with consumers. I played a key role in developing its full-stack application, managing community contributions, and ensuring code quality. The platform uses state-of-the-art code standards and is well-maintained, making it a great resource for beginner Open Source developers to get started.",
      technologies: [
        "ReactJS",
        "Flutter",
        "MongoDB",
        "Firebase",
        "ExpressJS",
        "GitHub",
        "Hacktoberfest",
      ],
      links: [
        {
          type: "Website",
          href: "https://fresh-nest.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amannegi/freshnest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/freshnest_banner.png",
      video: undefined,
    },
    {
      title: "UI Kit",
      href: "https://github.com/amannegi/flutteruikit",
      dates: "",
      active: true,
      description:
        "Developed an application with 30+ demo screens, that can be freely used by the community as templates. Documented codebase for easy implementation and integration. Showcases the use of popular as well as niche widgets available in Flutter. An open source project with more than 1000+ downloads and 50+ stars on GitHub.",
      technologies: ["1K+ downloads", "Flutter", "GitHub"],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.aster.flutter_30_days&pcampaignid=web_share",
          icon: <Icons.playStore className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amannegi/flutteruikit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/flutter_ui_kit_banner.png",
      video: undefined,
    },
    {
      title: "CoverCraft - Figma x Hashnode",
      href: "https://github.com/Nabhag8848/CoverCraft",
      description:
        "Developed a seamless integration between Figma and Hashnode, enabling direct updates of blog post banners from Figma. This innovative Figma plugin streamlines the workflow for content creators, allowing them to design and implement custom cover images efficiently.",
      technologies: [
        "TypeScript",
        "React",
        "GraphQL",
        "Figma Plugin",
        "Supabase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Nabhag8848/CoverCraft",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/8emDk72BMaI?si=jbrAVfdco3pwLKAI",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Website",
          href: "https://cover-craft.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cover_craft_banner.png",
      video: "",
      active: true,
      dates: "",
    },
    {
      title: "Copyable",
      href: "https://github.com/amannegi/copyable",
      dates: "",
      active: true,
      description:
        "A web and mobile application build using Flutter, that can be used to save some text and instantly get it when needed. This app is build for content creators, developers, designers and many more people who come across writing the same things again and again.",
      technologies: ["Flutter", "Firebase", "GitHub"],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.aster.copyable&pcampaignid=web_share",
          icon: <Icons.playStore className="size-3" />,
        },
        {
          type: "Website",
          href: "https://amannegi.github.io/copyable",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amannegi/copyable",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/projects/copyable_banner.png",
      video: undefined,
    },
    {
      title: "Mystic Melodies",
      href: "https://github.com/amannegi/mysticmelodies",
      dates: "",
      active: true,
      description:
        "Developed with [Nabhag](https://github.com/Nabhag8848) in an MLH Hackathon. A revolutionary barber app allowing users to register seats in advance, optimize schedules, and receive real-time updates. Includes personalized profiles, reviews, and loyalty programs to enhance transparency.",
      technologies: [
        "Flutter",
        "NodeJS",
        "MongoDB",
        "TypeScript",
        "Sponsor Winner (🏆)",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amannegi/mysticmelodies",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/j7Dslmie_4s?si=biVgNHiXbjLwYorD",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/mystic_melodies_banner.png",
      video: undefined,
    },
    {
      title: "TrimTime",
      href: "",
      description:
        "Developed with Nabhag in an MLH Hackathon. A revolutionary barber app allowing users to register seats in advance, optimize schedules, and receive real-time updates. Includes personalized profiles, reviews, and loyalty programs to enhance transparency.",
      technologies: ["Flutter", "NodeJS", "MongoDB", "TypeScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Nabhag8848/TrimTime",
          icon: <Icons.github className="size-3" />,
        },

        {
          type: "Youtube",
          href: "https://youtu.be/UaXVTNSsLBE?si=HlL49PCteD2fFLbW",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/trim_time_banner.png",
      video: undefined,
      active: true,
      dates: "",
    },
    {
      title: "Co-Ride",
      href: "",
      description:
        "An application that connects people traveling in the same direction, reducing single-occupancy vehicles, air pollution, fuel consumption, and carbon emissions. Won second place at Hack-ccelerate, MLH Hackathon.",
      technologies: ["Flutter", "GoogleMaps", "Second Winner (🏆)"],
      links: [
        {
          type: "Source",
          href: "https://github.com/amannegi/coride",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/GjIVa58AbSQ?si=JtxfZ5cDG4wd1uPN",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/coride_banner.png",
      video: undefined,
      active: true,
      dates: "",
    },
    {
      title: "Local Vendor App",
      href: "",
      description:
        "A cost-effective solution for vendors to create their own apps. Admins manage items, provide chat support, and send push notifications. Users browse, order, book tables, and chat with support. Enhances choice and connects local businesses with customers.",
      technologies: ["Flutter", "Firebase DB", "Firebase Storage", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmanNegi/LocalVendorApp",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/cMz56Ee0rTQ?si=r69ukCWIAYVBb8op",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/local_vendor_banner.png",
      video: undefined,
      active: true,
      dates: "",
    },
    {
      title: "Self Remedy",
      href: "",
      description:
        "An educational and collaborative app inspired by Wikipedia and open-source projects. Provides information about diseases, allowing users to learn and contribute. Won third place at HackFit 2, MLH Hackathon.",
      technologies: ["Flutter", "GitHub", "Third Winner (🏆)"],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmanNegi/SelfRemedy",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/RV37EaMr0FI?si=0yEwrwGccE4YxvoH",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/self_remedy_banner.png",
      video: undefined,
      active: true,
      dates: "",
    },
  ],
  hackathons: [],
} as const;
