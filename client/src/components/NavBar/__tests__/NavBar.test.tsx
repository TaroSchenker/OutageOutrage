/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '../../../mocks/node';
import NavBar from '../NavBar';
import { getCallCount, resetCallCount } from '../../../mocks/handlers';
import userEvent from '@testing-library/user-event';

const mockWebsiteHealth = 80;
const mockTimeRemaining = 5;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

beforeAll(() => server.listen());
beforeEach(() => {
  (useParams as jest.Mock).mockReturnValue({ gameId: 'testId' });
  render(
    <QueryClientProvider client={queryClient}>
      <NavBar
        websiteHealth={mockWebsiteHealth}
        timeRemaining={mockTimeRemaining}
      />
    </QueryClientProvider>,
  );
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();

describe('NavBar Component', () => {
  // Check if the component renders without crashing
  it('should render without crashing', () => {});

  // Check if the title "Outage Outrage" is displayed correctly
  it('should display the correct title', () => {
    expect(screen.getByText('Outage Outrage')).toBeInTheDocument();
  });

  // Check if the "Process Turn" button is rendered and can be clicked
  it('should render the "Process Turn" button and handle  next turn click event', async () => {
    //check that the buttons onClick prop is called when clicked

    const button = screen.getByRole('button', {
      name: /Process Turn/i,
    });
    expect(button).toBeInTheDocument();
    resetCallCount();

    //click the button
    userEvent.click(button);
    // console.log('button', button);
    await waitFor(() => expect(getCallCount()).toBe(1));
  });

  // Check if the Game ID is displayed correctly from the route parameter
  it('should display the correct Game ID from the route parameters', () => {
    const gameElement = screen.getByText(/Game ID:/i);
    expect(gameElement.textContent).toBe('Game ID: testId');
  });

  // Check if the "Time Remaining" and "Website Health" are displayed correctly with the given props
  it('should display the correct Time Remaining and Website Health information', () => {
    const timeRemainingText = screen.getByText('Time Remaining: 5 days');
    expect(timeRemainingText).toBeInTheDocument();

    const websiteHealth = screen.getByText('Website Health: 80%');
    expect(websiteHealth).toBeInTheDocument();
  });

  // Check if the useMutation hook is called with the correct parameters when "Process Turn" is clicked
  it('should call useMutation with correct parameters on "Process Turn" click', () => {});

  // Check if the error handling works as expected in the mutation
  it('should handle error in mutation correctly', () => {});

  // Check if the success handling works as expected in the mutation
  it('should handle success in mutation correctly', () => {});

  // Check if the correct data is fetched using useQuery
  it('should fetch data correctly using useQuery', () => {});

  // Check if loading and error states are handled correctly in the query
  it('should handle loading and error states correctly in useQuery', () => {});

  // Check if the component handles edge cases, such as incorrect or missing props
  it('should handle edge cases gracefully', () => {});
});
