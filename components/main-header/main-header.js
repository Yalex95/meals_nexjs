const { default: Link } = require("next/link");
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

import MainHeaderBG from "@/components/main-header/main-header-background";

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
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default MainHeader;
