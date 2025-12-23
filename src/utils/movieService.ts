import axios from "axios";
import {
  FilmDetail,
  HistoryData,
  PopularMovie,
  CarouselMovie,
  RecommendationResponse,
} from "./movie";

const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPopularMovies = async (): Promise<PopularMovie[]> => {
  const res = await api.get<PopularMovie[]>("/popular");
  return res.data;
};

export const getUpcomingMovies = async (): Promise<CarouselMovie[]> => {
  const res = await api.get<CarouselMovie[]>("/collapse");
  return res.data;
};

export const getFilmDetail = async (filmId: number): Promise<FilmDetail> => {
  const res = await api.get<FilmDetail>(`/film/${filmId}`);
  return res.data;
};

interface HistoryResponse {
  message: string;
  user_id: string;
  movie_id: number;
  genres: string[];
}

export const addToHistory = async (
  data: HistoryData
): Promise<HistoryResponse> => {
  const res = await api.post<HistoryResponse>("/history", data);
  return res.data;
};

export const getRecommendations = async (
  userId: string
): Promise<RecommendationResponse> => {
  const res = await api.get<RecommendationResponse>(`/recommend/${userId}`);
  return res.data;
};
