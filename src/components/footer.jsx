import React, { Component } from 'react';
import Andrew from './Andrew.JPG'
import Salma from './Salma.jpeg'
import ES from './Fadia.png'


export default class footer extends Component {
    render() {
        return (
            <div className="footer ">

                <div className="container">
                    <div className="row mt-5">
                        <div className="text-start col-3 shadow ">
                      
                            <div className="fs-4 text-captalize text-info "> We are featured in </div>
                            
                            <div className="">Egypt</div>
                            <div>US</div>
                            <div>Dubai</div>
                            <div>Canada</div>
                            <div> </div>
                            
                        </div>
                        <div className="text-start col-3 shadow">
                        
                            <div className="fs-4 text-captalize text-info"> General: </div>
                            <a className="d-block text-decoration-none text-light">terms and conditions</a>
                            <a className="d-block text-decoration-none text-light">Become a Partner</a>
                            <a className="d-block text-decoration-none text-light">Donte</a>
                            <a className="d-block text-decoration-none text-light">Rewards Programs Terms and Conditions</a>
                            <div> </div>
                        
                        </div>
                        <div className="text-start col-3 shadow">
                        
                            <div className="fs-4 text-captalize opacityzero"> General: </div>
                            <a className="d-block text-decoration-none text-light">Why use our platform</a>
                            <a className="d-block text-decoration-none text-light"> FAQ</a>
                            <a className="d-block text-decoration-none text-light">Privacy Policy</a>
                            <div> </div>
                    
                        </div>
                        <div className="text-start col-3 shadow">
                        
                            <div className="fs-4 text-captalize opacityzero"> General: </div>
                            <a className="d-block text-decoration-none text-light">Impact </a>
                            <a className="d-block text-decoration-none text-light">Vision and Mission</a>
                            <a className="d-block text-decoration-none text-light">Terms of use</a>
                            <div> </div>
                
                      </div>
                    </div>
                    <div className=" mb-5  border-bottom"></div>

                      <div className="fs-4 text-info fw-light text-center">This website is created by a group of undergraduate students at AUC contibuting to Hack-21</div> 
                        {/* contacts: */}
                        {/* <div className="row fs-5">
                            
                        </div> */}
                        <div className="fs-5 FloatLeft ">
                      
                            <div className="names">Andrew Nady </div> 
                                <img src={Andrew} className="photo "/> 
                            </div>
                            <div className="FloatLeft ">
                                <div className="names">Salma Soliman</div> 
                                <img src={Salma} className="photo "/> 
                            </div>
                            <div className="FloatLeft ">
                               <div className="names">Fadia Habib</div> 
                               <img src={ES} className="photo"/> 
                             </div>
                            

                            
                            
                            
                       
                       
                    
                         
                    </div>
                    
            </div>
        );
    }
}