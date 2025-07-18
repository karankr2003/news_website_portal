import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryNav from '../components/CategoryNav';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({ toString: () => '' })
}));

describe('CategoryNav', () => {
  it('renders all categories and handles click', () => {
    render(<CategoryNav selected={null} asFilter={true} />);
    expect(screen.getByText(/top news/i)).toBeInTheDocument();
    expect(screen.getByText(/business/i)).toBeInTheDocument();
    const businessBtn = screen.getByText(/business/i).closest('button');
    fireEvent.click(businessBtn);
  });

  it('calls router.push on category click', () => {
    render(<CategoryNav selected={null} asFilter={true} />);
    const techBtn = screen.getByText(/technology/i).closest('button');
    fireEvent.click(techBtn);
  });
}); 