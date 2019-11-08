import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
height:60px;
width:100%;
background-image:linear-gradient(135deg, rgb(116, 44, 58) 0%, rgb(116, 44, 58) 1%,rgb(158, 95, 98) 1%, rgb(158, 95, 98) 49%,rgb(126, 62, 66) 49%, rgb(126, 62, 66) 51%,rgb(200, 36, 63) 51%, rgb(200, 36, 63) 64%,rgb(166, 67, 79) 64%, rgb(166, 67, 79) 68%,rgb(170, 84, 98) 68%, rgb(170, 84, 98) 71%,rgb(113, 43, 50) 71%, rgb(113, 43, 50) 100%);
display:flex;
justify-content:space-evenly;
align-items:center;
`
const NavItem = styled(Link)`
text-transform:uppercase;
text-decoration:none;
color:white;
text-shadow:2px 2px 2px black;
:hover{
    text-decoration:underline;
    /* transform: rotate(3deg); */
    transform: scale(1.3);   
}


`
export default function Navbar() {
    return (
        <NavContainer>
            <NavItem>
                Home
            </NavItem>
            <NavItem to ="/Wiki">
                Wiki
            </NavItem>
            <NavItem to='/Episodes'>
                Episodes
            </NavItem>
            <NavItem to ="/Chapters">
                Chapters
            </NavItem>
        </NavContainer>
    )
}
