import React from "react";
import VideoCard from "./VideoCard.js";
import Row from "react-bootstrap/Row";

export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    headingStyle = {
        paddingLeft: "1em"
    };

    render() {
        if (this.props.bold) {
            var heading = <h5 style={this.headingStyle}>{this.props.headerText}</h5>;
        } else {
            heading = <div style={this.headingStyle}>{this.props.headerText}</div>;
        };

        return (
            <div>
                <Row>
                    {heading}
                </Row>
                <VideoCard />
            </div>
        );
    };
};
