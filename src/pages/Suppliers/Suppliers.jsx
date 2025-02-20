import { Container } from 'components/Container/Container';
import { TableContainer } from 'components/TableContainer/TableContainer';
import s from './Suppliers.module.scss';

export const Suppliers = () => {
  return (
    <Container>
      <section className={s.tables}>
        <TableContainer title="All suppliers">Table</TableContainer>
      </section>
    </Container>
  );
};
