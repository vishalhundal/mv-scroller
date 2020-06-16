import React from "react";
import logo from "../static/logo.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCard from "./VideoCard.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    loginButton = {
        backgroundColor: "white",
        width: "5.4em",
        marginLeft: ".6em"
    }

    signUpButton = {
        backgroundColor: "#e9730f",
        width: "5.4em",
        margin: "1em",
    }
    
    navbarStyle = {
        backgroundColor: "white",
        borderBottomStyle: "solid",
        borderColor: "#d1d1d1",
        borderWidth: "2px"
    }

    body = {
        marginTop: "2em"
    }

    render() {
        return (
            <div>
                <Navbar style={this.navbarStyle} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="HipHopper Logo" width="200" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline className="ml-auto">
                                <FormControl type="text" placeholder="Search for hip music/artists..." className="mr-sm-2" />
                            </Form>
                            <Nav >
                                <Nav.Link href="#home">Upload</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                            </Nav>
                            <Button style={this.loginButton} variant="outline-dark" size="sm">LOGIN</Button>
                            <Button style={this.signUpButton} variant="outline-light" size="sm">SIGN UP</Button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container style={this.body}>
                    <VideoCard/>
                </Container>
            </div>
        );
    };
};