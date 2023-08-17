// Website related settings
const settings = {
  isSplash: false,
  useCustomCursor: false,
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sai kumar",
  logo_name: "</>",
  nickname: "sai kumar",
  full_name: "kongari sai kumar",
  subTitle: "Full Stack Developer, Problem Solver. Always learning.",
  resumeLink: "have to update",
  mail: "mailto:kongarisaikumar12@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/saikumar1277",
  linkedin: "https://www.linkedin.com/in/sai-kumar-780b74207/",
  gmail: "kongarisaikumar12@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "have to update",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS ",
        "⚡ Developing mobile applications using  native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CVR College of Engineering",
      subtitle: "B.Tech in Computer Science and Cyber Security",
      logo_path: "cvr.jpg",
      alt_name: "",
      duration: "",
      cgpa: 7.9,
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for  Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.cvr.ac.in/",
    },
    {
      title: "Pragathi Junior College",
      subtitle: "Higher Secondary Education",
      logo_path: "inter.jpg",
      alt_name: "",
      duration: "",
      cgpa: 9.6,
      descriptions: [
        "⚡ I have studied core subjects like Maths, Chemistry, Physics",
      ],
      website_link: "https://www.telangana.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Development",
      subtitle: "coursera",
      logo_path: "coursera.png",
      certificate_link: "has to update",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Programming in Java",
      subtitle: "NPTEL",
      logo_path: "nptel.jpg",
      certificate_link: "has to update",
      alt_name: "NPTEL",
      color_code: "#ffc475",
    },
    {
      title: "React Js",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link: "has to update ",
      alt_name: "Udemy",
      color_code: "#ffc475",
    },
    {
      title: "Introduction to SQL",
      subtitle: "simplylearn",
      logo_path: "simplilearn.jpg",
      certificate_link: "has to update ",
      alt_name: "Simplylearn",
      color_code: "#1e70c1",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web based projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sai7.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Expense",
      url: "https://github.com/saikumar1277/expenses-tracker-using-MERN",
      description:
        "Help users track their income and expenses. It provides a user-friendly interface, filtering options for effective financial management.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "node jS",
          iconifyClass: "logos-nodejs",
        },

        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Youtube Bookmarker",
      url: "https://github.com/saikumar1277/Youtube_Bookmark_Extension",
      description:
        "users can easily bookmark YouTube videos at any duriation by clicking on the bookmark icon displayed next to the video title. ",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "will be updated",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },

    {
      name: "Portfolio",
      url: "https://github.com/saikumar1277/Portfolio_Flask",
      description: "(This) A clean and dynamic portfolio template.",
      languages: [
        {
          name: "flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "sql",
          iconifyClass: "logos-sql",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};
