export interface GetMypagePayload {
  status: number;
  message: string;
  data: MypageData;
}

export interface MypageData {
  likeMovies: number;
  myReviews: number;
  dislikeMovies:number;
  nickname: string;
}
