import { BackgroundImage } from "./style";
import backgroundImage from '../../assets/star-wars.jpg'

export const Background = ({ children }) => {

    return (
        <BackgroundImage bgImage={backgroundImage}>
            {children}
        </BackgroundImage>
    )
}