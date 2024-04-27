import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoginTemplate from './components/template/LoginTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<LoginTemplate />} />
          <Route path="/" />
          <Route path="/signup" />
          <Route path="/success" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
