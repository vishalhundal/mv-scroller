import React from "react";
import VideoCard from "./VideoCard.js";

export default class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <h5>{this.props.headerText}</h5>
            </div>
        );
    };
};
