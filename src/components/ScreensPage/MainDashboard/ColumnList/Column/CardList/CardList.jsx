import Card from './Card/Card';

import css from './cardList.module.css';

const CardList = ({ columnId, cardArr }) => {
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
