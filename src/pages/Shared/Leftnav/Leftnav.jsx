import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/editorsInsight1.png'


const Leftnav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dragon-news-server-4gafy97ra-rifat-rizwans-projects.http://localhost:5000/.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h3>All Categories</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    ><Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link></p>)
                }
            </div>
            <Row lg={1} className="g-4 ">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row lg={1} className="g-4 mt-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row lg={1} className="g-4 mt-4">

                <Col >
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Leftnav;