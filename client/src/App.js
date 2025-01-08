import {BrowserRouter,Route,Routes}   from 'react-router-dom';
import Homepage from './pages/HomePageComponent';
function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                <Route path='/home' element={<Homepage/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
