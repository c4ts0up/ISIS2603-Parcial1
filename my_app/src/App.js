import React, {useRef, useState} from 'react';
import banner from './banner.png';
import './App.css';
import "react-bootstrap";
import {Button, Form} from "react-bootstrap";

function Authentication() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const formRef = useRef(null);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const clickLogin = (e) => {
        if (username !== password) {
            setWrongCredentials(true);
        } else {
            setWrongCredentials(false);
            // TODO: redirect to list
        }
    }
    const clickCancel = (e) => {
        setUsername(e.target.reset);
        setPassword(e.target.reset);
        setWrongCredentials(false);
        formRef.current.reset();
    }

    return (
        <div>
            <h2>Inicio de sesión</h2>

            <Form ref={formRef}>
                <Form.Group className="mb-3" cmntrolId="formBasicEmail">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="email" onChange={handleUsernameChange}/>
                </Form.Group>

                <Form.Group className="mb-3" cmntrolId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" onChange={handlePasswordChange} />
                </Form.Group>

                <Button variant="primary" onClick={clickLogin}>Ingresar</Button>
                <Button variant="primary" onClick={clickCancel}>Cancelar</Button>

                {
                    wrongCredentials &&
                    <Form.Label>Error de autenticación. Revise sus credenciales</Form.Label>
                }
            </Form>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <h1>Adopta un Robot con Robot Lovers!</h1>
        <img className="banner" src={banner} alt="banner" />
        <Authentication></Authentication>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
    </div>
  );
}

export default App;
