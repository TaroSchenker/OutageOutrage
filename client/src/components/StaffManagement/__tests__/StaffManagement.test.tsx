import React from 'react';
import { render, screen } from '@testing-library/react';
import StaffManagement from '../StaffManagement';
import { IClientTaskData, IClientStaffData } from '../../../types/types';
import { testTaskData } from '../../../mocks/data/tasks';
import { testStaffData } from '../../../mocks/data/staff';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const gameId = "gameId";
const queryClient = new QueryClient();

describe('<StaffManagement />', () => {
    it('renders the staff list correctly', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <StaffManagement
                    tasks={testTaskData}
                    staff={testStaffData}
                />
            </QueryClientProvider>
        );

        // Check if all staff are rendered correctly
        testStaffData.forEach(staff => {
            expect(screen.getByText(staff.name)).toBeInTheDocument();
        });
    });
});
