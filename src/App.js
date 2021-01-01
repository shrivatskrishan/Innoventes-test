import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBed,faUserAlt,faChild,faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      roomCount:1,
      adultCount:1,
      childCount:0
    }
  }
  increaseRoom =()=>{
    let {roomCount,adultCount,childCount}=this.state
    let totalCount=adultCount+childCount
      if(roomCount<5){
        if(totalCount==roomCount){
          ++roomCount
          ++adultCount
         
        }else{
          ++roomCount
        }
        this.setState({
          roomCount,
          adultCount,
          totalCount
        })
       
      }
  }
  reduseRoom =()=>{
    let {roomCount,adultCount,childCount}=this.state
    if(roomCount>1){
      let remainsAdult=childCount-4
      --roomCount
      if(remainsAdult<0){
        --adultCount
        this.setState({
          roomCount,
          childCount:0,
          adultCount
        })
  
      }else{
        this.setState({
          roomCount,
          childCount:remainsAdult,
          adultCount
        })
      }
    }
   

  }
  reduseAdult =()=>{
    let {roomCount,adultCount,childCount}=this.state
    if(adultCount>1){
      -- adultCount
      let checkCount=(adultCount+childCount)/4
      if(roomCount==++checkCount){
        let remainsAdult=childCount-4
        --roomCount
        if(remainsAdult<0){
          this.setState({
            roomCount,
            childCount:0,
            adultCount
          })
    
        }else{
          this.setState({
            roomCount,
            childCount:remainsAdult,
            adultCount
          })
        }
      }else{
        this.setState({
          adultCount
        })
      }
    }
  }
  increaseAdult =()=>{
    let {roomCount,adultCount,childCount}=this.state
    let adultCountData=roomCount*4-adultCount-childCount;
    if(adultCountData!=0){
      ++adultCount;
      this.setState({
        adultCount
      })
    }else{
      ++adultCount
      ++roomCount
      this.setState({
        adultCount,
        roomCount
      })
    }
  }
  reduseChild =()=>{
    let {childCount}=this.state
    if(childCount!=0){
      --childCount
      this.setState({
        childCount
      })
    }
  }
  increaseChild =()=>{
      let {roomCount,adultCount,childCount}=this.state
      let childCountData=roomCount*4-adultCount-childCount;
      if(childCountData!=0){
        ++childCount;
        this.setState({
          childCount
        })
      }
  }

 render(){
   const{roomCount,adultCount,childCount}=this.state
  return (
    <div >
      <div className='header-div'>
        <div className='div-height'>
        <FontAwesomeIcon  icon={faBed}/>
        <label className='room'>ROOMS</label>
        <div className='button-click'>
        <FontAwesomeIcon style={roomCount>1?{cursor:"auto"}:{cursor:"not-allowed"}}  onClick={this.reduseRoom} icon={faMinusCircle}/>
        <label>{roomCount}</label>
        <FontAwesomeIcon color='red'  onClick={this.increaseRoom} className='add-button' icon={faPlusCircle}/>
        </div>
       
        </div>
        <hr></hr>
        <div className='div-height'>
        <FontAwesomeIcon  icon={faUserAlt}/>
        <label className='room'>ADULTS</label>
        <div className='button-click'>
        <FontAwesomeIcon style={adultCount>1?{cursor:"auto"}:{cursor:"not-allowed"}} onClick={this.reduseAdult} icon={faMinusCircle}/>
        <label>{adultCount}</label>
        <FontAwesomeIcon color='red'  onClick={this.increaseAdult} className='add-button' icon={faPlusCircle}/>
        </div>
        </div>
        <hr></hr>
        <div className='div-height'>
        <FontAwesomeIcon  icon={faChild}/>
        <label className='room'>CHILDREN</label>
        <div className='button-click'>
        <FontAwesomeIcon  onClick={this.reduseChild} icon={faMinusCircle}/>
        <label>{childCount}</label>
        <FontAwesomeIcon   color='red' onClick={this.increaseChild} className='add-button'  icon={faPlusCircle}/>
        </div>
        </div>
      </div>
    </div>
  )
 }
 ;
}

export default App;
