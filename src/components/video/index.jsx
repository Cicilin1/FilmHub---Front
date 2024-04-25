import { Player, Youtube } from '@vime/react';
import * as C from './styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Video = ({ playVideo, handleClosePlayVideo }) => {
    return playVideo ? (
            <C.Container>
                <C.Button onClick={handleClosePlayVideo}>
                    <AiOutlineArrowLeft />
                    Back
                </C.Button>

                <Player>
                    <Youtube videoId="3n1T3HxHd7Y"></Youtube>
                </Player>

            </C.Container>

        ) : null;

}