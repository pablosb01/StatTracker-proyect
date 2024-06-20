import { Link } from 'react-router-dom';
import ValorantLogo from '/public/assets/logos/ValorantLogo';
import logo from '/assets/small-logo-nb.png';
import { NavItem } from '../navitem/NavItem';
import HonkaiLogo from '/public/assets/logos/HonkaiLogo'
import { NavItemHonkai } from '../navitem/NavItemHonkai';

export function Navbar() {
  return (
    <nav className="w-full flex justify-between bg-stone-900 px-5 sticky top-0 z-50">
      <div className='flex items-center'>
        <Link to="/" className="text-lg font-bold text-white">
          <img src={logo} alt="Logo" className="h-12 my-3 hover:scale-[140%] transition duration-200 scale ease-in-out" />
        </Link>
        <ul className="ml-5 h-full flex">
            <NavItem link={'valorant'} icon={<ValorantLogo />}>
              VALORANT
            </NavItem>
            <NavItemHonkai link={'honkai'} icon={<HonkaiLogo />}>
              HONKAI
            </NavItemHonkai>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}