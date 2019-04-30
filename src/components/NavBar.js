import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Responsive, Segment, Container, Menu, Button } from 'semantic-ui-react'

const NavBar = (props) => {
    const { location } = props

    return (
        <Responsive>
            <Segment
                inverted
                textAlign='center'       
                style={{ minHeight: 50, padding: '0.5em 0em' }}
                vertical
            >
                <Menu
                    size='large'
                    inverted
                    pointing 
                    secondary
                >
                    <Container>
                        <Menu.Item as={Link} name='Home' active={location.pathname==='/'} to='/'/>
                        <Menu.Item as={Link} name='Transaction' active={location.pathname==='/transactions'} to='/transactions' />
                        <Menu.Item as={Link} name='Search' active={location.pathname==='/search'} to='/search' />
                        <Menu.Item position='right'>
                            <Button as={Link} inverted to='/login' style={{ marginRight: '0.5em' }}>Login</Button>
                            <Button as={Link} name='sign Up' inverted to='/signup'>Sign Up</Button>
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>
        </Responsive>
    )
}

export default withRouter(NavBar)
