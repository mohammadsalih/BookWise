import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Navigate
              replace
              to={'home'}
            />
          }
        />

        <Route
          path='home'
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
