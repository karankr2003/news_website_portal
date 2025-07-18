import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

jest.mock('../components/SearchBar', () => () => <div data-testid="search-bar" />);
jest.mock('../components/CategoryNav', () => () => <div data-testid="category-nav" />);
jest.mock('../components/DarkMode', () => () => <div data-testid="dark-mode" />);
jest.mock('../components/LanguageSelector', () => () => <div data-testid="language-selector" />);

describe('Header', () => {
  it('renders the header and all subcomponents', () => {
    render(<Header selectedCategory="business" />);
    expect(screen.getByText(/news portal/i)).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('category-nav')).toBeInTheDocument();
    expect(screen.getByTestId('dark-mode')).toBeInTheDocument();
    expect(screen.getByTestId('language-selector')).toBeInTheDocument();
  });
}); 