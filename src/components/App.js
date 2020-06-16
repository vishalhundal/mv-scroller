import React from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "./CardList.js";
import HipNav from "./HipNav.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    body = {
        marginTop: "2em"
    }

    render() {
        return (
            <div>
                <HipNav />
                <Container style={this.body}>
                    <CardList headerText="Hottest this month:"/>
                </Container>
            </div>
        );
    };
};