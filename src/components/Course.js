import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function Course({courseProp}){

    return (
        <>
        <Card className="cardCourse">
            <CardBody>
                <CardTitle>{courseProp.name}</CardTitle>
                <CardSubtitle>Description:</CardSubtitle>
                <CardText>{courseProp.description}</CardText>
                <CardSubtitle>Price:</CardSubtitle>
                <CardText>PHP {courseProp.price}</CardText>
                <Link className="btn btn-primary" >View Course</Link>
            </CardBody>
        </Card>
        </>
    )
}