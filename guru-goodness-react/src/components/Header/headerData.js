import { WHATSAPP_URL } from "../../utils/constants";
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
    href: "#",
    label: "Instagram",
  },
  {
    icon: "fa-brands fa-facebook-f",
    href: "#",
    label: "Facebook",
  },
  {
    icon: "fa-brands fa-youtube",
    href: "#",
    label: "YouTube",
  },
];

export const topBar = {
  icon: "fa-solid fa-spa",
  text: "Bringing Positivity, Wellness & Spiritual Balance",
};