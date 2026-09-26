
import Image from "next/image";
import logo from "@/assets/logo.png";

import { ActiveLink } from "./ActiveLink";
import NavbarCounts from "./NavbarCounts";

const Navbar = () => {
  
  return (
    <nav className="bg-[#0c0c0e] sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <ActiveLink href="/" exact>
                  Workouts
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/listed-workouts">
                  My Plan
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="Book VIbe" width={50} height={50} />
            <span className="text-xl font-bold">FITLOG</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <Link href="/">Workouts</Link>
            </li> */}
            <li>
              <ActiveLink  href="/" exact>
                Workouts
              </ActiveLink>
            </li>
            {/* <li>
              <Link href="/plan">My Plan</Link>
            </li> */}
            <li>
              <ActiveLink href="/listed-workouts">
                My Plan
              </ActiveLink>
            </li>
          </ul>
        </div>
        <NavbarCounts />
      </div>
    </nav>
  );
};

export default Navbar;
