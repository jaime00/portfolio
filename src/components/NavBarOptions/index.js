import NavLink from '../NavLink';

export default function NavBarOptions({ menuIsOpen, setMenuIsOpen }) {
  const collapseNavbar = () => {
    if (window.innerWidth < 768) {
      setMenuIsOpen(false)
    }
  };
  const classesExtends = menuIsOpen ? '' : 'hidden';

  // if (menuIsOpen) {
  //   return (
  //     <div className='modaljaime absolute top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center' style={{ overflow: 'hidden' }}>
  //       <div className='bg-white p-4 rounded-lg'>
  //         <p>Modal content goes here</p>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div
      className={`select-none text-2xl ${classesExtends} justify-between items-center w-full md:flex md:w-auto md:order-1`}
      id="navbar"
    >
      <ul className="space-x-8 text-lg flex flex-col md:flex-row text-center">
        <li className="hidden">
          <span className="capsize">Home</span>
        </li>
        <NavLink className="pointer-events-none" onClick={collapseNavbar} to="/" aria-current="page">
          Home
        </NavLink>
        <NavLink className="pointer-events-none" onClick={collapseNavbar} to="/about" aria-current="page">
          About
        </NavLink>
        <NavLink className="pointer-events-none" onClick={collapseNavbar} to="/experiences">
          Experiences
        </NavLink>
        <NavLink className="pointer-events-none" onClick={collapseNavbar} to="/side-projects" aria-current="page">
          Projects
        </NavLink>
        <NavLink className="pointer-events-none" onClick={collapseNavbar} to="/contact">
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
