import { lazy } from 'react';

// const Calendar = lazy(() => import('../pages/Calendar'));
const Trucks = lazy(() => import('../pages/dashboard/trucks'));
const Drivers = lazy(() => import('../pages/dashboard/drivers'));
const Jobs = lazy(() => import('../pages/dashboard/jobs'));
const Bids = lazy(() => import('../pages/dashboard/bids'));
const Marketplace = lazy(() => import('../pages/dashboard/marketplace'));
const Invoice = lazy(() => import('../pages/dashboard/invoice'));
const Reports = lazy(() => import('../pages/dashboard/reports'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/fleets/trucks',
    title: 'Trucks',
    component: Trucks,
  },
  {
    path: '/fleets/drivers',
    title: 'Drivers',
    component: Drivers,
  },
  {
    path: '/jobs',
    title: 'Jobs',
    component: Jobs,
  },
  {
    path: '/bids',
    title: 'Bids',
    component: Bids,
  },
  {
    path: '/marketplace',
    title: 'Marketplace',
    component: Marketplace,
  },
  {
    path: '/invoice',
    title: 'Invoice',
    component: Invoice,
  },
  {
    path: '/reports',
    title: 'Reports',
    component: Reports,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
