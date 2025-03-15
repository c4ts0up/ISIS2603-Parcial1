import {useEffect, useState} from "react";
import "react-bootstrap";
import TopBanner from "./TopBanner";
import BottomBanner from "./BottomBanner";
import RobotCard from "./RobotCard";

const URL = "http://localhost:3001/robots";



export function RobotList() {

    const [currentRobot, setCurrentRobot] = useState(null);
    const [robotList, setRobotList] = useState([]);

    function getData(url) {
        return fetch(url)
            .then(response => response.json());
    }

    const clickRobot = (robot) => {
        setCurrentRobot(robot);
        console.log(`Robot ${robot.nombre} seleccionado`);
    }


    function tableData(robotList) {
        return robotList.map(robot => (
            <tr key={robot.id} onClick={() => clickRobot(robot)}>
                <td className="p-1">{robot.id}</td>
                <td className="p-1">{robot.nombre}</td>
                <td className="p-1">{robot.modelo}</td>
                <td className="p-1">{robot.empresaFabricante}</td>
            </tr>
        ));
    }

    useEffect(() => {
        getData(URL)
            .then(data => setRobotList(data));
    }, []);

    return (
        <>
            <TopBanner></TopBanner>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Empresa Fabricante</th>
                    </tr>
                </thead>
                <tbody>{tableData(robotList)}</tbody>
            </table>
            {currentRobot !== null ? (
                <RobotCard robot={currentRobot} />
            ) : (
                <> </>
            )}
            <BottomBanner/>

        </>
    );
}