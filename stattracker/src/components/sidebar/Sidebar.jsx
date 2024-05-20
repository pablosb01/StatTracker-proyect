import React from 'react';
import logo from '../../assets/small-logo-nb.png';
import { SvgRow } from '../SvgRow/SvgRow';

export function Sidebar() {
  return (
    <nav className="w-screen flex justify-between bg-[var(--gray-nav)] h-14">
      <div className="flex items-center px-4">
        <a href="/" className="text-lg font-bold text-white">
          <img src={logo} alt="Logo" className="h-12" />
        </a>
      </div>
      <div className="px-4 h-full w-full flex">
        <div className="w-full flex items-center h-full flex-start">
          <SvgRow name='VALORANT'/>
          <SvgRow name='Honkai'/>
        </div>
      </div>
    </nav>
  );
};