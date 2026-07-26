import { Facebook_Link, Instagram_Link, WHATSAPP_URL, YouTube_Link } from "../../utils/constants";
export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about/" },
  { title: "Shop", href: "/shop/" },
  { title: "Consultancy", href: "/consultancy/" },
  { title: "Blog", href: "/blog/" },
  { title: "Contact", href: "/contact/" },
];

export const socialLinks = [
  {
    icon: "fa-brands fa-whatsapp",
    href: WHATSAPP_URL,
    label: "WhatsApp",
  },
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

export const topBar = {
  icon: "fa-solid fa-spa",
  text: "Bringing Positivity, Wellness & Spiritual Balance",
};