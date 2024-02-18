import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/gksouza.png"
          alt= "Foto do usuário"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>Grace Kelly Souza</strong>
        </div>
      </Profile>
    </Container>
  );
}