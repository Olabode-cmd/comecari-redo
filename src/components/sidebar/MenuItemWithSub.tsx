import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface MenuItemWithSubProps {
  icon: IconType;
  label: string;
  children: React.ReactNode;
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const MenuItemWithSub = ({
  icon: Icon,
  label,
  children,
  isActive,
  isOpen,
  onToggle,
}: MenuItemWithSubProps) => {
  return (
    <li>
      <NavLink
        to="#"
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          isActive && 'bg-graydark dark:bg-meta-4'
        }`}
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        <Icon className="h-5 w-5" />
        {label}
        <MdKeyboardArrowDown
          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-transform ${
            isOpen && 'rotate-180'
          }`}
        />
      </NavLink>
      <div
        className={`translate transform overflow-hidden ${
          !isOpen && 'hidden'
        }`}
      >
        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
          {children}
        </ul>
      </div>
    </li>
  );
};

export default MenuItemWithSub;