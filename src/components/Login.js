import React, { Component } from 'react'
import { Grid, Header, Form, Button, Segment, Message } from 'semantic-ui-react'

class Login extends Component {

    state={
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <Grid textAlign='center' style={{ marginTop: '6em'}} >
                <Grid.Column style={{maxWidth: 450}}>
                    <Header 
                        as='h2'
                        color='teal'
                        textAlign='center'
                        content='Log-in'
                    />
                    <Form size='large'>
                        <Segment>
                            <Form.Input 
                                fluid 
                                name='email'
                                icon='user' 
                                iconPosition='left' 
                                placeholder='Email address' 
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                name='password'
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <Button 
                                color='teal' 
                                fluid 
                                size='large'
                                onClick={this.handleSubmit}
                            >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        You don't have an account? <a href="/signup"> Sign Up</a>
                    </Message>
                    <Message>
                        Forgot your password? <a href="/reset_password"> Reset Password</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login