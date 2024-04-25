import * as C from "./styles"
import { BsPlayFill } from "react-icons/bs"

export const Description = ({handleOpenPlayVideo}) => {

    return (
        <C.Container>
            <C.Title>STAR WARS THE RISE OF SKYWALKER</C.Title>

            <C.Description>
            A Ascensão de Skywalker" conclui a saga Skywalker com uma batalha final entre o bem e o mal, liderada por Rey, Finn e Poe contra o ressurgente Imperador Palpatine. O filme entrega ação intensa, revelações emocionantes e um encerramento satisfatório para os fãs de Star Wars
            </C.Description>

            <C.Button onClick={handleOpenPlayVideo}>
                <BsPlayFill size={24} />
                Wacht Now
            </C.Button>
        </C.Container>
    )
}