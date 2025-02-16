import s from './DashboardIvent.module.scss';

export const DashboardIvent = ({ title, count }) => {
  return (
    <div className={s.ivent}>
      <div className={s.title}>
        <div className={s.logo}></div>
        <p>{title}</p>
      </div>
      <p className={s.count}>{count}</p>
    </div>
  );
};
