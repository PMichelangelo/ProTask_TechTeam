import { useParams } from "react-router-dom";

const ScreenPage = () => {
  const { boardName } = useParams()

  return (
    <div>
      <h3>ScreensPage</h3>
      <p>Загальний контент дошки: {boardName}</p>
      {/* Вміст дошки */}
    </div>
  );
}


export default ScreenPage
