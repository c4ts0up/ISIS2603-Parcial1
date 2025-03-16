import {Row} from "react-bootstrap";
import {useIntl} from "react-intl";

export default function BottomBanner() {

    const { messages } = useIntl();

    return (
        <Row className={"contact-banner"} align="center" justify="center">
            <p>{messages.titles.contact}: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </Row>
    );
}