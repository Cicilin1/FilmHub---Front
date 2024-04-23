import { BackgroundImage, BackgroundGradient } from "./style";
import backgroundImage from '../../assets/background.jpg'

export const Background = ({ children }) => {

    return (
        <BackgroundImage bgImage={backgroundImage}>
            <BackgroundGradient>
                {children}
            </BackgroundGradient>
        </BackgroundImage>
    )
}