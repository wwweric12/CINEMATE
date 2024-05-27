import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import MovieListCard from '../molecules/MovieListCard';
import { ReactComponent as PrevSvg } from '../../assets/images/back.svg';
import { ReactComponent as NextSvg } from '../../assets/images/next.svg';
import { MovieData } from '../../types/GetMovieListPayload';

interface MovieListProps {
  isGenre?: boolean;
  listData: MovieData[];
  genre?: string;
  onMovieHeartClick: (movieId: number) => void;
}
interface ScrollState {
  left: boolean;
  right: boolean;
}

const MovieList = ({
  isGenre,
  listData,
  genre,
  onMovieHeartClick,
}: MovieListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    left: false,
    right: true,
  });
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        const atStart = scrollLeft === 0;
        const atEnd = scrollLeft >= scrollWidth - clientWidth;

        setScrollState(() => ({
          left: !atStart,
          right: !atEnd,
        }));
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleLeftScroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };
  const handleRightScroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <MovieListContainer>
      {scrollState.left && (
        <LeftScrollButton onClick={handleLeftScroll}>
          <PrevSvg />
        </LeftScrollButton>
      )}
      {scrollState.right && (
        <RightScrollButton onClick={handleRightScroll}>
          <NextSvg />
        </RightScrollButton>
      )}

      {isGenre && <GenreName>{genre}</GenreName>}
      <MovieListBox ref={scrollRef} $isGenre={isGenre}>
        {listData.map((item) => (
          <MovieListCard
            key={item.id}
            id={item.id}
            img={item.posterPath}
            title={item.movieTitle}
            grade={item.rating}
            isLiked={item.isLiked}
            onMovieHeartClick={onMovieHeartClick}
          />
        ))}
      </MovieListBox>
    </MovieListContainer>
  );
};

export default MovieList;

const MovieListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MovieListBox = styled.div<{ $isGenre?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  background-color: rgba(163, 163, 163, 0.1);
  padding: ${({ $isGenre }) =>
    $isGenre ? '10px 40px 20px 40px' : '24px 40px'};
`;

const GenreName = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 14px;
  font-weight: 700;
  margin: 10px 40px;
`;

const LeftScrollButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const RightScrollButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
