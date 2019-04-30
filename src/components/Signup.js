import React, { Component } from 'react'
import { Grid, Header, Form, Button, Segment, Message } from 'semantic-ui-react'

class Signup extends Component {

    state={
        name: '',
        lastname: '',
        email: '',
        password: '',
        repeatpassword: ''
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
                        content='Sign Up'
                    />
                    <Form size='large'>
                        <Segment>
                            <Form.Input 
                                fluid 
                                name='name'
                                icon='address card outline' 
                                iconPosition='left' 
                                placeholder='Name' 
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                fluid 
                                name='lastname'
                                icon='address card outline' 
                                iconPosition='left' 
                                placeholder='Last name' 
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />
                            <Form.Input 
                                fluid 
                                name='email'
                                icon='mail outline' 
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
                            <Form.Input
                                fluid
                                name='repeatpassword'
                                icon='lock'
                                iconPosition='left'
                                placeholder='Repeat Password'
                                type='password'
                                value={this.state.repeatpassword}
                                onChange={this.handleChange}
                            />
                            <Button 
                                color='teal' 
                                fluid 
                                size='large'
                                onClick={this.handleSubmit}
                            >
                                Sign Up
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account ? <a href="/login"> Login</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Signup