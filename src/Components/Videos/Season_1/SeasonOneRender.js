import React, { Component } from 'react'
import styled from 'styled-components'
// import episode_one from './S1E1.mp4'
// import episode_two from './S1E2.mp4'
// import episode_three from './S1E3.mp4'
// import episode_four from './S1E4.mp4'
import './S1.css'
import Swal from 'sweetalert2'
import { FaRegPlayCircle ,FaPauseCircle} from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
const SeasonOneContainer = styled.div`
margin:2.5%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
 

`
const Video = styled.video`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50%;
    height:50%;
    margin:5px;
`
// const Full = styled.button`
// display:flex;
// justify-content:center;
// align-items:center; 
// background:#C51628;
// font-size:1em;
// color:white
// `
const Button = styled.button`
border-style:solid;
border-color:#C51628;
display:flex;
justify-content:center;
align-items:center; 
background:none;
font-size:1em;
color:#C51628;
`
const Buttons = styled.div`
display:flex;
justify-content:flex-start;

`

export default class SeasonOneRender extends Component {
    constructor(){
        super()
       this.state = {
           update:null,
           input:null
       }
    }
            //===============Video Functions==========================//
            playVideo =() => {
                this.refs.vidRef.play();
              }
      pauseVideo() {
        // Pause as well
        this.refs.vidRef.pause();
      }
      fullScreen(){
          this.refs.vidRef.requestFullscreen()
      }
    
    render() {

        const episodeHandler = (e) => {
            this.setState({update:true})
            this.setState({input:e.target.value})
            console.log(e.target.value)
            // .then(
            //     window.alert(`I hope you enjoy ${this.state.input}`)
            // )
            
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Enjoy!',
                showConfirmButton: false,
                timer: 1200
              })
        }
        if(this.state.update ===null){
            return (
                <SeasonOneContainer>
                    {/* <AboutSeasonOne/> */}
                <div>
                    <select id="Season-1" onChange={episodeHandler}>
                        <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                            <option value="ep1">Episode 1</option>
                            <option value="ep2">Episode 2</option>
                            <option value = "ep3">Episode 3</option>
                            <option value="ep4">Episode 4</option>
                            <option value="ep5">Episode 5</option>
                            <option value="ep6">Episode 6</option>
                            <option value="ep7">Episode 7</option>
                            <option value="ep8">Episode 8</option>
                            <option value="ep9">Episode 9</option>
                            <option value="ep10">Episode 10</option>
                            <option value="ep11">Episode 11</option>
                            <option value="ep12">Episode 12</option>
                        </optgroup>
                    </select>
                </div>
                </SeasonOneContainer>
            )
        }else if(this.state.input === 'ep1'){
            return(
                <SeasonOneContainer>
            <div>
        
            <select id="Season-1" onChange={episodeHandler}>
                <optgroup label="Season-1">
                <option>Choose An Episode</option>
                    <option value="ep1">Episode 1</option>
                    <option value="ep2">Episode 2</option>
                    <option value = "ep3">Episode 3</option>
                    <option value="ep4">Episode 4</option>
                    <option value="ep5">Episode 5</option>
                    <option value="ep6">Episode 6</option>
                    <option value="ep7">Episode 7</option>
                    <option value="ep8">Episode 8</option>
                    <option value="ep9">Episode 9</option>
                    <option value="ep10">Episode 10</option>
                    <option value="ep11">Episode 11</option>
                    <option value="ep12">Episode 12</option>
                </optgroup>
            </select>
            <h1>Episode 1</h1>

            
        </div>
        <h2>"Izuku Midoriya: Origin"</h2>
        {/* <Video ref="vidRef" id="episode" src={episode_one} type="video/mp4"></Video> */}
        <Buttons>
            {/* <Button onClick={this.playVideo.bind(this)}>Play</Button>
            <Button onClick={this.pauseVideo.bind(this)}>Pause</Button> */}
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
        </Buttons>
        </SeasonOneContainer>
        
                )}else if(this.state.input ==='ep2'){
                    return(
                    <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 2</h1>
                    </div>
                    <h2>"What It Takes to Be a Hero"</h2>
                    {/* <Video ref="vidRef" id="episode" src={episode_two} type="video/mp4"></Video> */}
        <Buttons>
            {/* <Button onClick={this.playVideo.bind(this)}>Play</Button>
            <Button onClick={this.pauseVideo.bind(this)}>Pause</Button> */}
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
        </Buttons>
                    </SeasonOneContainer>
                    )
        
                }else if(this.state.input ==='ep3'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 3</h1>
                    </div>
                    <h2>"Roaring Muscles"</h2>
                    {/* <Video ref="vidRef" id="episode" src={episode_three} type="video/mp4"></Video> */}
        <Buttons>
            {/* <Button onClick={this.playVideo.bind(this)}>Play</Button>
            <Button onClick={this.pauseVideo.bind(this)}>Pause</Button> */}
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
        </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep4'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 4</h1>
                    </div>
                    <h2>"Start Line"</h2>
                    {/* <Video src ={episode_four} type="video/mp4" ref="vidRef"></Video> */}
                    <Buttons>
                    <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep5'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 5</h1>
                    </div>
                    <h2>"What I can do for Now"</h2>
                    <Buttons>
                    <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep6'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 6</h1>
                    </div>
                    <h2>Rage, You Damned Nerd</h2>
                    <Buttons>
                    <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep7'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 7</h1>
                    </div>
                    <h2>"Deku vs. Kacchan"</h2>
                    <Buttons>
                    <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
        
                }else if(this.state.input ==='ep8'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 8</h1>
                    </div>
                    <h2>"Bakugos Start Line"</h2>
                    <Buttons>
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep9'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 9</h1>
                    </div>
                    <h2>"Yeah,  Just Do Your Best Iida!"</h2>
                    <Buttons>
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep10'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 10</h1>
                    </div>
                    <h2>"Encounter with the unknown"</h2>
                    <Buttons>
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep11'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 11</h1>
                    </div>
                    <h2>GAME OVER!</h2>
                    <Buttons>
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else if(this.state.input ==='ep12'){
                    return(
                        <SeasonOneContainer>
                        <div>
                        <select id="Season-1" onChange={episodeHandler}>
                            <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                                <option value="ep1">Episode 1</option>
                                <option value="ep2">Episode 2</option>
                                <option value = "ep3">Episode 3</option>
                                <option value="ep4">Episode 4</option>
                                <option value="ep5">Episode 5</option>
                                <option value="ep6">Episode 6</option>
                                <option value="ep7">Episode 7</option>
                                <option value="ep8">Episode 8</option>
                                <option value="ep9">Episode 9</option>
                                <option value="ep10">Episode 10</option>
                                <option value="ep11">Episode 11</option>
                                <option value="ep12">Episode 12</option>
                            </optgroup>
                        </select>
                        <h1>Episode 12</h1>
                    
        
                    </div>
                    <h2>"All Might"</h2>
                    <Buttons>
            <Button onClick={this.playVideo.bind(this)}><FaRegPlayCircle/></Button>
            <Button onClick={this.pauseVideo.bind(this)}><FaPauseCircle/></Button>
            <Button onClick={this.fullScreen.bind(this)}><MdFullscreen/></Button>
                    </Buttons>
                    </SeasonOneContainer>
                    )
                }else{
                    return(
                        <SeasonOneContainer>
                        <div>
                    <select id="Season-1" onChange={episodeHandler}>
                        <optgroup label="Season-1">
                            <option>Choose An Episode</option>
                            <option value="ep1">Episode 1</option>
                            <option value="ep2">Episode 2</option>
                            <option value = "ep3">Episode 3</option>
                            <option value="ep4">Episode 4</option>
                            <option value="ep5">Episode 5</option>
                            <option value="ep6">Episode 6</option>
                            <option value="ep7">Episode 7</option>
                            <option value="ep8">Episode 8</option>
                            <option value="ep9">Episode 9</option>
                            <option value="ep10">Episode 10</option>
                            <option value="ep11">Episode 11</option>
                            <option value="ep12">Episode 12</option>
                        </optgroup>
                    </select>
                    <h1>Please Select A video</h1>
                </div>
                </SeasonOneContainer>
                    )
                }
    }
}
