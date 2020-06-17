import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import VideoThumbnail from "../static/VideoThumbnail.jpg";
import Row from "react-bootstrap/Row";

export default class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    imageStyle = {
        width: "16em",
    };
    
    vidInfoStyle = {
        paddingLeft: "1em",

    };

    render() {
        return (
            <Card>
                <Card.Body>
                    <Row>
                        <Image style={this.imageStyle} src={VideoThumbnail} thumbnail />
                        <div style={this.vidInfoStyle}>
                            <span style={{fontWeight:"bold"}}>Random Music Video - Misc. Upcoming Artist </span>
                            <br />
                            <span style={{color:"#757575"}}>New York City</span>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        );
    };
};