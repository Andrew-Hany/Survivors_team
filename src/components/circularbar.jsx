import React, { Component } from 'react';

class progress extends Component {

  state = {
    onnav: false
  }

  render() {
    return (


    <div className="container prog" >
            <div className=" mb-3 ">
                <h2 className="m-4">weekly Goal</h2>
                    <div className="c100 p5 green big" >
                    <span>{80}%</span>
                    </div>
                    <p className="subtitles">Great you doing very well, you are almost done</p>
            </div>
      </div>
    );

  }

}
export default progress