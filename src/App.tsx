import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoginTemplate from './components/template/LoginTemplate';
import SignupForm from './components/organisms/Signup/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<LoginTemplate />} />
          <Route path="/" />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/success" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
