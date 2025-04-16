import { Home, Disc, EqualApproximately, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent } from 'react';


export type Navlink = { name: string; path: string; icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">> }

export const navLinks: Navlink[] = [
  { name: "home", path: "/", icon: Home },
  { name: "collections", path: "/collections", icon: Disc },
  { name: "about", path: "/about", icon: EqualApproximately },
];
