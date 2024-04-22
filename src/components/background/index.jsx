import { BackgroundImage } from "./style";
import backgroundImage from '../../assets/background.jpg'

export const Background = ({ children }) => {

    return (
        <BackgroundImage bgImage={backgroundImage}>
            {children}
        </BackgroundImage>
    )
}