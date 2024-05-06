import css from './logoComponent.module.css';
// import sprite from '';

const LogoComponent = () => {
  return (
    <div className={css.logoComponent}>
      <img src="" alt="logo" className={css.logo} />
      <h2 className={css.logoTitle}>Task Pro</h2>
    </div>
  );
};

export default LogoComponent;
