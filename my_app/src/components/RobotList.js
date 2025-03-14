import {useEffect, useState} from "react";
import "react-bootstrap";
import {render} from "react-dom";
import TopBanner from "./TopBanner";
import BottomBanner from "./BottomBanner";

const URL = "http://localhost:3001/robots";

export function RobotList() {

    const [currentRobot, setCurrentRobot] = useState(null);

    function getData(url) {
        return fetch(url)
            .then(response => response.json());
    }

    const clickRobot = (e) => {
        setCurrentRobot(e.target.value);
    }


    function updateTable(robotList) {
        const tbody = document.querySelector("tbody")
        tbody.innerHTML = "";

        robotList.forEach(robot => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="p-1">${robot.id}</td>
                <td class="p-1">${robot.nombre}</td>
                <td class="p-1">${robot.modelo}</td>
                <td class="p-1">${robot.empresaFabricante}</td>
            `;
            tbody.appendChild(row);
        });
    }

    getData(URL).then(data => {
        console.log(data);
        updateTable(data);
    });


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
                <tbody>
                </tbody>
            </table>
            <BottomBanner/>
        </>
    );
}