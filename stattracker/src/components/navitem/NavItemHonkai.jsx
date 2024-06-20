import { NavLink } from "react-router-dom";
export function NavItemHonkai({ children, link, icon }) {
  return (
    <li>
      <NavLink
        to={`/${link}`}
        className={({ isActive }) => 
            `flex flex-row border-t-2 gap-5 h-full px-5 font-montserrat place-items-center font-semibold transition-all ease-in duration-400 ${isActive ? 'bg-stone-800 border-gray-400 text-[#004675] ' : 'hover:bg-stone-800 text-white border-transparent opacity-30 hover:opacity-100'}`
        }
      >
        {icon}
        <span className='hidden md:block'>{children}</span>
      </NavLink>
    </li>
  );
}
