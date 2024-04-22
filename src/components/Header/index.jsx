import { Container } from "./styles";
import logo from "../../assets/logo.svg"

export const Header = () =>{

    return(
        <Container>
            <img src={logo} alt='logo DeMovies' />

            <nav>
                <a href="">Movies</a>
                <a href="">TV Shows</a>
                <a href="">All</a>
            </nav>
        </Container>
    )
}