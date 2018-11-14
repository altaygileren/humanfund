import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Resume from './Resume';
import Fade from 'react-reveal/Fade';

class Bio extends Component {
    state = {
        resume: [
            { title: "Writer & Producer", company: "Jerry", years: "1998" },
            { title: "CMO & CFO", company: "Costanza & Son", years: "1997" },
            { title: "Assistant to the Traveling Secretary", company: "New York Yankees", years: "1994-1997" },
            { title: "Sales Respresentative", company: "Sanalac", years: "1993" },
            { title: "Manuscript Editorial", company: "Pendant Publishing", years: "1991" },
            { title: "Operations Logistics Management", company: "Sids Parking Service", years: "1991" },
            { title: "Real Estate Developer", company: "Rick Barr Properties", years: "1989-1991" }
        ]
    }

    render() {
        return (
            <Fade bottom>
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} lg={6} className="bioStory">
                            <p>
                                A true Brooklyn native George Costanza, son of 
                                Frank and Estelle Costanza knows what it's like
                                growing up in the city that never sleeps. He is a 
                                true entrepeneur. He attended John F. Kennedy High School
                                in Long Island, NY. 
                                <br />
                                <br />
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum."
                                <br />
                                <br />
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum."
                            </p>
                        </Col>
                        <Col sm={12} lg={6}>
                            <img className="bioPic" src={"costanza.jpg"} />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <h2 className="thanksSubmit">
                            George Costanza's Resumè
                        </h2>
                        <Resume resume={this.state.resume}/>
                    </Row>
                </Grid>
            </div>
            </Fade>
        )
    }
}

export default Bio;
