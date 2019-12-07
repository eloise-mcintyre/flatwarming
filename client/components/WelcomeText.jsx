import React from 'react'
import {Segment, Grid,Header} from 'semantic-ui-react'

const WelcomeText =()=> {
  const textStyle ={
    fontSize:'2em',
    color:'#FFA500',
    textAlign:'center'
  }
  return(
    
      <Segment style={{padding: '8em 18em'}} vertical>
        <Grid container stackable verticalAlign='center'>
          <Grid.Row>
            <Header as='h1' style={textStyle}>
            Hey! It's time to organize your flat well!!
            </Header>
          </Grid.Row>
        </Grid>
    </Segment>

  )

  }

export default WelcomeText