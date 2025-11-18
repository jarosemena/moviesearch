import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TMDBClient } from '../../infrastructure/api/tmdbClient';

// Mock fetch globally
global.fetch = vi.fn();

describe('TMDBClient', () => {
  let client;

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock environment variables
    vi.stubEnv('VITE_TMDB_ACCESS_TOKEN', 'test-token');
    vi.stubEnv('VITE_TMDB_BASE_URL', 'https://api.test.com/3');
    client = new TMDBClient();
  });

  it('should make GET request with authorization header', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({ data: 'test' }),
    };
    global.fetch.mockResolvedValue(mockResponse);

    await client.get('/test');

    expect(global.fetch).toHaveBeenCalled();
    const callArgs = global.fetch.mock.calls[0];
    expect(callArgs[1].headers['Authorization']).toContain('Bearer');
    expect(callArgs[1].headers['Content-Type']).toBe('application/json');
  });

  it('should add language parameter', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({ data: 'test' }),
    };
    global.fetch.mockResolvedValue(mockResponse);

    await client.get('/test');

    const callUrl = global.fetch.mock.calls[0][0];
    expect(callUrl.searchParams.get('language')).toBe('es-ES');
  });

  it('should add query parameters', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({ data: 'test' }),
    };
    global.fetch.mockResolvedValue(mockResponse);

    await client.get('/test', { page: 1, query: 'test' });

    const callUrl = global.fetch.mock.calls[0][0];
    expect(callUrl.searchParams.get('page')).toBe('1');
    expect(callUrl.searchParams.get('query')).toBe('test');
  });

  it('should skip undefined parameters', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({ data: 'test' }),
    };
    global.fetch.mockResolvedValue(mockResponse);

    await client.get('/test', { page: 1, query: undefined, filter: null });

    const callUrl = global.fetch.mock.calls[0][0];
    expect(callUrl.searchParams.get('page')).toBe('1');
    expect(callUrl.searchParams.has('query')).toBe(false);
    expect(callUrl.searchParams.has('filter')).toBe(false);
  });

  it('should throw error on failed request', async () => {
    const mockResponse = {
      ok: false,
      status: 401,
    };
    global.fetch.mockResolvedValue(mockResponse);

    await expect(client.get('/test')).rejects.toThrow('TMDB API Error: 401');
  });

  it('should return parsed JSON', async () => {
    const mockData = { movies: ['test1', 'test2'] };
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockData),
    };
    global.fetch.mockResolvedValue(mockResponse);

    const result = await client.get('/test');

    expect(result).toEqual(mockData);
  });
});
