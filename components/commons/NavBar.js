import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Icon from 'antd/lib/icon'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import styled from 'styled-components'

import { doLogout } from '../../redux/user'

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2em;
  z-index: 999;
`

const Title = styled.p`
  margin-bottom: 0 !important;
  margin-right: 1em;
  font-size: 1.2em;
  font-weight: 500;
  color: #000;
  cursor: pointer;
`

const MenuWrapper = styled.ul`
  display: flex;
  list-style: none;
`

const Menu = styled.li`
  display: list-item;
  margin-left: 1.5em;
  font-size: 1.2em;
  font-weight: 300;
  color: #000;
  cursor: pointer;
`

const LogoutButton = styled(Menu)`
  color: #f00;
`

const enhance = compose(
  connect(
    (state) => state,
    { doLogout }
  )
)

class NavBar extends Component {
  static async getInitialProps ({ store }) {
    return { ...store }
  }

  render () {
    const {
      user: { login, info: { role } },
      doLogout
    } = this.props

    return (
      <Container>
        <MenuWrapper>
          <Link href='/'>
            <Title>Classnalytic</Title>
          </Link>
          {login ? (
            <Fragment>
              <Link href='/dashboard'>
                <Menu>
                  <Icon type='dashboard' /> Dashboard
                </Menu>
              </Link>
              <Link href='/students'>
                <Menu>
                  <Icon type='user' /> Students
                </Menu>
              </Link>
              {role === 'admin' &&
                <Link href='/setting'>
                  <Menu>
                    <Icon type='setting' /> Settings
                  </Menu>
                </Link>
              }
              <LogoutButton onClick={() => doLogout()}>
                <Icon type='logout' /> Logout
              </LogoutButton>
            </Fragment>
          ) : (
            <Fragment>
              <Link href='/'>
                <Menu>
                  <Icon type='home' /> Home
                </Menu>
              </Link>
              <Link href='/login'>
                <Menu>
                  <Icon type='login' /> Login
                </Menu>
              </Link>
            </Fragment>
          )}
        </MenuWrapper>
      </Container>
    )
  }
}

export default enhance(NavBar)
