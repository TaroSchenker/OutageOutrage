/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, fireEvent } from '@testing-library/react';
import CustomSelector from '../CustomSelect';

const options = [
  { id: '1', name: 'Option 1', availability: true },
  { id: '2', name: 'Option 2', availability: false },
  { id: '3', name: 'Option 3', availability: true },
];

describe('<CustomSelector />', () => {
  it('renders all options correctly', () => {
    render(<CustomSelector options={options} onChange={() => {}} value="" />);

    options.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });

  it('disables options based on availability', () => {
    render(<CustomSelector options={options} onChange={() => {}} value="" />);

    expect(screen.getByText('Option 1')).not.toBeDisabled();
    expect(screen.getByText('Option 2')).toBeDisabled();
    expect(screen.getByText('Option 3')).not.toBeDisabled();
  });

  it('calls onChange handler with correct value when selection changes', () => {
    const handleChange = jest.fn();
    render(
      <CustomSelector
        options={options}
        onChange={handleChange}
        value="Option 1"
      />,
    );

    // Retrieve the select element
    const selectElement = screen.getByTestId('custom-selector-select');

    // Select the option by its value attribute
    fireEvent.change(selectElement, { target: { value: 'Option 3' } });

    expect(handleChange).toHaveBeenCalledWith('Option 3');
  });

  it('selects the correct initial value', () => {
    render(
      <CustomSelector options={options} onChange={() => {}} value="Option 3" />,
    );

    const selectElement = screen.getByTestId(
      'custom-selector-select',
    ) as HTMLSelectElement;
    expect(selectElement.value).toBe('Option 3');
  });

  it('renders no options when provided an empty list', () => {
    render(<CustomSelector options={[]} onChange={() => {}} value="" />);

    const selectElement = screen.getByTestId('custom-selector-select');
    expect(selectElement.children.length).toBe(0);
  });
});
