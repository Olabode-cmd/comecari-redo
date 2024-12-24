import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';

interface MenuItemProps {
  to: string;
  icon: IconType;
  label: string;
  isActive?: boolean;
}

const MenuItem = ({ to, icon: Icon, label, isActive }: MenuItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          isActive && 'bg-graydark dark:bg-meta-4'
        }`}
      >
        <Icon className="h-5 w-5" />
        {label}
      </NavLink>
    </li>
  );
};

export default MenuItem;