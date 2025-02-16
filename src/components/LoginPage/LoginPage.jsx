import { LoginForm } from '../LoginForm/LoginForm';
import s from './LoginPage.module.scss';

export const LoginPage = ({ onSubmit, error }) => {
  return (
    <div className={s.container}>
      <header>
        <div className={s.logo}></div>
        <h1 className={s.title}>E-Pharmacy</h1>
      </header>
      <main>
        <div className={s.welcomeTitle}>
          <div className={s.image}></div>
          <p>
            Your medication, delivered Say goodbye to all
            <span> your healthcare </span>
            worries with us
          </p>
        </div>
        <LoginForm onSubmit={onSubmit} error={error} />
      </main>
    </div>
  );
};
