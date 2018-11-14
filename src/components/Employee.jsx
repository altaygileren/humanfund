import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Col, Row } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import SearchInput, { createFilter } from 'react-search-input';
const BASE_URL = 'http://localhost:3001/api';
const KEYS_TO_FILTERS = ['email']
const KEYS_TO_LEADS = ['firstname']


class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            newsletteremail: [],
            searchTerm: '',
            isLoggedIn: false,
            email: '',
            password: '',
            searchLead: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
        this.searchLeads = this.searchLeads.bind(this)
        this.fetchUsers = this.fetchUsers.bind(this)
        this.fetchNewsletter = this.fetchNewsletter.bind(this)
        this.delete = this.delete.bind(this)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.logout = this.logout.bind(this)
    }

    logout() {
        localStorage.removeItem("jwt")
        this.setState({
            isLoggedIn: false
        })
    }


    login() {
        const url = `${BASE_URL}/user_token`;
        const body = { "auth": { "email": this.state.email, "password": this.state.password } }
        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(body),
        }
        fetch(url, init)
            .then(res => res.json())
            .then(res => localStorage.setItem("jwt", res.jwt))
            .then(() => this.setState({
                isLoggedIn: true,
            }))
            .catch(err => console.log(err))
    }

    isLoggedIn() {
        const res = !!(localStorage.getItem("jwt"));
        this.setState({
            isLoggedIn: res,
        })
        return res
    }


    fetchUsers() {
        fetch(`${BASE_URL}/leads`, { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({
                users: data
            }))
            .catch(err => err)
    }

    fetchNewsletter() {
        fetch(`${BASE_URL}/newsletters`, { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({
                newsletteremail: data
            }))
            .catch(err => err)
    }

    delete(id) {
        const init = {
            method: 'DELETE',
            mode: 'cors',
        }
        fetch(`${BASE_URL}/leads/${id}`, init)
            .then(() => this.fetchUsers())
            .catch(err => err)
    }

    deleteNewsletter(id) {
        const init = {
            method: 'DELETE',
            mode: 'cors',
        }
        fetch(`${BASE_URL}/newsletters/${id}`, init)
            .then(() => this.fetchNewsletter())
            .catch(err => err)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.isLoggedIn()
        this.fetchUsers()
        this.fetchNewsletter()
        this.login()
    }



    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    searchLeads(term) {
        this.setState({ searchLead: term})
    }


    render() {
        const filteredEmails = this.state.newsletteremail.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        const filteredLeads = this.state.users.filter(createFilter(this.state.searchLead, KEYS_TO_FILTERS))


        return (
            <Fade bottom>
                <div>
                    { !this.state.isLoggedIn ?
                        <div>
                            <h2 className="empHeader">If you're a Human Fund employee please log in here</h2>
                            <div className="loginForm">
                                <h3 className="thanksSubmit">Employee Log in</h3>
                                <h5><em>To login use hello@world.com and password.. just don't tell anyone</em></h5>
                                <form>
                                    <input
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email.value}
                                        className="inputStyle" type="text" placeholder="username" />
                                    <br />
                                    <br />
                                    <input
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password.value}
                                        className="inputStyle" type="password" placeholder="password" />
                                </form>
                                <br />
                                <br />
                                <button
                                    onClick={this.login}
                                    className="buttonStyle">Submit</button>
                            </div>
                        </div>
                        :
                        <div>
                            <Grid>
                                <Row>
                                    <div className="logoutBox">
                                        <button
                                            className="logoutButton"
                                            onClick={this.logout}>Log out</button>
                                    </div>
                                </Row>
                                <Row>
                                    <h3>Leads</h3>
                                    <SearchInput className="search-input" onChange={this.searchLeads} />
                                    {filteredLeads.map(lead => {
                                        return (
                                            <Col lg={3}>
                                                <Collapsible
                                                    className="Collapsible"
                                                    transitionTime={90}
                                                    trigger={`${lead.firstname.charAt(0).toUpperCase() + lead.firstname.slice(1)} ${lead.lastname.charAt(0).toUpperCase() + lead.lastname.slice(1)}`} >
                                                    <p key={lead.id}>
                                                        Email: <span className="userInfo">{lead.email}</span>
                                                        <br />
                                                        Phone: <span className="userInfo">{lead.phone}</span>
                                                        <br />
                                                        <button onClick={() => this.delete(lead.id)}>Delete</button>
                                                    </p>
                                                </Collapsible>
                                            </Col>
                                        )
                                    })}
                                </Row>
                                <div>
                                    <hr />
                                </div>
                                <Row>
                                    <h3>Newsletter emails</h3>
                                    <SearchInput className="search-input" onChange={this.searchUpdated} />
                                    {filteredEmails.map(email => {
                                        return (
                                            <Col lg={3}>
                                                <Collapsible
                                                    className="Collapsible"
                                                    transitionTime={90}
                                                    trigger={`${email.newsemail}`} >
                                                    <p key={email.id}
                                                        className="Collapsible">
                                                        <button>
                                                            <a href={'mailto:' + email.newsemail}>Email</a>
                                                        </button>
                                                        <button onClick={() => this.deleteNewsletter(email.id)}>Delete</button>
                                                    </p>
                                                </Collapsible>
                                            </Col>

                                        )
                                    })}
                                </Row>
                            </Grid>
                        </div>
                    }
                </div>
            </Fade>
        )
    }
}

export default Employee;