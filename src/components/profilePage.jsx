import React, { Component } from 'react';

import Im from './cover.jpg'
// import Nav from './navbar';
import Prog from './circularbar';
import Footer from './footer';

export default class customer extends Component {
    state = {
        trips:[],
        appear: false,
        rateAppear:"d-none",
        tripBackgroud:"d-none",
        stars:0,
        desciption:"",
        ratedAlready:0,
        comp_mail:"",

    }


   

    render() {

        return (
            <div>
                

                   <img src={Im} className = "cover"/>
                    <div className="profile_pic">

                    <div className="blackpr fas fa-user-alt"></div>
                    </div>

                    <div className = "rectangle"> 
                    
                    </div>
                    <div className ="name shadow"> Sophia Labib </div>
                    <div className = "rectangle"> </div>
                    <div className = "rectangle"> </div>
                    <div className="container ">
                        <Prog/>
                     </div>
                     <br/><br/>
                     <br/>
                     {/* <br/>
                     <br/>
                     <br/><br/><br/><br/><br/><br/><br/><br/>
                     <br/>
                     <br/>
                     <br/> */}
{/* -------------------------------------informaton ------------------------------------- */}
    <div className="container"> 
                    <div className = "container_2_info   shadow m-5 bg-dark rounded"> 
                    <div className= "text-capitalize  text-start fs-1 text-margin mt-5 ml-5 text-light"> Information</div> 
                        <div className="row">
                            <div className="col">
                                
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light" >First Name: <span className="text-info fw-light">Sophia</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">Last Name: <span className="text-info fw-light">Labib</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">Mail:<span className="text-info fw-light">Sophia@aucegypt.edu</span> </div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">Telephone number:<span className="text-info fw-light">012345678</span> </div>
                            </div>
                            <div className="col">
                                
                               
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">country: <span className="text-info fw-light">Egypt</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">city: <span className="text-info fw-light">New container_2_info</span></div>
                                <div className="text-capitalize fs-5  text-start m-3 ml-5  text-light">BD: <span className="text-info fw-light">0-0-0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
 {/* -------------------------------------informaton ------------------------------------- */}
                  
 <Footer/>

   

               
    </div >
        )
    }

}