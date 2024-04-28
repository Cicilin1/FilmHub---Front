import { Player, Youtube } from '@vime/react';
import * as C from './styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Video = ({ playVideo, linkVideo, handleClosePlayVideo }) => {
    return playVideo ? (
            <C.Container>
                <C.Button onClick={handleClosePlayVideo}>
                    <AiOutlineArrowLeft />
                    Back
                </C.Button>

                <Player>
                    <Youtube videoId={linkVideo}></Youtube>
                </Player>

            </C.Container>

        ) : null;

}