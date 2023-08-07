import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '../../../mocks/node';
import TaskCard from '../TaskCard';
import { IClientTaskData, IClientStaffData, TaskType } from '../../../types/types';
import { testStaffData } from '../../__tests__/data/staff';
import { testTaskData } from '../../__tests__/data/tasks';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());



describe('<TaskCard />', () => {
  it('renders task details correctly', () => {
    render(<TaskCard task={testTaskData[0]} staff={testStaffData} gameId="gameId" />);
    // Using userEvent instead of fireEvent
    userEvent.click(screen.getByText('Assigned To:')); // This should open the selector
    userEvent.click(screen.getByText('Some Staff Name')); // This should select the staff member
    // Add other assertions
  });

  // it('handles selector change', async () => {
  //   render(<TaskCard task={task} staff={staff} gameId="gameId" />);
  //   fireEvent.click(screen.getByText('Assigned To:')); // This should open the selector
  //   fireEvent.click(screen.getByText('Some Staff Name')); // This should select the staff member
  //   // Add assertions to check if the task has been updated
  // });
});
