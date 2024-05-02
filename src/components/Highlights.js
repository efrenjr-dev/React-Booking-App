import {Row, Col, Card, CardBody, CardTitle, CardText} from 'react-bootstrap';

export default function Highlights(){
    return (
        <>
        <Row>
            <Col md={4}>
                <Card className="cardHighlights">
                    <CardBody>
                        <CardTitle>
                            <h2>Learn from Home</h2>
                        </CardTitle>
                        <CardText>
                            Dolore amet Lorem occaecat magna ullamco duis anim.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="cardHighlights">
                    <CardBody>
                        <CardTitle>
                            <h2>Study Now, Pay Later</h2>
                        </CardTitle>
                        <CardText>
                            Sit anim ullamco voluptate nulla Lorem.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="cardHighlights">
                    <CardBody>
                        <CardTitle>
                            <h2>Be Part of Our Community</h2>
                        </CardTitle>
                        <CardText>
                            Ut labore id amet tempor sit amet dolore proident laboris aute labore incididunt dolor laboris.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </>
    )
}