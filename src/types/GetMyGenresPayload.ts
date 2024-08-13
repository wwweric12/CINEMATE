export interface GetMyGenresPayload {
    status: number
    message: string
    data: MyGenre
}
  
export interface MyGenre {
    genres: Genre[]
}
  
export interface Genre {
    id: number
    genreName: string
}
  