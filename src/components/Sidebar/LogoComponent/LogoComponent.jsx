import css from './logoComponent.module.css';
import logo from '../../../images/logo-readme.png';

const LogoComponent = () => {
  return (
    <div className={css.logoComponent}>
      <img src={logo} alt="logo" className={css.logo} />
      {/* <h2 className={css.logoTitle}>Task Pro</h2> */}
    </div>
  );
};

export default LogoComponent;
