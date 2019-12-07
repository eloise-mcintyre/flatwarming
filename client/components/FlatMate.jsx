import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  List
} from 'semantic-ui-react'

class FlatMate extends React.Component {
  render () {
    const { removeFlatmate, id, flatmate } = this.props
    return (
      <List.Item as='li' key={id}>
        <label>Flatmate:</label><input value={flatmate}/>
        <Button onClick={() => removeFlatmate(id)}>-</Button>
      </List.Item>
    )
  }
}

export default connect(null)(FlatMate)
