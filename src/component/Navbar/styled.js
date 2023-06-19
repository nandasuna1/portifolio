import { styled } from "styled-components"

export const Section = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 85%;
    /* background-color: rgba(0,0,0,0.5); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 50px;
    padding: 0 50px;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

export const Logo = styled.img`
    margin-left: 20px;
    border-radius: 50px;
    height: 150px;
`

export const List = styled.ul`
    display: flex;
    gap: 50px;
`

export const ListItem = styled.button`
    cursor: pointer;
    list-style: none;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      color: #d1007d;
    }
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Icon = styled.img`
    width: 50px;
    cursor: pointer;
`

export const ButtonB = styled.button`
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #d1007d;
    background-color: #000;
    filter: drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2);
    transition: .5s;
    &:hover {
        color: #000;
        background: #d1007d;
        box-shadow: 0 0 50px #d1007d;
        filter: drop-shadow(0 0 15px #000) drop-shadow(0 0 50px #000) contrast(2) brightness(2);
    }

`