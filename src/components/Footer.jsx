import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <Row>
        <Fade bottom>
            <div className="foot">
                <div className="contactFooter">
                    <Col sm={12} lg={6}>
                        Connect with us by calling (555) 555-5555
                </Col>
                    <Col sm={12} lg={6}>
                        <i className="conIcon fab fa-facebook"></i>
                        <i className="conIcon fab fa-twitter-square"></i>
                        <i className="conIcon fab fa-instagram"></i>
                        <i className="conIcon fab fa-youtube-square"></i>
                    </Col>
                </div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12} lg={3}>
                            <p className="footerHeader">About</p>
                            <ul className="footerList">
                                <li>Company</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Statement</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={12} lg={3}>
                            <p className="footerHeader">Stay Connected</p>
                            <ul className="footerList">
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Google</li>
                                <li>YouTube</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={12} lg={3}>
                            <p className="footerHeader">Other</p>
                            <ul className="footerList">
                                <li>Talk to us</li>
                                <li>Newsroom</li>
                                <li>Careers</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={12} lg={3}>
                            <p className="footerHeader">Built with</p>
                            <ul className="footerList">
                                <li>React</li>
                                <li>Ruby On Rails</li>
                                <li>React-Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Fade>
        </Row>
    )
}

export default Footer;