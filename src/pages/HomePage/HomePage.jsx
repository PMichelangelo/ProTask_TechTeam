import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import ScreensPage from 'components/ScreensPage';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ScreensPage />} />
        <Route path="/:boardName" element={<ScreensPage />} />
      </Routes>
    </div>
  );
};

export default HomePage;
