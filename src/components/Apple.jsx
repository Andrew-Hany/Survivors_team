import React, { Component } from 'react';



import Obj from '../assest/Apple.obj'
import Mtl from '../assest/Apple.mtl'
import {MTLModel} from 'react-3d-viewer'

import Audio from './slide1.ogg'

export default class trips extends Component {
    state = {
    
    
        disable:""
    }
componentWillUnmount(){
    
      
}
startLeanring=()=>{
    var x = document.getElementById("myAudio"); 
    x.play();

}
    render() {

        return (
            <div>
           
           <p className="lesson"> lesson {this.props.id+1}, {this.props.lessons[this.props.id].name} </p>
            
           <audio controls className="audio" id="myAudio"> 
                <source src={Audio} type="audio/ogg"  />
            </audio>
           <div className="object border border-5">
                  <MTLModel 
                      width={500}
                      height={500}
                      mtl={Mtl}
                      src={Obj}
                      position={this.props.position}
                      rotation={this.props.rotation}
                      
                    />
                </div>
                <a className="btn btn-success button" onClick={()=>this.startLeanring()}>Start Learning</a>
            </div >
        )
    }

}