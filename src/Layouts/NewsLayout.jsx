import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftnav from '../pages/Shared/Leftnav/Leftnav';
import Rightnav from '../pages/Shared/Rightnav/Rightnav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>

                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><Rightnav></Rightnav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;