import { describe, it, expect } from 'vitest';
import { Genre } from '../../domain/models/Genre';

describe('Genre', () => {
  it('should create a genre instance', () => {
    const genre = new Genre({ id: 28, name: 'Acción' });

    expect(genre.id).toBe(28);
    expect(genre.name).toBe('Acción');
  });

  it('should handle different genre types', () => {
    const genres = [
      new Genre({ id: 12, name: 'Aventura' }),
      new Genre({ id: 16, name: 'Animación' }),
      new Genre({ id: 35, name: 'Comedia' }),
    ];

    expect(genres).toHaveLength(3);
    expect(genres[0].name).toBe('Aventura');
    expect(genres[1].name).toBe('Animación');
    expect(genres[2].name).toBe('Comedia');
  });
});
