import { Container } from "./styles";
import { Button } from '../../components/Button';

export function Details() {

  return(
    <Container>
      <h1>Grace Kelly</h1>
      <span>ótima de excelente!</span>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>    
  )
}