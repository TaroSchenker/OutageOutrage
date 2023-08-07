import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { server } from '../../../mocks/node';
import TaskCard from '../TaskCard';
import {
  IClientTaskData,
  IClientStaffData,
  TaskType,
} from '../../../types/types';
import { testStaffData } from '../../__tests__/data/staff';
import { testTaskData } from '../../__tests__/data/tasks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
    // Add any other necessary checks here...
  });

  // it('shows task description when card is open', () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <TaskCard
  //         task={testTaskData[0]}
  //         staff={testStaffData}
  //         gameId="gameId"
  //       />
  //     </QueryClientProvider>,
  //   );

  //   userEvent.click(screen.getByText(testTaskData[0].type));
  //   expect(screen.getByText(`Description: ${testTaskData[0].description}`)).toBeInTheDocument();
  // });

  // it('shows correct progress bar', () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <TaskCard
  //         task={testTaskData[0]}
  //         staff={testStaffData}
  //         gameId="gameId"
  //       />
  //     </QueryClientProvider>,
  //   );

  //   const progressBar = screen.getByLabelText('Progress: ' + (testTaskData[0].progress / testTaskData[0].timeToComplete) * 100 + ' %');
  //   expect(progressBar).toBeInTheDocument();
  // });

  // it('renders assigned staff member correctly', () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <TaskCard
  //         task={testTaskData[0]}
  //         staff={testStaffData}
  //         gameId="gameId"
  //       />
  //     </QueryClientProvider>,
  //   );

  //   const assignedStaffName = getStaffNameFromId(testStaffData, testTaskData[0].assignedTo);
  //   expect(screen.getByText(assignedStaffName)).toBeInTheDocument();
  // }); it('renders task details correctly', () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <TaskCard
  //         task={testTaskData[0]}
  //         staff={testStaffData}
  //         gameId="gameId"
  //       />
  //     </QueryClientProvider>,
  //   );

  // });
});
