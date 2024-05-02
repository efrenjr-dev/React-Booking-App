import {Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Banner({bannerProp}){
    return (<>
    <Row  >
        <Col className='bg-light p-5 rounded-lg m-3'>
            <h1 className='display-4'>{bannerProp.title}</h1>
            <p className='lead'>{bannerProp.header}</p>
            <p>{bannerProp.paragraph} </p>
            <Link className='btn btn-primary'>{bannerProp.buttonCallToAction}</Link>
        </Col>
    </Row>
    </>)
}