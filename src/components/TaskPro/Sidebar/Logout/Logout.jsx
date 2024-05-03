import css from './logout.module.css';

const Logout = () => {
  return (
    <div className={css.logoutComponent}>
      <button type="button" className={css.logoutBtn}>
        <svg className={css.logoutIcon}>
          <use href=""></use>
        </svg>
        <p className={css.logoutText}>Logout</p>
      </button>
    </div>
  );
};

export default Logout;
