import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Card>
                <Card.Body>This is some filler text.</Card.Body>
            </Card>
        );
    };
};