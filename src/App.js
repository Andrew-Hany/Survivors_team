import React, { Component } from 'react';
import Nav from './components/navbar'
import Footer from './components/footer'
import Side from './components/sidebar'
import Apple from './components/Apple'
import Ban from './components/banana'
import Straw from './components/straw'
import Pro from './components/profilePage'
import Im from './down.jpeg'
import Im1 from './down4.jpg'
import Im2 from './down1.jpg'
import Im3 from './down2.jpg'
import Im4 from './down3.jpg'
import Im5 from './Adhd1.jpg'
import Im6 from './Adhd2.jpg'
import Im7 from './Adhd3.jpg'
import Im8 from './Adhd4.jpg'
import Im9 from './blind1.jpg'
import Im10 from './blind2.jpg'
import Im11 from './blind3.jpg'
import Im12 from './blind4.jpg'
import Im13 from './deaf1.jpg'
import Im14 from './deaf2.jpg'
import Im15 from './deaf3.jpg'
import Im16 from './deaf4.jpg'



import './App.css';
import './circular.css';
import './sidebars.css';








class App extends Component {
  state={
    homepage:true,
    DownPage:false,
    underCon:false,
    Profile:false,
  

    lessons:[
      {id:0,name:"Apple",position:{x:0,y:-100,z:-100},rotation:{x:0,y:0,z:0}},
      {id:1,name:"Banana",position:{x:0,y:0,z:-100},rotation:{x:100,y:200,z:0}},
      {id:2,name:"Strawberry",position:{x:0,y:0,z:-100},rotation:{x:100,y:200,z:0}},
      {id:2,name:"Strawberry"},
      {id:3,name:"Strawberry"},
      {id:4},
      {id:5},
      {id:6},
      {id:7},
    ],
    id:0
  
  }

  
  tick={
    animate:false
  }

  toogleDown=()=>{
    this.setState({homepage:false})
    this.setState({underCon:false})
    this.setState({DownPage:true})
    this.setState({Profile:false})
  }
  toogleUnder=()=>{
    this.setState({homepage:false})
    this.setState({underCon:true})
    this.setState({DownPage:false})
    this.setState({Profile:false})
  }
  tooglePro=()=>{
    this.setState({Profile:true})
    this.setState({homepage:false})
    this.setState({underCon:false})
    this.setState({DownPage:false})
  }
  toogleHome=()=>{
    this.setState({Profile:false})
    this.setState({homepage:true})
    this.setState({underCon:false})
    this.setState({DownPage:false})
  }
  

  changelesson=(ll)=>{
    
      this.setState({id:ll})
      console.log(ll)
    
    

  }



  render() {

    return (

    <div className="App">
   <Nav
  tooglePro={this.tooglePro}
  toogleHome={this.toogleHome}
   />
   {this.state.homepage&&
    <div>
        <img src={Im} className ="responsive-image" ></img>
        <div className="Title "> Breaking your limits!</div>
        {/*  Filteration__________________*/}
        <div className="shadow bg-body bg-lighter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                      
                                <div className="container-fluid shadow-lg m-1">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="text-start text-primary fs-5 fw-bold ml-3">FILTER BY:</div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">              
                                    <li className="nav-item dropdown">

                                    {this.state.city!==""&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                               kind of disability
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item " >Down Syndrom</a></li>
                                            <li><a className="dropdown-item" >ADHD</a></li>
                                            <li><a className="dropdown-item" >Blindness</a></li>
                                            <li><a className="dropdown-item" >Deaf</a></li>
                                        
                                            </ul>
                                    </div>
                                            }

                
                                    </li>

                                    <li className="nav-item dropdown">
                                    {this.state.price!==0&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            User Type
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" >Student</a></li>
                                        <li><a className="dropdown-item" >Parents</a></li>
                                        <li><a className="dropdown-item" >Social Workers</a></li>
                                       
                                        </ul>
                                    </div>
                                            }
                                        
                                      
                                    </li>


                                    <li className="nav-item dropdown">
                                   
                                           
                                    </li>


                                    <li className="nav-item dropdown">
                                    {this.state.nom_of_days!==0&&
                                    <div>
                                            <a className="nav-link dropdown-toggle bg-success rounded m-1 shadow text-light fs-6"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Level of Educatin
                                            </a>
                                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                              <li><a className="dropdown-item" >Pimary School</a></li>
                                              <li><a className="dropdown-item" >Perp School</a></li>
                                              <li><a className="dropdown-item" >High School</a></li>
                                              <li><a className="dropdown-item" >Unversity Level</a></li>
                                              
                                          
                                              </ul>
                                      </div>
                                            }

                                          
                                    </li>
                                            
                                   


                                </ul>
                            


                            </div>
                            </div>
                                
                            <button type="button" class="btn btn-success justify-content-md-end ml-3 mr-3 pl-5 pr-5" onClick={()=>this.handelreset()}>Reset</button>
                                        
                        </nav>
                        
                    </div>
         {/* ____________________________________________Down Syndrom Courses  ____________________________________________ */}
        <p className="m-0 subtitles bg-light shadow">Down Syndrom Courses</p>
       {/* First course */}
        <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im1} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleDown()}>Enrol</a>
                           
                        </div>
                    </div>
                </div>  
          {/* Second course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im2} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* Third course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im3} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* forth course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im4} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  

                 {/* ____________________________________________AHDH ____________________________________________ */}
        <p className="m-0 subtitles  shadow">ADHD Courses</p>
       {/* First course */}
        <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im5} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
          {/* Second course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im6} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* Third course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im7} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* forth course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im8} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                  {/* ____________________________________________ Courses for blind people ____________________________________________ */}
        <p className="m-0 subtitles shadow">Courses for blind people</p>
       {/* First course */}
        <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im9} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
          {/* Second course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im10} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* Third course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im11} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* forth course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im12} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                       {/* ____________________________________________ Courses for Deaf people ____________________________________________ */}
        <p className="m-0 subtitles shadow">Courses for Deaf people</p>
       {/* First course */}
        <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im16} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
          {/* Second course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im13} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* Third course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im14} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div>  
                {/* forth course */}
          <div className=" container ">
                    <div className="cards" style={{width:"18em"}}>
                        <div className="  shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} >
                         <img src={Im15} className="card-img-top cropped1" alt="..."/>
                          
                            {!this.props.Upage&&<p className="text-capitalize card-text">Fruits Course</p>}
                            {this.props.Upage&&<div className="text-capitalize  fw-light text-center fs-6"> Company Name: <span className="text-success">{this.state.company.comp_name}</span> </div>}
                            <ul className="list-group list-group-flush">
                           

                            </ul>
                            <a className={"btn btn-primary "} onClick={()=>this.toogleUnder()}>Enrol</a>
                            
                        </div>
                    </div>
                </div> 
                

      

        
 <Footer/>
    </div>}

  {this.state.DownPage&&
  // div
<div>
    <div>
    <div class="page-wrapper chiller-theme toggled">      
    <Side
    lessons={this.state.lessons}
    changelesson={this.changelesson}
    />
    
        <div >
        
        {this.state.id==0&&<Apple
        rotation={this.state.lessons[this.state.id].rotation}
        position={this.state.lessons[this.state.id].position}
        id={this.state.id}
        lessons={this.state.lessons}
        />}
        {this.state.id==1&&<Ban
        rotation={this.state.lessons[this.state.id].rotation}
        position={this.state.lessons[this.state.id].position}
        id={this.state.id}
        lessons={this.state.lessons}
        />}
         {this.state.id>=2&&<Straw
        rotation={this.state.lessons[this.state.id].rotation}
        position={this.state.lessons[this.state.id].position}
        id={this.state.id}
        lessons={this.state.lessons}
        />}
        
              
            </div>
          </div>
        {/* </main> */}
    </div>


  </div>
  }
  {this.state.underCon&&<Straw/>}
  {this.state.Profile&&<Pro/>}
  

    </div>
  );
  }

}

export default App;
