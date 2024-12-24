import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarHeader } from './';
import { MenuGroup } from './';
import { MenuItem } from './';
import { MenuItemWithSub } from './';
import { icons } from './icons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <SidebarHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        triggerRef={trigger}
      />

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <MenuGroup title="MENU">
            {/* <MenuItemWithSub
              icon={icons.dashboard}
              label="Dashboard"
              isActive={pathname === '/' || pathname.includes('dashboard')}
              isOpen={sidebarExpanded}
              onToggle={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <MenuItem
                to="/"
                icon={icons.dashboard}
                label="eCommerce"
                isActive={pathname === '/'}
              />
            </MenuItemWithSub> */}

            <MenuItem
              to="/dashboard"
              icon={icons.dashboard}
              label="Dashboard"
              isActive={pathname.includes('dashboard')}
            />

            <MenuItem
              to="/calendar"
              icon={icons.calendar}
              label="Calendar"
              isActive={pathname.includes('calendar')}
            />

            <MenuItem
              to="/profile"
              icon={icons.profile}
              label="Profile"
              isActive={pathname.includes('profile')}
            />

            <MenuItemWithSub
              icon={icons.forms}
              label="Forms"
              isActive={pathname === '/forms' || pathname.includes('forms')}
              isOpen={sidebarExpanded}
              onToggle={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <MenuItem
                to="/forms/form-elements"
                icon={icons.forms}
                label="Form Elements"
              />
              <MenuItem
                to="/forms/form-layout"
                icon={icons.forms}
                label="Form Layout"
              />
            </MenuItemWithSub>
          </MenuGroup>

          <MenuGroup title="OTHERS">
            <MenuItem
              to="/chart"
              icon={icons.chart}
              label="Chart"
              isActive={pathname.includes('chart')}
            />

            <MenuItemWithSub
              icon={icons.ui}
              label="UI Elements"
              isActive={pathname === '/ui' || pathname.includes('ui')}
              isOpen={sidebarExpanded}
              onToggle={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <MenuItem to="/ui/alerts" icon={icons.ui} label="Alerts" />
              <MenuItem to="/ui/buttons" icon={icons.ui} label="Buttons" />
            </MenuItemWithSub>

            <MenuItemWithSub
              icon={icons.auth}
              label="Authentication"
              isActive={pathname === '/auth' || pathname.includes('auth')}
              isOpen={sidebarExpanded}
              onToggle={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <MenuItem
                to="/auth/signin"
                icon={icons.auth}
                label="Sign In"
              />
              <MenuItem
                to="/auth/signup"
                icon={icons.auth}
                label="Sign Up"
              />
            </MenuItemWithSub>
          </MenuGroup>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;