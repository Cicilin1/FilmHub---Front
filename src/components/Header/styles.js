import styled from "styled-components";

export const Container = styled.div`
    background: transparent;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 6rem;
    font-size: 20px;

    img{
        height: 3rem;
    }

    a{
        text-decoration: none;
        padding: 0 1.2rem;
        letter-spacing: 0.03rem;
        color: #FFFFFF;
        transition: 0.3s;
    }

    a:hover{
        opacity: 0.7;
    }

    a::after{
        content: "";
        width: 0;
        height: 2px;
        background-color: #FFFFFF;
        transition: 0.3s;
    }

    a:hover::after {
        width: 100%;
    }

    @media screen and (max-width: 700px){
        padding: 2rem 0;
        font-size: 20px;

        a{
            padding: 0 1rem 0 0.6rem;
            letter-spacing: 0.03rem;
        }

    }

`