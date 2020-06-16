import React from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "./CardList.js";
import HipNav from "./HipNav.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    body = {
        marginTop: "2em",
    }

    render() {
        return (
            <div>
                <HipNav />
                <Container style={this.body}>
                    <Row>
                        <Col sm={8}>
                            <CardList bold={true} headerText="Hottest this month:" />
                        </Col>
                        <Col sm={4}>
                            <CardList headerText="Hottest artists this month:" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};