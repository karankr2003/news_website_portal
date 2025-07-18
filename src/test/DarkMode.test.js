import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkMode from '../components/DarkMode';

// Mock localStorage and document.documentElement
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
  document.documentElement.setAttribute = jest.fn();
});
afterEach(() => {
  jest.clearAllMocks();
});

describe('DarkMode', () => {
  it('renders the toggle', () => {
    render(<DarkMode />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('toggles to dark mode', () => {
    render(<DarkMode />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
  });

  it('toggles to light mode', () => {
    render(<DarkMode />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox); // dark
    fireEvent.click(checkbox); // light
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
  });
}); 