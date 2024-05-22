import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainLayout from './layout/MainLayout';
import LoginTemplate from './components/template/LoginTemplate';
import SignupTemplate from './components/template/SignupTemplate';
import SucessTemplate from './components/template/SucessTemplate';
import GenreSurveyTemplate from './components/template/GenreSurveyTemplate';
import SearchTemplate from './components/template/SearchTemplate';
import MovieSurveyTemplate from './components/template/MovieSurveyTemplate';
import MypageTemplate from './components/template/MypageTemplate';
import MypageReviewsTemplate from './components/template/MypageReviewsTemplate';
import MypageMoviesTemplate from './components/template/MypageMoviesTemplate';
import SearchResultTemplate from './components/template/SearchResultTemplate';
import MovieDetailTemplate from './components/template/MovieDetailTemplate';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/login" element={<LoginTemplate />} />
            <Route path="/" />
            <Route path="/signup" element={<SignupTemplate />} />
            <Route path="/signup/success" element={<SucessTemplate />} />
            <Route path="/survey/success" element={<SucessTemplate />} />
            <Route path="/survey/genre" element={<GenreSurveyTemplate />} />
            <Route path="/survey/movies/:id" />
            <Route path="/search" element={<SearchTemplate />} />
            <Route path="/search/:movie" element={<SearchResultTemplate />} />
            <Route
              path="/survey/movies/:id"
              element={<MovieSurveyTemplate />}
            />
            <Route
              path="/mypage"
              element={<MypageTemplate name="김동영" review={2} movie={1} />}
            />
            <Route
              path="/mypage/movies"
              element={<MypageMoviesTemplate count={3} />}
            />
            <Route
              path="/mypage/reviews"
              element={<MypageReviewsTemplate name="김동영" count={3} />}
            />
            <Route
              path="/movie/:id"
              element={
                <MovieDetailTemplate
                  backgroundImg="https://upload.wikimedia.org/wikipedia/ko/b/b8/1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
                  title="브레드이발소"
                  grade={4.3}
                  date={2024}
                  isLiked={true}
                  onHeartClick={() => {}}
                  movieImg="https://upload.wikimedia.org/wikipedia/ko/b/b8/1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
                  moviePlot="브레드가 이발소에 가서 머리를 자르자 옆에 있던 오현의가 머리가 빵같다고 놀리자 브레드가 화를 내기 시작하는데..."
                  onSelectChange={() => console.log(12)}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
