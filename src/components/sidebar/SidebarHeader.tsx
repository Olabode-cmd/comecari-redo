import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg';
import { MdMenu } from 'react-icons/md';

interface SidebarHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

const SidebarHeader = ({
  sidebarOpen,
  setSidebarOpen,
  triggerRef,
}: SidebarHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <button
        ref={triggerRef}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="block lg:hidden"
      >
        <MdMenu className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SidebarHeader;