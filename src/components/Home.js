import React from 'react'
import { Link } from 'react-router-dom'
import { Responsive, Segment, Container, Header, Button, Icon } from 'semantic-ui-react'

const Home = (props) => {
  return (
    <Responsive>
        <Segment inverted style={{
            position: 'absolute',
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 0
        }}
        >
            <Container 
                text 
                textAlign='center'
            >
                <Header
                    as='h1'
                    content='Searching in IOTA tangle'
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em'
                    }}
                />
                <Header
                    as='h2'
                    content='Getting sensor data from IOTA network'
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em'
                    }}
                />
                    <Button as={Link} to='/transaction' color='teal' size='huge'>
                        Get Started
                        <Icon name='right arrow' />
                    </Button>
                    <Button as={Link} to='/search' color='teal' size='huge'>Search without login</Button>
            </Container>
        </Segment>
    </Responsive>
  )
}

export default Home
