import './App.css';
import "react-bootstrap";
import { Authentication } from "./components/Authentication";
import { RobotList } from "./components/RobotList";
import {BrowserRouter, Route, Routes} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/robots" element={<RobotList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
