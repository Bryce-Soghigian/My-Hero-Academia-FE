import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const LeftDiv = styled.div`
background-image:linear-gradient(199deg, rgba(108, 37, 154, 0.5) 0%, rgba(108, 37, 154, 0.5) 14.286%,rgba(92, 53, 164, 0.5) 14.286%, rgba(92, 53, 164, 0.5) 28.572%,rgba(75, 70, 174, 0.5) 28.572%, rgba(75, 70, 174, 0.5) 42.858%,rgba(59, 86, 185, 0.5) 42.858%, rgba(59, 86, 185, 0.5) 57.144%,rgba(42, 102, 195, 0.5) 57.144%, rgba(42, 102, 195, 0.5) 71.43%,rgba(26, 119, 205, 0.5) 71.43%, rgba(26, 119, 205, 0.5) 85.716%,rgba(9, 135, 215, 0.5) 85.716%, rgba(9, 135, 215, 0.5) 100.002%),linear-gradient(213deg, rgb(22, 162, 134) 0%, rgb(22, 162, 134) 14.286%,rgb(37, 142, 144) 14.286%, rgb(37, 142, 144) 28.572%,rgb(52, 122, 154) 28.572%, rgb(52, 122, 154) 42.858%,rgb(68, 103, 164) 42.858%, rgb(68, 103, 164) 57.144%,rgb(83, 83, 174) 57.144%, rgb(83, 83, 174) 71.43%,rgb(98, 63, 184) 71.43%, rgb(98, 63, 184) 85.716%,rgb(113, 43, 194) 85.716%, rgb(113, 43, 194) 100.002%);

border-style:solid;
border-color:#C51628;
height:85vh;
width:30%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-content:space-between;
margin:5%;
`
const RightDiv = styled.div`
width:100%;
`
const VideoContainer = styled.div`
display:flex;
flex-direction:row;

`
// const Constrict = styled.div`
// z-index:1;

// height:50vh;
// display:flex;
// flex-direction:column;
// align-content:space-around;
// margin:5%;
// `
const Season = styled(Link)`
text-decoration:none;
color:white;
/* margin:2%; */
margin-bottom:15%;
font-size:1.4rem;
/* margin-top:5%;
margin-bottom:5%;
margin-left:2%; */

:hover{
    text-decoration:underline;
    color:red;
    transform: scale(1.3);   
    transition:1s;
}

`
export default function Video_Home() {
    //side menu to select each of the four seasons

    return (
        <div>
            <VideoContainer>
            <LeftDiv>
                
                <Season to="/Season_1">
                    Season 1
                </Season>
                <Season to ="Season_2">
                    Season 2
                </Season>
                <Season to="Season_3">
                    Season 3
                </Season>
                <Season to ="Season_4">
                    Season 4
                </Season>
      

            </LeftDiv>
            <RightDiv>
            <h1>About this section of the app</h1>
            </RightDiv>
            </VideoContainer>
        </div>
    )
}
