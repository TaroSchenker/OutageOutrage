import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskManagement from '../TaskManagement';
import { IClientTaskData, IClientStaffData } from '../../../types/types';
import { testTaskData } from '../../../mocks/data/tasks';
import { testStaffData } from '../../../mocks/data/staff';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const gameId = "gameId";
const queryClient = new QueryClient();

describe('<TaskManagement />', () => {
  it('renders task lists correctly', () => {
    render(
        <QueryClientProvider client={queryClient}>
      <TaskManagement
        tasks={testTaskData}
        staff={testStaffData}
        gameId={gameId}
      />
        </QueryClientProvider>
    );

    // Check if all tasks are rendered correctly
    testTaskData.forEach(task => {
      expect(screen.getByText(task.type)).toBeInTheDocument();
    });
  });

  it('sorts tasks by status correctly', () => {
    render(
        <QueryClientProvider client={queryClient}>
      <TaskManagement
        tasks={testTaskData}
        staff={testStaffData}
        gameId={gameId}
      />
        </QueryClientProvider>
    );

    const notStartedTasks = testTaskData.filter(task => task.status === 'Not Started');
    const inProgressTasks = testTaskData.filter(task => task.status === 'In Progress');
    const blockedTasks = testTaskData.filter(task => task.status === 'Blocked');
    const completedTasks = testTaskData.filter(task => task.status === 'Completed');

    expect(screen.getAllByText('Not Started').length).toBe(notStartedTasks.length + 1);
    expect(screen.getAllByText('In Progress').length).toBe(inProgressTasks.length + 1);
    expect(screen.getAllByText('Blocked').length).toBe(blockedTasks.length + 1);
    expect(screen.getAllByText('Completed').length).toBe(completedTasks.length + 1);
  });

  it('displays tasks under correct headings', () => {
    render(
        <QueryClientProvider client={queryClient}>
      <TaskManagement
        tasks={testTaskData}
        staff={testStaffData}
        gameId={gameId}
      />
        </QueryClientProvider>
    );

    // Check if Not Started tasks are under correct heading
    const notStartedTasks = testTaskData.filter(task => task.status === 'Not Started');
    notStartedTasks.forEach(task => {
      expect(screen.getByText(task.type).closest('div')).toHaveTextContent('Not Started');
    });

    // Check if In Progress tasks are under correct heading
    const inProgressTasks = testTaskData.filter(task => task.status === 'In Progress');
    inProgressTasks.forEach(task => {
      expect(screen.getByText(task.type).closest('div')).toHaveTextContent('In Progress');
    });

    // Check if Blocked tasks are under correct heading
    const blockedTasks = testTaskData.filter(task => task.status === 'Blocked');
    blockedTasks.forEach(task => {
      expect(screen.getByText(task.type).closest('div')).toHaveTextContent('Blocked');
    });

    // Check if Completed tasks are under correct heading
    const completedTasks = testTaskData.filter(task => task.status === 'Completed');
    completedTasks.forEach(task => {
      expect(screen.getByText(task.type).closest('div')).toHaveTextContent('Completed');
    });
  });

  it('renders no tasks if tasks array is empty', () => {
    render(
        <QueryClientProvider client={queryClient}>
      <TaskManagement
        tasks={[]}
        staff={testStaffData}
        gameId={gameId}
      />
        </QueryClientProvider>
    );

    // You may choose to render a specific message when there are no tasks, 
    // in which case you would test for that message's presence here.
    expect(screen.queryByRole('taskcard')).not.toBeInTheDocument(); // Assuming that each task is rendered with a role of 'taskcard'
  });
});
