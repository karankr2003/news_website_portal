import { fetchTopHeadlines, fetchByCategory, searchNews } from '../utils/newsApi';

// Mock the global fetch function
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('newsApi utils', () => {
  describe('fetchTopHeadlines', () => {
    it('returns data on success', async () => {
      const mockData = { articles: [{ title: 'Test' }] };
      fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });
      const data = await fetchTopHeadlines();
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('/api/news?page=1&pageSize=10&language=en');
    });
    it('throws on error', async () => {
      fetch.mockResolvedValueOnce({ ok: false });
      await expect(fetchTopHeadlines()).rejects.toThrow('Failed to fetch top headlines');
    });
  });

  describe('fetchByCategory', () => {
    it('returns data on success', async () => {
      const mockData = { articles: [{ title: 'Category' }] };
      fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });
      const data = await fetchByCategory('sports');
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('/api/news?category=sports&page=1&pageSize=10&language=en');
    });
    it('throws on error', async () => {
      fetch.mockResolvedValueOnce({ ok: false });
      await expect(fetchByCategory('sports')).rejects.toThrow('Failed to fetch category news');
    });
  });

  describe('searchNews', () => {
    it('returns data on success', async () => {
      const mockData = { articles: [{ title: 'Search' }] };
      fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });
      const data = await searchNews('react');
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('/api/news?q=react&page=1&pageSize=10&language=en');
    });
    it('throws on error', async () => {
      fetch.mockResolvedValueOnce({ ok: false });
      await expect(searchNews('react')).rejects.toThrow('Failed to search news');
    });
  });
}); 