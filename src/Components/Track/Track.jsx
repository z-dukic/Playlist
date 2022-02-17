import React from "react";
import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props);
        
        this.addTrack = this.addTrack.bind(this);
    }

    renderAction(){
        if(this.props.isRemoval){
            return <button className="track-action">-</button>
        }else{
            return <button className="trackAction" onClick={this.addTrack}>+</button>
        }

    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>track artist | track album</p>
                </div>
                {this.renderAction}
            </div>


        );



    }


}

export default Track;