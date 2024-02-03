import { Container } from './style';

import { Button } from '../../components/Button';

export function Details(){

  return(
    <Container>
      <h1>Hello word!</h1>
      <span>Matheus Toledo</span>

      <Button title="Entrar" />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}