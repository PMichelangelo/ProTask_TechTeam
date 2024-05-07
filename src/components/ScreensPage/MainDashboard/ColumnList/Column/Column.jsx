import AddCard from './AddCard';
import CardList from './CardList';
import ColumnHeader from './ColumnHeader';

import css from './column.module.css';

const Column = ({ item: { id, title } }) => {
  const cardArr = [
    {
      fatherColumnId: '123',
      id: '11',
      title: 'The Watch Spot Design',
      description:
        "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'Low',
      deadline: '12/05/2024',
    },
    {
      fatherColumnId: '123',
      id: '1111111',
      title: 'The Watch Spot Design',
      description:
        "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'Low',
      deadline: '12/05/2024',
    },
    {
      fatherColumnId: '123',
      id: '111',
      title: 'Research and Analysis',
      description:
        "Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify key insights to inform decision-making and project planning.",
      priority: 'Medium',
      deadline: '11/05/2024',
    },
    {
      fatherColumnId: '123',
      id: '1111',
      title: 'Concept Development',
      description:
        "Brainstorm and develop creative concepts and ideas that align with the project's objectives, considering factors such as target audience, messaging, and visual representation.",
      priority: 'Without',
      deadline: '10/05/2024',
    },
    {
      fatherColumnId: '234',
      id: '22',
      title: 'Design and Prototyping SoYummy',
      description:
        'Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements.',
      priority: 'Low',
      deadline: '07/05/2024',
    },
    {
      fatherColumnId: '234',
      id: '222',
      title: 'Content Creation',
      description:
        'Generate engaging and persuasive content for various project deliverables, such as presentations, reports, website copy, social media posts, and other communication channels.',
      priority: 'High',
      deadline: '08/05/2024',
    },
    {
      fatherColumnId: '234',
      id: '2222',
      title: 'Quiz Creation',
      description:
        "Create engaging and interactive quizzes using Kahoot's intuitive quiz builder. Design questions, provide multiple-choice answers, and include multimedia elements such as images and videos.",
      priority: 'Without',
      deadline: '07/05/2024',
    },
  ];

  const cards = cardArr.filter(({ fatherColumnId }) => fatherColumnId === id);

  const isCardPresent = cards[0] !== undefined;
  const itemClass = isCardPresent
    ? css.item + ' ' + css.itemCardPresent
    : css.item;

  return (
    <li className={itemClass}>
      <div className={css.wrap}>
        <ColumnHeader columnTitle={title} />
        <CardList columnId={id} cardArr={cardArr} />
      </div>
      <AddCard />
    </li>
  );
};

export default Column;
