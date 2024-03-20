import { Link } from "react-router-dom";

export const Navigation = {
  categories: [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Books",
      link: "book",
    },
    {
      id: 3,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ],
  auth: [{
    id: 1,
    name: "Sign Up",
    link: "/sign-up",
  },
  {
    id: 2,
    name: "Sign In",
    link: "/sign-in",
  },]
};


export const items = [
  {
    label: <Link to="/"> Home </Link>,
    key: 'home'
  },
  {
    label: <Link to="/book"> Books </Link>,
    key: 'book',
  },
  {
    label: "Category",
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: <Link to="/about-us">About Us</Link>,
    key: 'about-us',
  },
  {
    label: <Link to="/contact">Contact Us </Link>,
    key: 'contact'
  },
];

