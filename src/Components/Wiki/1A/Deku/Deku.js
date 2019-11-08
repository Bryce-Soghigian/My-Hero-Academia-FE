import React, { Component } from 'react'
import styled from 'styled-components'
import Banner from './100.jpg'


const TopDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column


`
const Img = styled.div`
width:100%;

`
export default class Deku extends Component {
    render() {
        return (
            <div>
                <TopDiv>
                <Img src = {Banner}/>
                </TopDiv>
                
                
            </div>
        )
    }
}
