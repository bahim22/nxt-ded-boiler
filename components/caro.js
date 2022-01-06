import { Container, Carousel} from 'react-bootstrap'
import utilStyles from '../styles/utils.module.css'

export function Caro() {
    return (
<>
<Container>
<Carousel>
<Carousel.Item>
    <Image
    src="/img/bg7.jpg"
    className={utilStyles.flex}
    height={200}
    width={200}
    alt='Nx Next Preview'
    />
    <Image
    src="/img/bg7.jpg"
    className={utilStyles.flex}
    height={200}
    width={200}
    alt='Django preview'
    />
    <Image
    src="/img/bg7.jpg"
    className={utilStyles.flex}
    height={200}
    width={200}
    alt='React Preview'
    />
</Carousel.Item>
</Carousel>
</Container>

<Container>
<Carousel fade>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
</>
)
}