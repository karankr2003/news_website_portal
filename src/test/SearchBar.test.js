import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({ get: () => '', toString: () => '' })
}));

describe('SearchBar', () => {
  it('renders input and allows typing', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/search news/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input.value).toBe('React');
  });

  it.skip('updates URL on search input', () => {
  });
}); 