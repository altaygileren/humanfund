import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const Resume = (props) => {
    return (
        <Fade bottom>
        <div>
            <Grid>
                <Row className="show-grid resume">
                    {props.resume.map((georgecostanza) => {
                        return (
                            <Col sm={12} lg={12}>
                                <p className="resumeTitle"><strong>{georgecostanza.title}</strong></p>
                                <p className="resumeComp">{georgecostanza.company} | <span className="resumeYears">{georgecostanza.years}</span></p>
                                <hr />
                            </Col>
                        )
                    })}
                </Row>
            </Grid>
        </div>
        </Fade>
    )
}

export default Resume