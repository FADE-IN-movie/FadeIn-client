export interface IContentInfo {
  id: number;
  rank?: number;
  rating?: string;
  type: string;
  title: string;
  genre?: string[];
  poster: string;
  overview?: string;
  originalTitle?: string;
  backdrop?: string;
  director?: string;
  releaseDate?: string;
  country?: string;
  runtime?: string;
  certification?: string;
}

export interface ICastInfo {
  name: string;
  role: string;
  image: string;
}

export interface IContentDetailInfo {
  data: IContentInfo;
  cast?: ICastInfo[];
  similarContent?: IContentInfo[];
}

export interface IReviewDataInfo {
  reviewId?: string;
  watchedAt?: string;
  watchedIn?: string;
  watchedWith?: string;
  rating: number;
  memo?: string;
  comment?: string;
}

export interface IReviewInfo {
  content: {
    tmdbId: number;
    title: string;
    originalTitle: string;
    poster?: string;
    backdrop?: string;
  };
  review: IReviewDataInfo;
}
