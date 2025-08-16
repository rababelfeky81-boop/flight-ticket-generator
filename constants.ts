
import type { TicketData } from './types';

export const INITIAL_TICKET_DATA: TicketData = {
  fullName: 'DOE/JOHN MR',
  departureCity: 'Cairo',
  departureAirport: 'CAI',
  arrivalCity: 'London',
  arrivalAirport: 'LHR',
  flightNumber: 'MS777',
  departureDateTime: '2024-09-15T09:30',
  arrivalDateTime: '2024-09-15T13:00',
  terminal: '3',
  duration: '05h 30m',
  bookingReference: 'ABCDEF',
  ticketNumber: '077-1234567890',
  agentInfo: 'EgyptAir Online Booking',
  baggageInfo: '1PC',
  flightClass: 'T',
  paymentMethod: 'VISA ************1234',
  fare: 'EGP 8500.00',
  taxes: 'EGP 1500.00',
  total: 'EGP 10000.00',
};
