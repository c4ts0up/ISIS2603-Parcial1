import banner from "../banner.png";
import {Row} from "react-bootstrap";

export default function TopBanner() {
    return (
        <Row align="center">
            <h1>Adopta un Robot con Robot Lovers!</h1>
            <img className="banner" src={banner} alt="banner"/>
        </Row>
    );
}