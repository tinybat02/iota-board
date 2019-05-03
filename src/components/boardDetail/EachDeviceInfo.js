import React from 'react'
import { List, Segment, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const EachDeviceInfo = ({ deviceData }) => {
  return (
    <Segment.Group>
      <Segment>{'MAC Address ' + deviceData.deviceMacAddress}</Segment>
      <Segment>{'Timestamp ' + deviceData.timestamp}</Segment>
      <Segment>
        {deviceData.wifiAPDetailsArrayList.map(wifi => {
          return (
            <div key={wifi.macAddress}>
              <List>
                <List.Item>{'Frequency ' + wifi.frequency}</List.Item>
                <List.Item>{'MAC Address ' + wifi.macAddress}</List.Item>
                <List.Item>
                  {'Signal Strength ' + wifi.signalStrength}
                </List.Item>
              </List>
              <Divider />
            </div>
          )
        })}
      </Segment>
    </Segment.Group>
  )
}

EachDeviceInfo.propTypes = {
  deviceData: PropTypes.object.isRequired
}

export default EachDeviceInfo

/* <Segment>{'Latitude ' + deviceData.lat}</Segment>
<Segment>{'Longitude ' + deviceData.lng}</Segment> */
