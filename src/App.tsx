import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainLayout from './layout/MainLayout';
import LoginTemplate from './components/template/LoginTemplate';
import SignupTemplate from './components/template/SignupTemplate';
import SucessTemplate from './components/template/SucessTemplate';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
