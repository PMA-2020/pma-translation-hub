//noinspection JSUnresolvedVariable
import React, { Component } from 'react'
//noinspection JSUnresolvedVariable
import { browserHistory } from 'react-router'
//noinspection JSUnresolvedVariable
import { connect } from 'react-redux'
//noinspection JSUnresolvedVariable
import { bindActionCreators } from 'redux'
import AppBar from 'material-ui/AppBar'
import LeftNav from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import * as actionCreators from '../../actions/auth'

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        // # Utilize this if planning on menu open state being part of the store.
        // menuOpenState: state.menuOpenState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    dispatchNewRoute(route) {
        browserHistory.push(route)
        this.setState({
            open: false,
        })

    }

    handleClickOutside() {
        this.setState({
            open: false,
        })
    }

    logout(e) {
        e.preventDefault()
        this.props.logoutAndRedirect()
        this.setState({
            open: false,
        })
    }

    openNav() {
        this.setState({
            open: true,
        })
    }

    closeNav(e) {
        e.preventDefault()
        // # Utilize this if planning on menu open state being part of the store.
        // this.props.closeMenu()
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <header>
                <LeftNav open={this.state.open}>
                    {
                        !this.props.isAuthenticated ?
                            <div>
                                <MenuItem onClick={() => this.dispatchNewRoute('/login')}>
                                    Login
                                </MenuItem>
                                <MenuItem onClick={() => this.dispatchNewRoute('/register')}>
                                    Register
                                </MenuItem>
                            </div>

                            :

                            <div>
                                <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: "10px", paddingTop: "10px", paddingRight: "10px"}}>
                                    <p style={{alignItems: 'left', verticalAlign: 'bottom'}}><strong>PMA Translation Hub</strong></p>
                                    <p>
                                        <a href="" style={{hovorColor: "pink", active: "black"}}>
                                            <i className="fa fa-times" onClick={(e) => this.closeNav(e)} name='close' size='2x'
                                            style={{alignItems: 'right', verticalAlign: 'top', color: 'grey', hoverColor: "#00bcd4"}} />
                                        </a>
                                    </p>
                                </div>
                                <Divider />

                                <MenuItem onClick={() => this.dispatchNewRoute('/home')}>
                                    Home
                                </MenuItem>
                                <Divider />

                                <MenuItem onClick={() => this.dispatchNewRoute('/users')}>
                                    Users
                                </MenuItem>
                                <Divider />

                                <MenuItem onClick={() => this.dispatchNewRoute('/settings')}>
                                    Settings
                                </MenuItem>
                                <Divider />

                                <MenuItem onClick={(e) => this.logout(e)}>
                                    Logout
                                </MenuItem>
                            </div>
                    }
                </LeftNav>
                <AppBar
                  title="PMA Translation Hub"
                  onLeftIconButtonTouchTap={() => this.openNav()}
                  iconElementRight={
                      <FlatButton label="Home" onClick={() => this.dispatchNewRoute('/')} />
                    }
                />
            </header>

        )
    }
}

Header.propTypes = {
    logoutAndRedirect: React.PropTypes.func,
    isAuthenticated: React.PropTypes.bool,
}
