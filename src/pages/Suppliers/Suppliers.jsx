import { Container } from 'components/Container/Container';
import { Search } from 'components/Search/Search';
import { TableContainer } from 'components/TableContainer/TableContainer';
import s from './Suppliers.module.scss';

export const Suppliers = () => {
  return (
    <Container>
      <section className={s.management}>
        <Search placeholder={'User Name'} />
        <div>Add new</div>
      </section>
      <TableContainer title="All suppliers">Table</TableContainer>
    </Container>
  );
};
