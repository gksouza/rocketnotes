import { Container, Links, Content } from "./styles";

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat cumque ducimus perspiciatis omnis recusandae consectetur? Aliquam iure fugiat recusandae praesentium fuga eveniet, impedit odio ipsum molestiae. Labore, ut voluptatibus?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>      
            </Links>
          </Section>

          <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="nodejs"/>
          </Section>     

          <Button title="Voltar"/>
        </Content>
      </main>      
    </Container>    
  )
}