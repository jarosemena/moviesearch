import { Container, Spinner, Text } from './Loading.styles';

export const Loading = ({ text = 'Cargando...' }) => {
  return (
    <Container>
      <Spinner />
      <Text>{text}</Text>
    </Container>
  );
};
