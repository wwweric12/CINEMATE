export interface GenreImage {
  name: string;
  type: string;
  image: string;
}

export const GENRE_LIST: GenreImage[] = [
  {
    name: '액션',
    type: 'Action',
    image: process.env.PUBLIC_URL + '/image/action_movie.jpeg',
  },
  {
    name: '모험',
    type: 'Adventure',
    image: process.env.PUBLIC_URL + '/image/adventure_movie.jpeg',
  },
  {
    name: '애니메이션',
    type: 'Animation',
    image: process.env.PUBLIC_URL + '/image/animation_movie.jpeg',
  },
  {
    name: '일대기',
    type: 'Biography',
    image: process.env.PUBLIC_URL + '/image/biography_movie.jpeg',
  },
  {
    name: '코미디',
    type: 'Comedy',
    image: process.env.PUBLIC_URL + '/image/comedy_movie.jpeg',
  },
  {
    name: '범죄',
    type: 'Crime',
    image: process.env.PUBLIC_URL + '/image/crime_movie.jpeg',
  },
  {
    name: '다큐멘터리',
    type: 'Documentary',
    image: process.env.PUBLIC_URL + '/image/documentary_movie.jpeg',
  },
  {
    name: '가족',
    type: 'Family',
    image: process.env.PUBLIC_URL + '/image/family_movie.jpeg',
  },
  {
    name: '판타지',
    type: 'Fantasy',
    image: process.env.PUBLIC_URL + '/image/fantasy_movie.jpeg',
  },
  {
    name: '역사',
    type: 'History',
    image: process.env.PUBLIC_URL + '/image/history_movie.jpeg',
  },
  {
    name: '공포',
    type: 'Horror',
    image: process.env.PUBLIC_URL + '/image/horror_movie.jpeg',
  },
  {
    name: '음악',
    type: 'Music',
    image: process.env.PUBLIC_URL + '/image/music_movie.jpeg',
  },
  {
    name: '뮤지컬',
    type: 'Musical',
    image: process.env.PUBLIC_URL + '/image/musical_movie.jpeg',
  },
  {
    name: '미스터리',
    type: 'Mystery',
    image: process.env.PUBLIC_URL + '/image/mystery_movie.jpeg',
  },
  {
    name: '로맨스',
    type: 'Romance',
    image: process.env.PUBLIC_URL + '/image/romance_movie.jpeg',
  },
  {
    name: 'SF',
    type: 'Sci - Fi',
    image: process.env.PUBLIC_URL + '/image/sf_movie.jpeg',
  },
  {
    name: '스포츠',
    type: 'Sport',
    image: process.env.PUBLIC_URL + '/image/sport_movie.jpeg',
  },
  {
    name: '스릴러',
    type: 'Thriller',
    image: process.env.PUBLIC_URL + '/image/thriller_movie.jpeg',
  },
  {
    name: '전쟁',
    type: 'War',
    image: process.env.PUBLIC_URL + '/image/war_movie.jpeg',
  },
  {
    name: '서부',
    type: 'Western',
    image: process.env.PUBLIC_URL + '/image/western_movie.jpeg',
  },
];
