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
                console.log(robotDetails);
                setRobotImage(robotDetails.imagen
                    .replace("github.com", "raw.githubusercontent.com")
                    .replace("blob/", "")
                );
            });
    }, [props.robot.id]);

    return (
        <Card className={"robot-card"}>
            <Card.Title className={"robot-card-title"}>{props.robot.nombre}</Card.Title>
            <Card.Img src={robotImage} alt={props.robot.id} className={"robot-card-img"} />
            <Card.Body>
                <Card.Text className={"robot-card-text"}><b>→ Año de Fabricación:</b> {props.robot.añoFabricacion}</Card.Text>
                <Card.Text className={"robot-card-text"}><b>→ Capacidad de Procesamiento:</b> {props.robot.capacidadProcesamiento}</Card.Text>
                <Card.Text className={"robot-card-text"}><b>→ Humor:</b> {props.robot.humor}</Card.Text>
            </Card.Body>
        </Card>
    )
}

RobotCard.propTypes = {robot: PropTypes.any};