import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


class Internet extends React.Component {
  state = { 

   }
  render() { 
    return ( 
      <>
    <Card color='orange'>
      <img src='/wifi.png' size='large' rounded style={{backgroundColor: '#ffaf7a', height: '30vh', width: 'auto'}} />
      <Card.Content>

        <Card.Header>INTERNET BILL</Card.Header>

        <Card.Meta>
          DUE IN 3 DAYS
        </Card.Meta>

      </Card.Content> 
    </Card>
      </>
     );
  }
}
 
export default Internet;