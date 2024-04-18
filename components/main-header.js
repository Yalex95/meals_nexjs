const { default: Link } = require("next/link");
import logo from "@/assets/logo.png";
function Header() {
  return (
    <header>
      <Link href="/">
        <img src={logo.src} alt="logo" />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header
