import banner from "../banner.jpg";
import {Row} from "react-bootstrap";
import "../index.css";
import {useIntl} from "react-intl";

export default function TopBanner() {

    const { messages } = useIntl();

    return (
        <>
            <Row align="center">
                <h1 className={"title text-shadow"}>{messages.titles.mainTitle}</h1>
                <hr className="my-4 border border-secondary upper-break"/>
                <img className="banner-img" src={banner} alt="banner"/>
                <hr className="my-4 border border-secondary lower-break"/>
            </Row>
        </>
    );
}