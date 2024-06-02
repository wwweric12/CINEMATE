export interface GetRelativeMovies {
    status: number
    message: string
    data: RelativeMovie[]
  }
  
  export interface RelativeMovie {
    id: number
    movieId: number
    rating: number
    backdropPath: string
    originalTitle: string
    movieTitle: string
    releaseDate: string
    posterPath: string
    overview: string
    isLiked: boolean
  }
  