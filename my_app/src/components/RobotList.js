import {useEffect, useState} from "react";
import "react-bootstrap";
import {render} from "react-dom";

export function RobotList() {

    const [currentRobot, setCurrentRobot] = useState(null);

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


    const robotList = [
        {
            "id": 1,
            "nombre": "Pedrito",
            "modelo": "PR-001",
            "empresaFabricante": "Robotico Corp"
        },
        {
            "id": 2,
            "nombre": "IronChef",
            "modelo": "IC-3000",
            "empresaFabricante": "RoboCocina Inc."
        }
    ]

    updateTable(robotList);


    return (
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
    );
}