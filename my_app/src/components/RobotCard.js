import * as PropTypes from "prop-types";
import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";

const URL = "http://localhost:3001/robots";


export default function RobotCard(props) {

    const [robotImage, setRobotImage] = useState(null);

    function getRobotDetails(url, robotId) {
        return fetch(`${url}/${robotId}`, {})
            .then(response => response.json())
    }

    useEffect(() => {
        getRobotDetails(URL, props.robot.id)
            .then((robotDetails) => {
                setRobotImage(robotDetails.imagen
                    .replace("github.com", "raw.githubusercontent.com")
                    .replace("blob/", "")
                );
            });
    }, [props.robot.id]);

    return (
        <Card>
            <Card.Title>{props.robot.nombre}</Card.Title>
            <Card.Img src={robotImage} alt={props.robot.id} className="rounded" />
            <Card.Body>
                <Card.Text>Año de Fabricación: {props.robot.añoFabricacion}</Card.Text>
                <Card.Text>Capacidad de Procesamiento: {props.robot.capacidadProcesamiento}</Card.Text>
                <Card.Text>Humor: {props.robot.humor}</Card.Text>
            </Card.Body>
        </Card>
    )
}

RobotCard.propTypes = {robot: PropTypes.any};