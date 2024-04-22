import styled from "styled-components";

export const Container = styled.div`
    width: 520px;
    padding: 50px 60px 20px;
    display: flex;
    flex-direction: column;


    @media screen and (max-width: 530px){
        width: auto;
        margin: 50px 20px;
        padding: 0;
        height: 800px;
    }
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 40px;
    color: #FFF;
`

export const Description = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #FFF;
    opacity: 0.7;
`

export const Button = styled.div`
    width: 194px;
    height: 56px;
    margin-top: 16px;
    background: #fa4776;
    border-radius: 40px;

    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    font-weight: 600;
    font-size: 14px;
    color: #fff;
    transition: 0.3s;

    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }

    &:active{
        opacity: 0.5;
    }
`