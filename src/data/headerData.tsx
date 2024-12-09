import logo from "@/assets/images/logo.png";
import image1 from "@/assets/images/video/1.jpeg"
import image2 from "@/assets/images/video/2.jpeg"
import image3 from "@/assets/images/video/3.jpeg"
import image4 from "@/assets/images/video/4.jpg"



const headerData = {
  logo,
  navData: [
    {
      id: 1,
      href: "/",
      name: "HOME",
    },
    {
      id: 2,
      href: "/#service",
      name: "OUR SERVICES",
    },
    // {
    //   id: 3,
    //   href: "#",
    //   name: "PROJECTS",
    //   subItems: [
    //     {
    //       id: 1,
    //       href: "/plan/basic",
    //       name: "Commercial Space",
    //     },
    //     {
    //       id: 2,
    //       href: "/plan/premium",
    //       name: "Residential Space",`
    //     },
    //     // Add more sub-items as needed
    //   ],
    // },
    {
      id: 3,
      href: "/porfolios",
      name: "OUR PORTFOLIO",
    },
    {
      id: 4,
      href: "/#whyus",
      name: "WHY US",
    },
    {
      id: 5,
      href: "/about",
      name: "ABOUT US",
    },
    // {
    //   id: 6,
    //   href: "/testimonial",
    //   name: "TESTIMONIAL",
    // },
    {
      id: 7,
      href: "/blogs",
      name: "BLOG",
    },
    {
      id: 8,
      href: "/#reachus",
      name: "REACH US",
    },
  ],
};



const videoData = [
  // {
  //   id: 1,
  //   img: image1,
  //   video: 'https://drarpitbck.demo-web.live/wp-content/uploads/2024/10/1.mp4',
  // },
  // {
  //   id: 2,
  //   img: image2,
  //   video: 'https://drarpitbck.demo-web.live/wp-content/uploads/2024/10/2.mp4',
  // },
  
  {
    id: 3,
    img: image3,
    video: 'https://backend.drarpitbansal.in/wp-content/uploads/2024/10/3.mp4',
  },
  {
    id: 4,
    img: image4,
    video: 'https://backend.drarpitbansal.in/wp-content/uploads/2024/10/4.mp4',
  },
  
]


export  {headerData ,videoData};