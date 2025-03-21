import React, {useRef, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TopBanner from "./TopBanner";
import BottomBanner from "./BottomBanner";
import { useNavigate} from "react-router";
import "../index.css";
import {useIntl} from "react-intl";

const URL = "http://localhost:3001/login";

export function Authentication() {
    const { messages } = useIntl();
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
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({login, password}),
        })
            .then((response) => {
                console.log(response);
                return response.status
            });
    }


    const clickLogin = (e) => {
        postLogin(username, password)
            .then(responseCode => {
                if (responseCode === 200) {
                    setWrongCredentials(false);
                    navigate("/robots");
                } else {
                    setWrongCredentials(true);
                }
            });
    }
    const clickCancel = (e) => {
        setUsername('');
        setPassword('');
        setWrongCredentials(false);
        formRef.current.reset();
    }

    return (
        <div>
            <TopBanner/>

            <Container>
                <Row className={"mt-3 mb-4"}>
                    <h2 className={"text-center fw-bold"}>{messages.titles.login}</h2>
                </Row>
                <Row className={"justify-content-center"}>
                    <Col md={4}>
                        <Form ref={formRef}>
                            <Form.Group className={"mb-2"} controlId="formBasicEmail">
                                <Form.Label className={"fw-bold"}>{messages.auth.login}</Form.Label>
                                <Form.Control className={"auth-input px-4"} type="email" onChange={handleUsernameChange}/>
                            </Form.Group>

                            <Form.Group className={"mb-2"} controlId="formBasicPassword">
                                <Form.Label className={"fw-bold"}>{messages.auth.password}</Form.Label>
                                <Form.Control className={"auth-input px-4"} type="password" onChange={handlePasswordChange} />
                            </Form.Group>

                            <Row className={"justify-content-between"}>
                                <Col md={6}>
                                    <Button className="auth-login-button w-100" onClick={clickLogin}>{messages.auth.loginButton}</Button>
                                </Col>
                                <Col md={6}>
                                    <Button className="auth-cancel-button w-100" onClick={clickCancel}>{messages.auth.cancelButton}</Button>
                                </Col>
                            </Row>
                            <Row className={"mt-3 fw-bold text-danger"}>
                            {
                                wrongCredentials &&
                                <Form.Label>{messages.auth.wrongLogin}</Form.Label>
                            }
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <BottomBanner/>
        </div>
    );
}