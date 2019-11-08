import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
height:60px;
width:100%;
background-image:linear-gradient(135deg, rgb(12, 2, 85) 0%, rgb(12, 2, 85) 1%,rgb(12, 2, 85) 1%, rgb(12, 2, 85) 49%,rgb(255, 255, 255) 49%, rgb(126, 62, 66) 51%,rgb(192, 4, 4) 51%, rgb(200, 36, 63) 64%,rgb(255, 255, 255) 29%, rgb(12, 2, 85) 68%,rgb(12, 2, 85) 68%, rgb(12, 2, 85) 71%,rgb(12, 2, 85) 71%, rgb(12, 2, 85) 100%);
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
    transition:1s;
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
