import { Container } from 'components/Container/Container';
import { DashboardIvent } from 'components/DashboardIvent/DashboardIvent';
import { TableContainer } from 'components/TableContainer/TableContainer';
import s from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <Container>
      <section className={s.ivents}>
        <DashboardIvent title="All products" count="8,430" />
        <DashboardIvent title="All suppliers" count="211" />
        <DashboardIvent title="All Customers" count="140" />
      </section>
      <section className={s.tables}>
        <TableContainer size="small" title="Recent Customers">
          Table
        </TableContainer>
        <TableContainer size="small" title="Income/Expenses">
          List
        </TableContainer>
      </section>
    </Container>
  );
};
