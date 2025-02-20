import { Container } from 'components/Container/Container';
import { TableContainer } from 'components/TableContainer/TableContainer';
import s from './Customers.module.scss';

export const Customers = () => {
  return (
    <Container>
      <section className={s.tables}>
        <TableContainer title="Customers Data">Table</TableContainer>
      </section>
    </Container>
  );
};
