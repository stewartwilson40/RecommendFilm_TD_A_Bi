export interface BaseMovie {
  id: number;
  title: string;
}

export interface MovieRowItem extends BaseMovie {
  poster: string | null;
}

export interface PopularMovie extends BaseMovie {
  poster: string | null;
  backdrop: string | null;
  genres: string[] | null;
}

export interface CarouselMovie extends BaseMovie {
  overview: string;
  poster: string | null;
  backdrop: string | null;
  genres: string[] | null;
}

export interface FilmDetail extends BaseMovie {
  overview: string;
  poster: string | null;
  backdrop: string | null;
  genres: string[];
  vote_average: number;
  video_key: string | undefined;
  release_date: string | undefined;
  director: string | undefined;
  cast: {
    name: string;
    profile: string | null;
  }[];
}

export interface HistoryData {
  user_id: string;
  title: string;
  movie_id: number;
  poster?: string | null;
  genres: string[];
}

export interface RecommendationResponse {
  recommended_movies: PopularMovie[];
  top_genres: string[];
}
