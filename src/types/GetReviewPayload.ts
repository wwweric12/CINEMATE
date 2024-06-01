export interface GetReviewPayload {
  status: number;
  message: string;
  data: Review[];
}

export interface Review {
  id: number;
  movieId: number;
  content: string;
  rating: number;
  likes: number;
  member: Member;
  createdAt: Date;
  modifiedAt: Date;
  isMine: boolean;
  isLiked: boolean;
}

export interface Member {
  nickName: string;
}
