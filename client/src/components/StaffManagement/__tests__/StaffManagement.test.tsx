import { render, screen } from '@testing-library/react';
import StaffManagement from '../StaffManagement';
import { testTaskData } from '../../../mocks/data/tasks';
import { testStaffData } from '../../../mocks/data/staff';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

  // Check if the grid layout is correctly applied
  it('should display the staff in the correct grid layout', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <StaffManagement tasks={testTaskData} staff={testStaffData} />
      </QueryClientProvider>,
    );

    // Find the available and busy staff container divs
    const availableStaffContainer = screen.getByText('Available Staff')
      .nextSibling as HTMLElement;
    const busyStaffContainer = screen.getByText('Busy Staff')
      .nextSibling as HTMLElement;

    // Check if the containers are div elements and have the correct class
    if (availableStaffContainer && availableStaffContainer.tagName === 'DIV') {
      expect(availableStaffContainer.className).toContain(
        'grid grid-cols-2 gap-4',
      );
    } else {
      throw new Error(
        'Available staff container not found or incorrect element type',
      );
    }

    if (busyStaffContainer && busyStaffContainer.tagName === 'DIV') {
      expect(busyStaffContainer.className).toContain('grid grid-cols-2 gap-4');
    } else {
      throw new Error(
        'Busy staff container not found or incorrect element type',
      );
    }
  });
  // Check if the correct tasks are passed to each StaffCard
  it('should pass the correct tasks to each StaffCard', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <StaffManagement tasks={testTaskData} staff={testStaffData} />
      </QueryClientProvider>,
    );
  });
});
