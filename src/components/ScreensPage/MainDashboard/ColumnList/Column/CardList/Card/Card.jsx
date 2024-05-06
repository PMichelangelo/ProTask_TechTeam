import sprite from '../../../../../../../images/icons.svg';

import css from './card.module.css';

const Card = ({ item: { id, title, description, priority, deadline } }) => {
  function getPriorityClass(priority) {
    switch (priority) {
      case 'High':
        return css.priorityHigh;
      case 'Medium':
        return css.priorityMedium;
      case 'Low':
        return css.priorityLow;
      default:
        return css.priorityWithout;
    }
  }

  function getCardPriorityClass(priority) {
    switch (priority) {
      case 'High':
        return css.cardPriorityHigh;
      case 'Medium':
        return css.cardPriorityMedium;
      case 'Low':
        return css.cardPriorityLow;
      default:
        return css.cardPriorityWithout;
    }
  }

  return (
    <li className={`${css.card} ${getCardPriorityClass(priority)}`}>
      <h4 className={css.cardTitle}>{title}</h4>
      <p className={css.cardText}>{description}</p>
      <div className={css.wrapCardInfo}>
        <div className={css.wrapPriorityDeadline}>
          <div className={css.wrapLeft}>
            <h6 className={css.infoText}>Priority</h6>
            <div className={css.prioritySpanText}>
              <span
                className={`${css.colorSpan} ${getPriorityClass(priority)}`}
              ></span>
              <p className={css.info}>{priority}</p>
            </div>
          </div>
          <div className={css.wrapLeft}>
            <h6 className={css.infoText}>Deadline</h6>
            <p className={css.info}>{deadline}</p>
          </div>
        </div>
        <ul className={css.cardBtnList}>
          <li key="1" className={css.cardBtnItem}>
            <button className={css.cardBtn}>
              <svg className={css.cardIcon}>
                <use href={`${sprite}#arrow-circle-icon`} />
              </svg>
            </button>
          </li>
          <li key="2" className={css.cardBtnItem}>
            <button className={css.cardBtn}>
              <svg className={css.cardIcon}>
                <use href={`${sprite}#pencil-icon`} />
              </svg>
            </button>
          </li>
          <li key="3" className={css.cardBtnItem}>
            <button className={css.cardBtn}>
              <svg className={css.cardIcon}>
                <use href={`${sprite}#trash-icon`} />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
