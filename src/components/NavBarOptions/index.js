import useLocation from 'wouter/use-location';
import NavLink from '../NavLink';


export default function NavBarOptions() {
  // const collapseNavbar = () => window.toggleCollapse('navbar', false)
  const collapseNavbar = () => {};
  return (
    <div
      className="text-2xl hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      id="navbar"
    >
      <ul className="space-x-8 text-lg flex flex-col md:flex-row text-center">
        <li className="hidden">
          <span className="capsize">Home</span>
        </li>
        <NavLink onClick={collapseNavbar} to="/" aria-current="page">
          Home
        </NavLink>
        <NavLink onClick={collapseNavbar} to="/about" aria-current="page">
          About
        </NavLink>
        <NavLink onClick={collapseNavbar} to="/experiences">
          Experiences
        </NavLink>
        <NavLink onClick={collapseNavbar} to="/projects" aria-current="page">
          Projects
        </NavLink>
        <NavLink onClick={collapseNavbar} to="/contact">
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
