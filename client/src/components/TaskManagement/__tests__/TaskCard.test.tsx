import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { server } from '../../../mocks/node';
import TaskCard from '../TaskCard';
import {
  IClientTaskData,
  IClientStaffData,
  TaskType,
} from '../../../types/types';
import { testStaffData } from '../../../mocks/data/staff';
import { testTaskData } from '../../../mocks/data/tasks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getStaffNameFromId } from '../../../utils/staffHelpers';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();

describe('<TaskCard />', () => {
  it('renders task details correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard
          task={testTaskData[0]}
          staff={testStaffData}
          gameId="gameId"
        />
      </QueryClientProvider>,
    );

    // Check if task type is rendered correctly
    expect(screen.getByText(testTaskData[0].type)).toBeInTheDocument();
    // Check if task status is rendered correctly
    expect(screen.getByText(testTaskData[0].status)).toBeInTheDocument();
  });

  it('shows task description when card is open', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard
          task={testTaskData[0]}
          staff={testStaffData}
          gameId="gameId"
        />
      </QueryClientProvider>,
    );

    userEvent.click(screen.getByText(testTaskData[0].type));
    const descriptionElement = await screen.findByText(
      `Description: ${testTaskData[0].description}`,
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it('shows correct progress bar', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard
          task={testTaskData[0]}
          staff={testStaffData}
          gameId="gameId"
        />
      </QueryClientProvider>,
    );

    const progressText = `Progress: ${
      (testTaskData[0].progress / testTaskData[0].timeToComplete) * 100
    } %`;
    expect(screen.getByText(progressText)).toBeInTheDocument();
  });

  it('renders assigned staff member correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TaskCard
          task={testTaskData[0]}
          staff={testStaffData}
          gameId="gameId"
        />
      </QueryClientProvider>,
    );  

    if (testTaskData[0].assignedTo === null) return;
    const assignedStaffName = getStaffNameFromId(
      testStaffData,
      testTaskData[0].assignedTo,
    );
    expect(screen.getByText(assignedStaffName)).toBeInTheDocument();
  });

  //   //!TODO: Fix this test, ITS NOT COMPLETE. - there is some issue with checking the staff member newly assigned is now not available.
  // it('unassigns task from current staff member when re-assigned to another staff member', async () => {
  //   // Initialise with a task that is already assigned to a staff member
  //   const alreadyAssignedTask = { ...testTaskData[0], assignedTo: testStaffData[0]._id };
  //   // Initialise with a staff member that is assigned to the task
  //   const alreadyAssignedStaff = { ...testStaffData[0], availability: false, assignedTask: alreadyAssignedTask._id}
  //   // Initialise with a staff member that is not assigned to any task
  //   const newStaffToAssign = testStaffData[1];
    
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <TaskCard
  //         task={alreadyAssignedTask}
  //         staff={testStaffData}
  //         gameId="gameId"
  //       />
  //     </QueryClientProvider>,
  //   );
    
  //   console.log("alreadyAssignedStaff.availability INITIAL", alreadyAssignedStaff.availability)

  //  // Open the task card to access the custom selector
  //  userEvent.click(screen.getByText(alreadyAssignedTask.type));

  //  // Find the custom selector related to staff assignment
  //  const customSelector = await screen.findByLabelText('custom-selector');
  //  // Fire a click event on the custom selector to open the dropdown
  //  userEvent.click(customSelector);
  //   // Select a different staff member from the selector
  //   const newOption = screen.getByRole('option', { name: newStaffToAssign.name });
  //   userEvent.click(newOption);
  // screen.debug()
  //   // Wait for async operations (like API calls handled by axios and mutations) to complete
  // await waitFor(() => {
  //   // Check that the old staff member is now available and not disabled
  //   const oldStaffElement = screen.getByText(testStaffData[0].name);
  //   // expect(oldStaffElement).toHaveAttribute('disabled', 'false'); // Adjust as per your actual attribute
  //   expect(testStaffData[0].availability).toBe(true);
  //   console.log("alreadyAssignedStaff.availability LATER", alreadyAssignedStaff.availability)
  //   // Check that the new staff member is now not available and is disabled
  //   // const newStaffElement = screen.getByText(newStaffToAssign.name);

  //   // // // expect(newStaffElement).toHaveAttribute('disabled', 'true'); // Adjust as per your actual attribute
  //   // expect(newStaffToAssign.availability).toBe(false);
  // });

  //   // Validate if the corresponding removal of the previous staff member's current task was made on the server-side, etc. depending on how your component behaves
  // });
  

  // it('assigns staff member to the task when selected from the custom selector', async () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <TaskCard
  //         task={testTaskData[0]}
  //         staff={testStaffData}
  //         gameId="gameId"
  //       />
  //     </QueryClientProvider>,
  //   );
  
  //   // Open the task card to access the custom selector
  //   userEvent.click(screen.getByText(testTaskData[0].type));
  
  //   // Click on the custom selector and select a staff member
  //   const selector = await screen.findByText(
  //     `Assigned to:`,
  //   );
  //   // const selector = await screen.getByRole('label', { name: /Assigned to/i }); // Adjust as per your actual selector implementation
  //   userEvent.click(selector);
  //   const staffMemberToSelect = testStaffData[0].name; // Adjust based on your actual staff data
  //   const option = screen.getByRole('option', { name: staffMemberToSelect });
  //   userEvent.click(option);
  
  //   // Wait for the mutations to be successful (if they trigger re-renders)
  //   await waitFor(() => {
  //     expect(screen.getByText(staffMemberToSelect)).toBeInTheDocument();
  //   });
  
  //   // Additional assertions can be made here to ensure that the corresponding
  //   // update was made on the server-side, depending on how your component behaves
  // });
});
