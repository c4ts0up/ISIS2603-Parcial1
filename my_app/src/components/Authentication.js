import React, {useRef, useState} from "react";
import {Button, Form} from "react-bootstrap";
import TopBanner from "./TopBanner";
import BottomBanner from "./BottomBanner";
import { useNavigate} from "react-router";

const URL = "http://localhost:3001/login";

export function Authentication() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const formRef = useRef(null);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    function postLogin(login, password) {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify({login, password}),
        })
            .then((response) => response.status);
    }


    const clickLogin = (e) => {
        postLogin(username, password)
            .then(responseCode => {
                // TODO: por qué siempre devuelve 401?
                console.log(responseCode);
                navigate("/robots");
                if (responseCode === 401) {
                    setWrongCredentials(false);
                } else {
                    setWrongCredentials(true);
                }
            });
    }
    const clickCancel = (e) => {
        setUsername(e.target.reset);
        setPassword(e.target.reset);
        setWrongCredentials(false);
        formRef.current.reset();
    }

    return (
        <div>
            <TopBanner/>
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

            <BottomBanner/>
        </div>
    );
}