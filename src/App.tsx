import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/template/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" />
          <Route path="/" />
          <Route path="/signup" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
