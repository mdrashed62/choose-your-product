import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="">
        <h1 className="text-3xl font-semibold text-blue-500">Pick Place</h1>
      </nav>
      <nav>
      <nav className="grid grid-flow-col gap-4">
    <Link to="/aboutUs"><li>About Us</li></Link>
    <Link to="/contactUs"><li>Contact Us</li></Link>
  </nav>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by pick
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
