import React, { Component } from 'react'
import { Grid, Header, Icon, Form, Button, Segment, Dimmer, Loader } from 'semantic-ui-react'
import DeviceInfoList from './boardDetail/DeviceInfoList'
import fetchFromIota from '../../utils/IotaAPI'

class SearchWithoutLogin extends Component {

    state={
        bundle: '',
        message: [],
        error: null,
        loading: false
    }

    handleChange = (e) => {
        this.setState({ bundle: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        fetchFromIota(this.state.bundle).then(result => {
            console.log('From fontend ',result)
            console.log('From frontend err msg ')
            if (result.error) {
                this.setState({
                    ...this.state,
                    loading: false,
                    error: true,
                    message: result.message
                })
            } else {
                this.setState({
                    ...this.state,
                    loading: false,
                    error: false,
                    message: result.message
                })
            }
        })
    }

    render() {
        return (
            <Grid textAlign='center' style={{ marginTop: '2em'}} >
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header 
                            icon
                            color='teal'
                            textAlign='center'
                        >
                            <Icon name='search' size='massive'/>
                            Search for bundle
                        </Header>
                        <Form size='large'>
                            <Segment>
                                <Form.Input 
                                    fluid 
                                    name='bundle'
                                    icon='search'  
                                    placeholder='Enter your bundle' 
                                    value={this.state.bundle}
                                    onChange={this.handleChange}
                                />
                                <Button 
                                    color='teal' 
                                    fluid 
                                    size='large'
                                    onClick={this.handleSubmit}
                                >
                                    Fetch Data
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>   
                    {this.state.loading 
                        ? <Loader active inline='centered' size='huge'>Loading</Loader>
                        : <div>
                            {
                                this.state.error ? 
                                <Segment>{this.state.message}</Segment>
                                : <DeviceInfoList deviceList={this.state.message} />
                            }
                        </div>
                    }
                </Grid.Row>
            </Grid>
        )
    }
}

export default SearchWithoutLogin