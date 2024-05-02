import { Button, Form, FormControl, FormGroup, FormLabel, Row, Col } from "react-bootstrap";


export default function Login() {
    return (
        <>
            <h1 className="text-center">Login</h1>
            <Form>
                <FormGroup as={Row} controlId="userEmail" className="mb-3">
                    <FormLabel column sm="2">Email</FormLabel>
                    <Col sm={10}>
                    <FormControl
                        
                        type="email"
                        placeholder="Enter Email"
                        required
                    />
                    </Col>
                </FormGroup>
                <FormGroup as={Row} controlId="userPassword" className="mb-3">
                    <Form.Label column sm="2">Password</Form.Label>
                    <Col sm={10}>
                    <FormControl
                        type="password"
                        placeholder="Enter Password"
                        required
                    />
                    </Col>
                </FormGroup>
                <Button >Submit</Button>
            </Form>
        </>
    );
}
