import React from 'react'
import { Container, Segment, Grid, Label } from 'semantic-ui-react'
import EachDeviceInfo from './EachDeviceInfo'
import SimpleMap from './SimpleMap'
import PropTypes from 'prop-types'

const DeviceInfoList = ({ deviceList }) => {

    return (
        <Container> 
            { deviceList.map((device, i) => {
                return (
                    <Segment.Group key={i} >
                        <Segment>
                            <Label as='a' color='teal' ribbon>{device[0].substr(0, device[0].indexOf('.'))}</Label>
                        </Segment>
                        <Segment basic>
                            <Grid columns={2} stackable divided >
                                <Grid.Column verticalAlign='middle'>
                                    <EachDeviceInfo deviceData={device[2]} />
                                </Grid.Column>
                                <Grid.Column >
                                    <SimpleMap coordination={[device[2].lat, device[2].lng]} />
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Segment.Group>
                )
            }) }
        </Container>
    )
}

DeviceInfoList.propTypes = {
    deviceList: PropTypes.arrayOf(PropTypes.array).isRequired
}
export default DeviceInfoList

//<Segment>{device[0].substr(0, device[0].indexOf('.'))}</Segment>