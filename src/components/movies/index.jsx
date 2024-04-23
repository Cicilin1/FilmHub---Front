import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../../assets/avenders.jpg'
import * as C from './styles'

export const Movies = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <C.Container>
            <C.Text>Movies</C.Text>

            <Carousel responsive={responsive}>
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
            </Carousel>


            <C.Text>Tv Show</C.Text>

            <Carousel responsive={responsive}>
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
            </Carousel>

            <C.Text>All</C.Text>

            <Carousel responsive={responsive}>
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
                <C.Movie src={Image} alt='image movie' />
            </Carousel>
        </C.Container>
    )
}