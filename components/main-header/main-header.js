
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

import MainHeaderBG from "@/components/main-header/main-header-background";
import Link from "next/link";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBG />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink  href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default MainHeader;
