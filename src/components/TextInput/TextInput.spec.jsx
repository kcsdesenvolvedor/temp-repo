import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '../TextInput/index';
import { React } from 'react';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleCharge={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/input for search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleCharge={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/input for search/i);

    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleCharge={fn} searchValue="" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
