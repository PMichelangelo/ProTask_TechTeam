import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ScreensPage from 'components/ScreensPage';

const HomePage = () => {
  return (
 <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar />
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Routes>
          <Route path="/" element={<ScreensPage />} />
          <Route path="/:boardName" element={<ScreensPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
