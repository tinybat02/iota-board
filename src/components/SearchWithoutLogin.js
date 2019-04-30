import React, { Component } from 'react'
import { Grid, Header, Form, Button, Segment} from 'semantic-ui-react'
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
                            as='h2'
                            color='teal'
                            textAlign='center'
                            content='Enter the bundle'
                        />
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
                    {this.state.loading ? <Segment>Loading</Segment> :
                        <div>
                            {
                                this.state.error ? 
                                <Segment>{'Error ' + this.state.message}</Segment>
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