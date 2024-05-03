import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      excepturi quas ducimus laudantium repellendus earum sequi minus eius.
      Natus voluptatem voluptatum nemo optio vel expedita cupiditate soluta
      laudantium, impedit mollitia.
    </Descricao>
  </Card>
)

export default Product
