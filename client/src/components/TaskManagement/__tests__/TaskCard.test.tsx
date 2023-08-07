import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    // Using userEvent instead of fireEvent
    screen.debug();
    userEvent.click(screen.getByText('Assigned To:'));
    userEvent.click(screen.getByText('Some Staff Name')); // This should select the staff member
    // Add other assertions
  });
});
