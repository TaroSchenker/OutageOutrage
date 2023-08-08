import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

    screen.debug();
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
