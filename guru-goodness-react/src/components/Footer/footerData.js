import { EMAIL, MOBILE, MAIN_TIME, Instagram_Link, Facebook_Link, YouTube_Link } from "../../utils/constants";
export const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about/",
  },
  {
    title: "Shop",
    href: "/shop/",
  },
  {
    title: "Consultancy",
    href: "/consultancy/",
  },
  {
    title: "Blog",
    href: "/blog/",
  },
];

export const categories = [
  {
    title: "Dhup & Incense",
    href: "/shop/incense",
  },
  {
    title: "Rudraksha",
    href: "/shop/rudraksha",
  },
  {
    title: "Healing Crystals",
    href: "/shop/crystals",
  },
  {
    title: "Organic Wellness",
    href: "/shop/wellness",
  },
  {
    title: "Kids Collection",
    href: "/shop/kids",
  }
];

export const contactInfo = [
  {
    icon: "fa-brands fa-whatsapp",
    text: MOBILE,
  },
  {
    icon: "fa-regular fa-envelope",
    text: EMAIL,
  },
  {
    icon: "fa-solid fa-location-dot",
    text: "Belghariya, Kolkata, India",
  },
  {
    icon: "fa-regular fa-clock",
    text: MAIN_TIME,
  },
];

export const socialLinks = [
  {
    icon: "fa-brands fa-instagram",
    href: Instagram_Link,
    label: "Instagram",
  },
  {
    icon: "fa-brands fa-facebook-f",
    href: Facebook_Link,
    label: "Facebook",
  },
  {
    icon: "fa-brands fa-youtube",
    href: YouTube_Link,
    label: "YouTube",
  },
];