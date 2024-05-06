import css from './logout.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operation';

const Logout = () => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={css.block}>
      <button onClick={onLogout} className={css.logoutBtn}>
        <svg className={css.logoutIcon} width="32" height="32">
          <use href=""></use>
        </svg>
        <p className={css.logoutText}>Log out</p>
      </button>
    </div>
  );
};
export default Logout;
