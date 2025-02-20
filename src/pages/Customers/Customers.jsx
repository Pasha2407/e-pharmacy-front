import { Container } from 'components/Container/Container';
import { Search } from 'components/Search/Search';
import { TableContainer } from 'components/TableContainer/TableContainer';

export const Customers = () => {
  return (
    <Container>
      <Search placeholder={'User Name'} />
      <TableContainer title="Customers Data">Table</TableContainer>
    </Container>
  );
};
