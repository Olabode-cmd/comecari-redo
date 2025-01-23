import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const addTruckSchema = Yup.object().shape({
  truckName: Yup.string()
    .required('Truck name is required'),
  model: Yup.string()
    .required('Truck model is required'),
  chaseNumber: Yup.string()
    .required('Chase number is required'),
  vimNumber: Yup.string()
    .required('VIM number is required'),
  height: Yup.number()
    .required('Height is required')
    .positive('Height must be positive'),
  weightCapacity: Yup.number()
    .required('Weight capacity is required')
    .positive('Weight capacity must be positive'),
  plateNumber: Yup.string()
    .required('Plate number is required'),
  driverLicense: Yup.string()
    .required("Driver's license is required"),
  assignedDriver: Yup.string()
    .required('Assigned driver is required'),
});

export const addDriverSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
});

export const filterMarketplaceSchema = Yup.object().shape({
  pickupLocation: Yup.string()
    .required('Pickup location is required'),
  deliveryLocation: Yup.string()
    .required('Delivery location is required'),
  bidAmount: Yup.number()
    .required('Bid amount is required')
    .positive('Bid amount must be positive'),
  collection: Yup.date()
    .required('Collection date is required'),
  delivery: Yup.date()
    .required('Delivery date is required')
    .min(Yup.ref('collection'), 'Delivery date must be after collection date'),
});