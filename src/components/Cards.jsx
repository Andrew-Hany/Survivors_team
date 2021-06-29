import React, { Component } from 'react';



import Axios from "axios";
export default class trips extends Component {

    state = {
        photo: "",
        overlay:"d-none",
        tripBackgroud:"d-none",
        company:[],
        stars:0,
        user_rates:[],
        reserved:false,
       

    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    componentDidMount() {
        Axios.get('http://localhost:8001/Trips_photos/'+this.props.id).then((response) => {


            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = this.arrayBufferToBase64(response.data[0].photo.data);

          this.setState({ photo: base64Flag + imageStr })
        //   console.log(this.state.photo)
        })

        Axios.get('http://localhost:8001/company_for_user/'+this.props.comp_mail).then((response) => {
          this.setState({ company: response.data[0] })
        //   console.log(this.state.company.comp_name)
        })
        Axios.get('http://localhost:8001/company/rates/'+this.props.comp_mail).then((response) => {
            this.setState({ stars: response.data[0].stars })
            // console.log("Stars"+this.state.stars)
          })

          Axios.get('http://localhost:8001/user_to_comp/rates/'+this.props.user_mail+"/"+this.props.comp_mail).then((response) => {
            this.setState({ user_rates: response.data[0] })
            // console.log(this.props.user_mail)
          })

          Axios.get('http://localhost:8001/reservation/'+this.props.id+"/"+this.props.user_mail).then((response) => {
            try{
          if(response.data[0].mail)
            this.setState({ reserved: true })
            // console.log(this.state.reserved)
        }
         catch{
            this.setState({ reserved: false })
            // console.log(this.state.reserved)
         }
           
          })

    }
handelShow=()=>{
    if(this.state.overlay=="d-none")
        {
            this.setState({overlay:"overlay"})
            this.setState({tripBackgroud:"Tripbackgroud"})
        }
    else
        {
            this.setState({overlay:"d-none"})
            this.setState({tripBackgroud:"d-none"})
        }

    // console.log(this.state.overlay)
}
    render() {

        return (
            <div>

           
            </div >
        )
    }

}