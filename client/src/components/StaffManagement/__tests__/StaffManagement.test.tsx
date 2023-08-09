import React from 'react';
import { render, screen } from '@testing-library/react';
import StaffManagement from '../StaffManagement';
import { IClientTaskData, IClientStaffData } from '../../../types/types';
import { testTaskData } from '../../../mocks/data/tasks';
import { testStaffData } from '../../../mocks/data/staff';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const gameId = 'gameId';
const queryClient = new QueryClient();

describe('<StaffManagement />', () => {
  it('renders the staff list correctly without crashing', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <StaffManagement tasks={testTaskData} staff={testStaffData} />
      </QueryClientProvider>,
    );

    // Check if all staff are rendered correctly
    testStaffData.forEach((staff) => {
      expect(screen.getByText(staff.name)).toBeInTheDocument();
    });
  });

  // Check if the correct headings are rendered for Available Staff and Busy Staff
  it('Check if the component correctly separates staff into Available and Busy based on their availability', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <StaffManagement tasks={testTaskData} staff={testStaffData} />
      </QueryClientProvider>,
    );
  
    // Filtering the busy staff from the test data
    const busyStaff = testStaffData.filter((staff) => !staff.availability);
  
    // Finding the "Busy Staff" heading
    const busyStaffHeading = screen.getByText('Busy Staff');
  
    // Finding the parent div of the "Busy Staff" heading, assuming it's the next sibling
    const busyStaffContainer = busyStaffHeading.nextSibling as HTMLElement;
  
    // Checking if the container is actually a div and has the correct number of child elements
    if (busyStaffContainer && busyStaffContainer.tagName === 'DIV') {
      // Expecting the number of children in the container to match the length of the busyStaff array
      expect(busyStaffContainer.children.length).toBe(busyStaff.length);
    } else {
      throw new Error('Busy staff container not found or incorrect element type');
    }
      // Filtering the available staff from the test data
      const availableStaff = testStaffData.filter((staff) => staff.availability);
  
      // Finding the "Busy Staff" heading
      const availableStaffHeading = screen.getByText('Available Staff');
    
      // Finding the parent div of the "Busy Staff" heading, assuming it's the next sibling
      const availableStaffStaffContainer = availableStaffHeading.nextSibling as HTMLElement;
    
      // Checking if the container is actually a div and has the correct number of child elements
      if (availableStaffStaffContainer && availableStaffStaffContainer.tagName === 'DIV') {
        // Expecting the number of children in the container to match the length of the busyStaff array
        expect(availableStaffStaffContainer.children.length).toBe(availableStaff.length);
      } else {
        throw new Error('Busy staff container not found or incorrect element type');
      }
  });
  

    // Check if StaffCard components are rendered for all available staff
    it('should render StaffCard for all available staff', () => {});

    // Check if StaffCard components are rendered for all not available staff
    it('should render StaffCard for all busy staff', () => {});

    // Check if the grid layout is correctly applied
    it('should display the staff in the correct grid layout', () => {});

    // Check if the correct number of StaffCard components are rendered
    it('should render the correct number of StaffCard components based on the staff data', () => {});

    // Check if the correct tasks are passed to each StaffCard
    it('should pass the correct tasks to each StaffCard', () => {});

    // Check if the component handles an empty staff array correctly (Optional)
    it('should handle an empty staff array without errors', () => {});

    // Check if the component handles edge cases, such as incorrect or missing props (Optional)
    it('should handle edge cases gracefully', () => {});
  });
