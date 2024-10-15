import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialMediaLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet",
    title: "Saving money",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    tourDate: "July 15, 2022",
    tourTitle: "Mountain Tour",
    tourDetails:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "china",
    days: "6",
    price: "$2100",
  },
  {
    id: 2,
    image: tour2,
    tourDate: "August 26, 2020",
    tourTitle: "Himalayan Trekking",
    tourDetails:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "nepal",
    days: "8",
    price: "$3200",
  },
  {
    id: 3,
    image: tour3,
    tourDate: "September 12, 2021",
    tourTitle: "River Cruise",
    tourDetails:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "thailand",
    days: "7",
    price: "$2800",
  },
  {
    id: 4,
    image: tour4,
    tourDate: "October 20, 2022",
    tourTitle: "Hiking in Africa",
    tourDetails:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "south africa",
    days: "10",
    price: "$3500",
  },
  {
    id: 5,
    image: tour5,
    tourDate: "November 15, 2021",
    tourTitle: "Nature Adventure",
    tourDetails:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "australia",
    days: "9",
    price: "$2900",
  },
  {
    id: 6,
    image: tour6,
    tourDate: "December 10, 2022",
    tourTitle: "Beach Adventure",
    tourDetails:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    tourCountry: "usa",
    days: "8",
    price: "$3000",
  },
];
