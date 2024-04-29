import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoginTemplate from './components/template/LoginTemplate';
import SignupTemplate from './components/template/SignupTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<LoginTemplate />} />
          <Route path="/" />
          <Route path="/signup" element={<SignupTemplate />} />
          <Route path="/success" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
