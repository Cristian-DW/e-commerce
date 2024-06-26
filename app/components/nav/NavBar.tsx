import React from 'react';
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

/**
 * NavBar Component
 *
 * This component serves as the navigation bar for the application.
 * It includes the site logo, search bar, cart count, and user menu.
 *
 * @component
 * @example
 * return (
 *   <NavBar />
 * )
 *
 * @returns {JSX.Element} The rendered NavBar component
 */
const NavBar: React.FC = () => {
  return (
    <div
      className="
      sticky
      top-0
      w-full
      bg-slate-100
      z-30
      shadow-sm
      "
    >
      <div
        className="
         py-4
         border-b-[1px]"
      >
        <Container>
          <div
            className="
               flex
               items-center
               justify-between
               gap-3
               md:gap-0
               "
          >
            <Link
              href="/"
              className={`${redressed.className} text-3xl font-bold`}
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div
              className="
                  flex items-center gap-8 md:gap-12
                  "
            >
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
