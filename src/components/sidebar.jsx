import React, { Component } from "react";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';


import 'react-pro-sidebar/dist/css/styles.css';
// import Im from './logo.jpeg'
export default class navbar extends Component {
  render() {
    return (
      <div >

<a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
                <div class="sidebar-brand">
                    <a href="#">Down Syndrome</a>
                            <div id="close-sidebar">
                            <i class="fas fa-times" onClick={this.jQuery}></i>
                            </div>
                </div>
      <div class="sidebar-header">
       
        <div class="user-info">
          <span class="user-name"> 
            <strong>Fruits course</strong>
            {/* {console.log(this.props.name) && this.props.onS} */}
          </span>
          
        </div>
      </div>
     
     
      
      <div class="sidebar-menu">
        <ul>
            <li class="header-menu">
                <div className="border-bottom text-light ml-2 mr-3">Lessons</div>
            </li>

            {this.props.lessons.map(lesson =>(
                <div>
                    <li >
                        <a >
                        
                        <div onClick={()=>this.props.changelesson(lesson.id)} style={{cursor: "pointer"}}>lesson {lesson.id} </div>
                        
                        </a>
                        
                    </li>
                </div>

            ))}

          
          <li class="header-menu">
            <span>Extra</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-book"></i>
              <span>Documentation</span>
             
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-folder"></i>
              <span>Examples</span>
            </a>
          </li>
        </ul>
      </div>
   
    </div>
  
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>

  

  
</div>

    );
  }
}
