import CardBtnList from './CardBtnList';

import css from './card.module.css';

const Card = ({ item: { id, title, description, priority, deadline } }) => {
  function getPriorityClass(priority, prefix = '') {
    switch (priority) {
      case 'High':
        return css[`${prefix}High`];
      case 'Medium':
        return css[`${prefix}Medium`];
      case 'Low':
        return css[`${prefix}Low`];
      default:
        return css[`${prefix}Without`];
    }
  }

  return (
    <li className={`${css.card} ${getPriorityClass(priority, 'cardPriority')}`}>
      <h4 className={css.cardTitle}>{title}</h4>
      <p className={css.cardText}>{description}</p>
      <div className={css.wrapCardInfo}>
        <div className={css.wrapPriorityDeadline}>
          <div className={css.wrapLeft}>
            <h6 className={css.infoText}>Priority</h6>
            <div className={css.prioritySpanText}>
              <span
                className={`${css.colorSpan} ${getPriorityClass(
                  priority,
                  'priority'
                )}`}
              ></span>
              <p className={css.info}>{priority}</p>
            </div>
          </div>
          <div className={css.wrapLeft}>
            <h6 className={css.infoText}>Deadline</h6>
            <p className={css.info}>{deadline}</p>
          </div>
        </div>
        <CardBtnList deadline={deadline} />
      </div>
    </li>
  );
};

export default Card;
