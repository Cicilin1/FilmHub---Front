import * as C from "./styles"
import { BsPlayFill } from "react-icons/bs"

export const Description = ({
    title,
    description,
    handleOpenPlayVideo
}) => {

    return (
        <C.Container>
            <C.Title>{title}</C.Title>

            <C.Description>
                {description}
            </C.Description>

            <C.Button onClick={handleOpenPlayVideo}>
                <BsPlayFill size={24} />
                Wacht Now
            </C.Button>
        </C.Container>
    )
}