import { Movie } from '../models/movie.model';

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Movie 1',
    plot: 'Movie 1 Plot',
    rating: 7.1,
    genres: ['Action', 'Drama'],
    image_url: 'https://i.imgur.com/1z7Qp1A.jpg',
    imdb_url: 'https://www.imdb.com/title/tt0111161/',
    ai_summary: 'Movie 1 summary',
  },
  {
    id: '2',
    title: 'Movie 2',
    plot: 'Movie 2 Plot',
    rating: 8.1,
    genres: ['Science Fiction', 'Comedy'],
    image_url: 'https://i.imgur.com/1z7Qp1A.jpg',
    imdb_url: 'https://www.imdb.com/title/tt0111161/',
    ai_summary: 'Movie 2 summary',
  },
  {
    id: '3',
    title: 'Movie 3',
    plot: 'Movie 3 Plot',
    rating: 9.1,
    genres: ['Drama'],
    image_url: 'https://i.imgur.com/1z7Qp1A.jpg',
    imdb_url: 'https://www.imdb.com/title/tt0111161/',
    ai_summary: 'Movie 3 summary',
  },
  {
    id: '4',
    title: 'Movie 4',
    plot: 'Movie 4 Plot',
    rating: 7.1,
    genres: ['Comedy', 'Science Fiction'],
    image_url: 'https://i.imgur.com/1z7Qp1A.jpg',
    imdb_url: 'https://www.imdb.com/title/tt0111161/',
    ai_summary: 'Movie 4 summary',
  },
];
