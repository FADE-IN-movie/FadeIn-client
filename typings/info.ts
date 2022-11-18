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

export interface IReviewInfo {
  id: number;
  rating?: string;
  //...
}
