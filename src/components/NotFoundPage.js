import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Button } from 'semantic-ui-react'

const NotFoundPage = () => {
  return (
      <Container text textAlign='center'>
        <Segment style={{marginTop: '10em', background: 'Ivory'}}>
            <Header
                as='h1'
                content='404'
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '2em'
                }}
            />
            <Header 
                as='h2'
                content='Page not found'
            />
            <Segment.Inline>
                <Button as={Link} to='/' color='teal' size='huge'>Back Home</Button>
            </Segment.Inline>
        </Segment>
    </Container>
  )
}

export default NotFoundPage
