import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainLayout from './layout/MainLayout';
import GenreSurveyTemplate from './components/template/GenreSurveyTemplate';
import SearchTemplate from './components/template/SearchTemplate';
import MypageTemplate from './components/template/MypageTemplate';
import MypageReviewsTemplate from './components/template/MypageReviewsTemplate';
import MypageMoviesTemplate from './components/template/MypageMoviesTemplate';
import LoginPage from './pages/LoginPage';
import MovieListPage from './pages/MovieListPage';
import SignupPage from './pages/SignupPage';
import MovieDetailPage from './pages/MovieDetailPage';
import CreateReviewPage from './pages/CreateReviewPage';
import SearchResultPage from './pages/SearchResultPage';
import MovieSurveyPage from './pages/MovieSurveyPage';
import SuccessSurveyPage from './pages/SuccessSurveyPage';
import SuccessSignupPage from './pages/SuccessSignupPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MovieListPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup/success" element={<SuccessSignupPage />} />
            <Route path="/survey/success" element={<SuccessSurveyPage />} />
            <Route path="/survey/genre" element={<GenreSurveyTemplate />} />
            <Route path="/survey/movies" element={<MovieSurveyPage />} />
            <Route path="/search" element={<SearchTemplate />} />
            <Route path="/search/:movie" element={<SearchResultPage />} />
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
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/movies/:id/review" element={<CreateReviewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
