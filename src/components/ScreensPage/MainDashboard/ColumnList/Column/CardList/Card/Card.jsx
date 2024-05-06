import css from './card.module.css';

const Card = ({ item: { id, title, description, priority, deadline } }) => {
  return (
    <li className={css.card}>
      <h4 className={css.cardTitle}>{title}</h4>
      <p className={css.cardText}>{description}</p>
      <div className={css.wrapCardInfo}>
        <div className={css.wrapPriorityDeadline}>
          <div className={css.wrapLeft}>
            <h6 className={css.infoText}>Priority</h6>
            <p className={css.info}>{priority}</p>
          </div>
          <div className={css.wrapLeft}>
            <h6 className={css.infoText}>Deadline</h6>
            <p className={css.info}>{deadline}</p>
          </div>
        </div>
        <ul className={css.cardBtnList}>
          <li key="1">
            <button className={css.cardBtn}>Move</button>
          </li>
          <li key="2">
            <button className={css.cardBtn}>Edit</button>
          </li>
          <li key="3">
            <button className={css.cardBtn}>Delete</button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
