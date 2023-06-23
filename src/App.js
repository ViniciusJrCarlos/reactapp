import React, { useState, useEffect } from "react";
import "rbx/index.css";
import { Button, Field, Control, Navbar } from "rbx";


function App() {

    return (


    /*

    const App = () => {

    const [usuarios, setUsuarios] = useState(
        ["joao", "maria", "jose"])
        
        useEffect(() =>{

            setTimeout(() => {

                setUsuarios([...usuarios, "joaquim"]);

            }, 5000);

        }, []);
        
    return (

        <div className="App">
            <h1>Hello APP</h1>
            
           

            {usuarios.map((item) => (
            <p>{item}</p>
            
            ))}
        </div>


    );

    }

    export default App;

    */

    <Navbar>
        <Navbar.Brand>
            <Navbar.Item href="#">
            <img
                src="https://bulma.io/images/bulma-logo.png"
                alt=""
                role="presentation"
                width="112"
                height="28"
            />
            </Navbar.Item>
            <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
            <Navbar.Segment align="start">
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Documentation</Navbar.Item>

            <Navbar.Item dropdown>
                <Navbar.Link>More</Navbar.Link>
                <Navbar.Dropdown>
                <Navbar.Item>About</Navbar.Item>
                <Navbar.Item>Jobs</Navbar.Item>
                <Navbar.Item>Contact</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Report an issue</Navbar.Item>
                </Navbar.Dropdown>
            </Navbar.Item>
            </Navbar.Segment>

            <Navbar.Segment align="end">
            <Navbar.Item>
                <Button.Group>
                <Button color="primary">
                    <strong>Sign up</strong>
                </Button>
                <Button color="light">Log in</Button>
                </Button.Group>
            </Navbar.Item>
            </Navbar.Segment>
        </Navbar.Menu>
</Navbar>

);

};
export default App;