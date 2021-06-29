import React, { Component } from 'react';


import {MTLModel} from 'react-3d-viewer'

import Obj1 from '../assest/Banana_01.obj'
import Mtl1 from '../assest/Banana_01.mtl'

import Audio from './slide1.ogg'
export default class trips extends Component {   
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
                      mtl={Mtl1}
                      src={Obj1}
                      position={this.props.position}
                      rotation={this.props.rotation}
                      
                    />
                </div>
                <a className="btn btn-success button" onClick={()=>this.startLeanring()}>Start Learning</a>
            </div >
        )
    }

}