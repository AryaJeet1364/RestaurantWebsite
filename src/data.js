// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate_new.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.jpg';
import MenuImg2 from '../src/assets/img/menu/2.jpg';
import MenuImg3 from '../src/assets/img/menu/3.jpg';
import MenuImg4 from '../src/assets/img/menu/4.jpg';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.jpg';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

// export const navData = [
//   { href: '/', name: 'home' },
//   { href: '/', name: 'about' },
//   { href: '/', name: 'menu' },
//   { href: '/', name: 'team' },
//   { href: '/', name: 'testimonials' },
//   { href: '/', name: 'book a table' },
//   { href: '/', name: 'contact' },
// ];

export const navData = [
  { href: "hero", name: "home" },
  { href: "about", name: "about" },
  { href: "menu", name: "menu" },
  { href: "team", name: "team" },
  { href: "testimonial", name: "testimonials" },
  { href: "reservation", name: "book a table" },
  { href: "footer", name: "contact" },
];


export const heroData = {
  pretitle: "Nothing brings together like",
  title: "Bistro Cafe",
  subtitle:
    " A place where the hustle and bustle of life fade away, replaced by the comforting clinks of cutlery and the savory aroma of culinary mastery ",
  btnText: "Find out more",
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "we are special",
  title: "why us?",
  subtitle:
    "Bistro Cafe is more than a name; it embodies our dedication to excellence in Indian cuisine. Our passionate chefs meticulously prepare each dish using traditional techniques and the freshest ingredients, ensuring an authentic culinary experience. Join us on a flavorful journey that captures the essence of India in every bite, where warm hospitality meets genuine flavors. Welcome to Bistro Cafe, where every meal tells a story of tradition, quality, and unforgettable taste.",
  btnText: "find out more",
  image: AboutImg,
};

export const menuData = {
  title: "Fall Feasts and Flavors",
  subtitle: "this month's special",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Special Pizza",
      price: "₹199",
      description:
        "A savory medley of paneer, onion, and capsicum atop a crispy crust",
    },
    {
      image: MenuImg2,
      name: "Strawberry Pastry",
      price: "₹150",
      description:
        "A delightful treat bursting with the vibrant flavor of fresh strawberries",
    },
    {
      image: MenuImg3,
      name: "Boiled Eggs",
      price: "₹110",
      description: "Simple, nutritious, and satisfying",
    },
    {
      image: MenuImg4,
      name: "Pancake Tower",
      price: "₹260",
      description:
        "Indulge in a towering stack of fluffy pancakes, drizzled with your choice of syrup and topped with a dollop of whipped cream",
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "chef of the month",
  sub1: "Konan's mastery of Indian cuisine shines with authentic flavors, creative fusion, artful presentation, and sustainable sourcing, captivating diners and earning his widespread acclaim.",
  sub2: "Specialities: Butter Chicken, Paneer Tikka Masala, Cheesecakes",
  name: "Bismat konan",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "From the moment we stepped into this charming restaurant, we were greeted with warmth and hospitality. The ambiance was delightful, and the food surpassed our expectations. Every dish was bursting with flavor, and the presentation was impeccable. A truly memorable dining experience that we can't wait to repeat",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "What a culinary gem! Our evening at this restaurant was nothing short of extraordinary. The attention to detail in every aspect, from the decor to the service, was remarkable. And the food? Simply divine. Each bite was a burst of culinary bliss, leaving us eager to return for more",
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of PastryMall",
    },
    {
      message:
        "We stumbled upon this restaurant by chance and were pleasantly surprised by the gastronomic journey it offered. The menu boasted a fusion of flavors that intrigued our taste buds. With each dish expertly crafted and bursting with freshness, it's evident that the chefs here are passionate about their craft. A definite must-visit for any food enthusiast!",
      image: Avatar3,
      name: "Henry A.",
      occupation: "Researcher at FSSAI",
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Book your seat here, or call at 0552-12345 required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

// export const newsletterData = {
//   title: 'join our newsletter',
//   subtitle: 'Get latest news & updates in your inbox.',
//   placeholder: 'Subscribe our delicious dishes',
//   btnText: 'subscribe now',
// };

export const newsletterData = {
  title: "Got any queries?",
  subtitle: "Type your email-address here and fill the google form",
  placeholder: "Is the restaurant open today?",
  btnText: "Send it now",
};
export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784,64C, Civil road, Lucknow - 224615 ',
    phone: '0552-87645',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
