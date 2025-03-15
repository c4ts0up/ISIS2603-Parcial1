import * as PropTypes from "prop-types";
import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";

const URL = "http://localhost:3001/robots";


export default function RobotCard(props) {

    console.log("Robot actualizado");

    return (
        <Card>
            <Card.Title>{props.robot.nombre}</Card.Title>
            <Card.Body>
                <Card.Text>Año de Fabricación: ${props.robot.añoFabricacion}</Card.Text>
                <Card.Text>Capacidad de Procesamiento: ${props.robot.capacidadProcesamiento}</Card.Text>
                <Card.Text>Humor: ${props.robot.humor}</Card.Text>
            </Card.Body>
        </Card>
    )
}

RobotCard.propTypes = {robot: PropTypes.any};