import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from '../components/ArticleCard';

describe('ArticleCard', () => {
  const article = {
    title: 'Test Article',
    description: 'Test Description',
    source: { name: 'Test Source' },
    publishedAt: '2023-01-01T00:00:00Z',
    urlToImage: '',
  };
  it('renders article title and description', () => {
    render(<ArticleCard article={article} index={0} />);
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Source')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
  });
  it('renders Read more link', () => {
    render(<ArticleCard article={article} index={0} />);
    expect(screen.getByText(/read more/i)).toBeInTheDocument();
  });
}); 