export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const q = searchParams.get('q');
    const page = searchParams.get('page') || 1;
    const pageSize = searchParams.get('pageSize') || 12;
    const language = searchParams.get('language') || 'en';
    const API_KEY = process.env.NEWS_API_KEY;
    let url = '';
  
    if (q) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=${API_KEY}`;
    } else if (category && category !== 'top-headlines') {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=${API_KEY}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=${API_KEY}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ status: 'error', message: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  