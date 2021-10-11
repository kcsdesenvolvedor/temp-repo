import { React } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button/index';

describe('<Button />', () => {
  it('should render the button with the text "Carregar mais Posts"', () => {
    const fn = jest.fn();
    render(<Button text="Carregar mais Posts" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /carregar mais posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on click', () => {
    const fn = jest.fn();
    render(<Button text="Carregar mais Posts" onClick={fn} />);

    const button = screen.getByRole('button', { name: /carregar mais posts/i });

    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Carregar mais Posts" onClick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /carregar mais posts/i });

    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Carregar mais Posts" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: 'Carregar mais Posts' });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Carregar mais Posts" onClick={fn} disabled={false} />);

    expect(container).toMatchSnapshot();
  });
});
