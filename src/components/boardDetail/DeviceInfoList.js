import React from 'react'
import { Container, Segment, Grid } from 'semantic-ui-react'
import EachDeviceInfo from './EachDeviceInfo'
import SimpleMap from './SimpleMap'
import PropTypes from 'prop-types'

const DeviceInfoList = ({ deviceList }) => {

    return (
        <Container> 
            { deviceList.map((device, i) => {
                return (
                    <Segment.Group key={i} >
                        <Segment>{device[0].substr(0, device[0].indexOf('.'))}</Segment>
                        <Segment basic>
                            <Grid columns={2} stackable divided >
                                <Grid.Column>
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