import { Container } from '../Container/Container';
import { DashboardIvent } from '../DashboardIvent/DashboardIvent';
import s from './DashboardPage.module.scss';

export const DashboardPage = () => {
  return (
    <Container>
      <section className={s.ivents}>
        <DashboardIvent title="All products" count="8,430" />
        <DashboardIvent title="All suppliers" count="211" />
        <DashboardIvent title="All Customers" count="140" />
      </section>
    </Container>
  );
};
