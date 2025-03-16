import banner from "../banner.jpg";
import {Row} from "react-bootstrap";
import "../index.css";

export default function TopBanner() {
    return (
        <>
            <Row align="center">
                <h1 className={"title text-shadow"}>Adopta un Robot con Robot Lovers!</h1>
                <hr className="my-4 border border-secondary upper-break"/>
                <img className="banner-img" src={banner} alt="banner"/>
                <hr className="my-4 border border-secondary lower-break"/>
            </Row>
        </>
    );
}