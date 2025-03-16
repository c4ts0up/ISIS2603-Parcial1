import './App.css';
import "react-bootstrap";
import { Authentication } from "./components/Authentication";
import { RobotList } from "./components/RobotList";
import {BrowserRouter, Route, Routes} from "react-router";
import {IntlProvider} from "react-intl";
import enMessages from "./locales/en.json";
import esMessages from "./locales/es.json";

const messages = {
    en: enMessages,
    es: esMessages
}

const language = navigator.language.startsWith("es") ? "es" : "en";

function App() {

    console.log(messages[language]);

    return (
        <IntlProvider locale={language} messages={messages[language]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Authentication />} />
                    <Route path="/robots" element={<RobotList />} />
                </Routes>
            </BrowserRouter>
        </IntlProvider>
    );
}

export default App;
