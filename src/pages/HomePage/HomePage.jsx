import { Routes, Route } from "react-router-dom";

import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import ScreenPage from "components/ScreensPage/ScreenPage";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ScreenPage />} />
        <Route path="/:boardName" element={<ScreenPage/> } />
      </Routes>
    </div>
  )
}

export default HomePage
