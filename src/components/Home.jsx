import React, { Component } from 'react';
import Randomizer from 'react-randomizer';
import Bio from './Bio';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import CarouselComp from './Carousel';
import Fade from 'react-reveal/Fade';
import Thanks from './Thanks';
import Moda from './Moda';
const BASE_URL = 'http://localhost:3001/api';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            quotes: [
                "Why is nice bad? What kind of sick society are we living in when nice is bad?",
                "I love a good nap. Sometimes it's the only thing getting me out of bed in the morning",
                "Y'know there are tribes in Indonesia where if you keep your coat in somebody's house, the families go to war",
                "Articulate-me? I've never articulated anything, I'm completely incoherent",
                "Listen to the comeback. 'Oh yeah?' Well the jerk store called. They're running out of you!",
                "What am I scared of? I'm scared of the same thing that you are, everything",
                "This thing is like an onion. The more layers you peel the more it stinks"
            ],
            boxes: [
                { photo: 'teamhands.jpg', quote: 'TEAM WORK' }, { photo: 'classroom.jpg', quote: 'EDUCATION' }, { photo: 'cleanuptrash.jpg', quote: 'COMMUNITY' }
            ],
            first: '',
            last: '',
            emailadd: '',
            phonenum: '',
            formsubmitted: false,
            modalView: false,
            nlemails: '',
            emailPosted: false
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.emailSubmit = this.emailSubmit.bind(this)
    }

    emailList() {
        fetch(`${BASE_URL}/newsletters`, { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({
                nlemails: data
            }))
            .catch(err => err)
    }

    emailSubmit() {
        const body = {
            "newsletter": {
                "newsemail": this.state.nlemails,
            }
        }
        const init = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body)
        }
        fetch(`${BASE_URL}/newsletters`, init)
            .then(() => this.setState({
                emailPosted: true
            }))
            .then(() => this.fetchNewsletter())
            .catch(err => err.message)
    }

    submit() {
        const body = {
            "lead": {
                "firstname": this.state.first,
                "lastname": this.state.last,
                "email": this.state.emailadd,
                "phone": this.state.phonenum
            }
        }
        const init = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body)
        }
        fetch(`${BASE_URL}/leads`, init)
            .then(() => this.setState({
                formsubmitted: true,
                modalView: true
            }))
            .then(() => this.fetchUsers())
            .catch(err => err.message)
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount() {
        const quote = Randomizer.randomizeArray(this.state.quotes);
        this.setState({
            quotes: quote
        })
    }
    render() {
        const isEnabled =
            this.state.first.length > 0
            && this.state.last.length > 0
            && this.state.emailadd.length > 0
            && this.state.phonenum.length > 0;

        const newsLetterEnabled =
            this.state.nlemails.length > 0;

        return (
            <div>
                <Row>
                    <CarouselComp />
                    {
                        this.state.modalView ? <Moda /> : null
                    }
                </Row>
                <Fade bottom>
                    <Grid>

                            <Row className="formOrThanks">
                                <Col sm={12} lg={6}>

                                    {this.state.formsubmitted ? <Thanks /> :
                                        <div className="fillBox">
                                            <h3 className="thanksSubmit">Fill out the
                                                form to test the website & visit the
                                                Employee page
                                        </h3>
                                            <form>
                                                <input
                                                    type="text"
                                                    className="filloutForm"
                                                    name="first"
                                                    placeholder="First name"
                                                    value={this.state.first}
                                                    onChange={this.handleChange} />
                                                <br />
                                                <input
                                                    type="text"
                                                    className="filloutForm"
                                                    name="last"
                                                    placeholder="Last name"
                                                    value={this.state.last}
                                                    onChange={this.handleChange} />
                                                <br />
                                                <input
                                                    type="text"
                                                    className="filloutForm"
                                                    name="phonenum"
                                                    placeholder="Phone number"
                                                    value={this.state.phonenum}
                                                    onChange={this.handleChange} />
                                                <br />
                                                <input
                                                    type="text"
                                                    className="filloutForm"
                                                    name="emailadd"
                                                    placeholder="Email address"
                                                    value={this.state.emailadd}
                                                    onChange={this.handleChange} />
                                            </form>
                                            <button
                                                disabled={!isEnabled}
                                                className="formButton"
                                                onClick={this.submit}>Submit</button>
                                        </div>
                                    }
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <h3 className="thanksSubmit">
                                            Sign up using this form
                                            to receive more information regarding
                                            joining the
                                        <br />
                                            Human Fund - Money for
                                            People.
                                    </h3>
                                    </Row>
                                    <Row>
                                        <h3 className="thanksSubmit">
                                            A sizable donation can be made under you or your friends
                                            & loved ones named for the upcoming Festivus season.
                                    </h3>
                                    </Row>
                                </Col>
                            </Row>                        <div class="cd-fixed-bg cd-fixed-bg--1">
                        </div>
                    </Grid>

                </Fade>
                <Fade bottom>
                    <Row>
                        <div className="quoteBox">
                            <p className="quote">{this.state.quotes[0]}</p>
                            <p className="gcQuote">George Costanza Life Quotes</p>
                        </div>
                    </Row>
                </Fade>
                <Fade bottom>
                    <Grid>
                        <Row>
                            <div className="boxesSection">
                                {
                                    this.state.boxes.map((box, index) => {
                                        return (
                                            <Col sm={12} lg={4}>
                                                <img className="pictureBoxes" src={`${box.photo}`} alt={`${box.photo}`} />
                                                <p className="boxQuote">{box.quote}</p>
                                                <button className="learnMoreButton">LEARN MORE</button>
                                            </Col>
                                        )
                                    })
                                }
                            </div>
                        </Row>
                        <Row>
                            <Col sm={12} lg={12}>
                                <div className="stayConnected">

                                    {this.state.emailPosted ? <Thanks /> :
                                        <div>
                                            <h3 className="thanksSubmit">
                                                Fill out the Newsletter so you can try it out on the employee page
                                            </h3>
                                            <form>
                                                <input
                                                    type="text"
                                                    name="nlemails"
                                                    value={this.state.nlemails}
                                                    onChange={this.handleChange}
                                                    className="newsLetterInput"
                                                    placeholder="STAY CONNECTED WITH OUR NEWSLETTER" type="text">
                                                </input>
                                            </form>
                                            <button
                                                disabled={!newsLetterEnabled}
                                                onClick={this.emailSubmit}
                                                className="submitNewsletterInput">SUBMIT
                                            </button>
                                        </div>
                                    }
                                </div>
                                <div class="cd-fixed-bg cd-fixed-bg--2">
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Fade>
            </div >
        )
    }
}

export default Home;