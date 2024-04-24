import { Player, Youtube } from '@vime/react'; 
import * as C from './styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Video = () => {
    return (
        <C.Container>
            <C.Button>
                <AiOutlineArrowLeft />
                Back
            </C.Button>


            <Player>
                <Youtube video="3n1T3HxHd7Y"></Youtube>
            </Player>

        </C.Container>
    );

}