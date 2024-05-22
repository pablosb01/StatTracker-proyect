import React from 'react';
import logo from '../../assets/small-logo-nb.png';
import { SvgRow } from '../SvgRow/SvgRow';

export function Sidebar() {
  return (
    <nav className="w-screen flex justify-between bg-[var(--gray-nav)] px-5">
      <div className="flex items-center">
        <a href="/" className="text-lg font-bold text-white">
          <img src={logo} alt="Logo" className="h-12 my-[10px]" />
        </a>
      </div>
      <div className="px-5 h-full flex">
        <div className="flex items-center h-full flex-start">
          <SvgRow name='VALORANT'/>
          <SvgRow name='Honkai'/>
        </div>
      </div>
    </nav>
  );
}