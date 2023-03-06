import notebook from '../notebook.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Courses = () =>{
    return(
        <div>
            <div className="courses-title">
               <div> Online Courses</div>
            </div>
            <div className="courses-part">
                <div className="course">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={notebook} />
                        <Card.Body>
                            <Card.Title>VOCABS</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis.
                            </Card.Text>
                            <Button className='sm-button' variant="primary" size="sm">browse</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="course">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={notebook} />
                        <Card.Body>
                            <Card.Title>VOCABS</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis.
                            </Card.Text>
                            <Button className='sm-button' variant="primary" size="sm">browse</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="course">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={notebook} />
                        <Card.Body>
                            <Card.Title>VOCABS</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis.
                            </Card.Text>
                            <Button className='sm-button' variant="primary" size="sm">browse</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Courses