import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu, MenuHeader } from 'semantic-ui-react'


// if needed!
// import { connect } from 'react-redux' 

class Nav extends React.Component {
  state = {
    register: true,
    logIn: true
  }
  
  clickRegister = () => {
      this.setState({
        register: !this.state.register,
        logIn: true
      })
  }

  clickLogin = () => {
      this.setState({
      register: true,
      logIn: !this.state.logIn
      })
  }

  clickHome = () => {
    this.setState({
    register: true,
    logIn: true
    })
  }
  
  render() {

    return (
      <>
      <Container>
        <Menu fixed='top' style = {{ backgroundColor: '#F9B79F' }}>
          <Menu.Item header as={Link} to='/' onClick={this.clickHome}>Flat Warming</Menu.Item >

            <Menu.Menu position='right'>

              {this.state.register && <Menu.Item as={Link} to='/register' onClick={this.clickRegister}>
                Register
              </Menu.Item>
              }

              {this.state.logIn && <Menu.Item as={Link} to='/log-in' onClick={this.clickLogin}>
                Log In
              </Menu.Item>
              } 

            </Menu.Menu>
        </Menu>
      </Container>
      
      </>
    )
  }
}

export default Nav