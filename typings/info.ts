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

export interface IReviewContentInfo {
  tmdbId: number;
  type?: string;
  title: string;
  reviewId?: string;
  originalTitle: string;
  poster?: string;
  backdrop?: string;
}

export interface IReviewDataInfo {
  reviewId?: string;
  watchedDate?: string;
  watchedIn?: string;
  watchedTime?: string;
  watchedWith?: string;
  runtime?: number;
  rating: number;
  memo?: string;
  comment?: string;
}

export interface IReviewInfo extends IReviewContentInfo, IReviewDataInfo {}
