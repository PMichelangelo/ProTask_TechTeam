import Card from './Card/Card';

import css from './cardList.module.css';

const CardList = ({ columnId }) => {
  const cardArr = [
    {
      fatherColumnId: '123',
      id: '11',
      title: 'The Watch Spot Design',
      description:
        "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
      priority: 'Low',
      deadline: 'hhh',
    },
    {
      fatherColumnId: '234',
      id: '22',
      title: 'Design and Prototyping SoYummy',
      description:
        'Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements.',
      priority: 'Medium',
      deadline: 'kkk',
    },
  ];

  const cards = cardArr.filter(
    ({ fatherColumnId }) => fatherColumnId === columnId
  );

  return (
    <ul className={css.list}>
      {cards.map(item => {
        return <Card key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default CardList;
