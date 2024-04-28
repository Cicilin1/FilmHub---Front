import { BackgroundImage, BackgroundGradient } from "./style";

export const Background = ({imageBanner, children 
}) => {

    return (
        <BackgroundImage bgImage={imageBanner}>
            <BackgroundGradient>
                {children}
            </BackgroundGradient>
        </BackgroundImage>
    )
}