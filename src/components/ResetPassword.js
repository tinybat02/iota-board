import React, { Component } from 'react'
import { Grid, Header, Form, Button, Segment} from 'semantic-ui-react'

class ResetPassword extends Component {

    state={
        email: ''
    }
    handleChange = (e) => {
        this.setState({ email: e.target.value })
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
                        content='Reset password'
                    />
                    <Form size='large'>
                        <Segment>
                            <Form.Input 
                                fluid 
                                name='email'
                                icon='mail outline' 
                                iconPosition='left' 
                                placeholder='Email address' 
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <Button 
                                color='teal' 
                                fluid 
                                size='large'
                                onClick={this.handleSubmit}
                            >
                                Reset my password
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default ResetPassword