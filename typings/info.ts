export interface IContentInfo {
  id: number;
  rank?: number;
  type: string;
  title: string;
  genre: string[];
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

export interface ISimilarContentInfo {
  id: number;
  rank?: number;
  type: string;
  title: string;
  genre?: string[];
  poster: string;
  overview?: string;
}

export interface IContentDetailInfo {
  data: IContentInfo;
  cast?: ICastInfo[];
  similarContent?: ISimilarContentInfo[];
}
