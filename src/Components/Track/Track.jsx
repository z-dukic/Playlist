import React from "react";
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="trackAction" onClick={this.addTrack}>+</button>
        }
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