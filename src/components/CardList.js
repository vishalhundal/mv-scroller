import React from "react";
import VideoCard from "./VideoCard.js";

export default class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        if (this.props.bold) {
            var heading = <h5>{this.props.headerText}</h5>;
        } else {
            heading = <div>{this.props.headerText}</div>;
        };

        return (
            <div>
                {heading}
                <VideoCard />
            </div>
        );
    };
};
