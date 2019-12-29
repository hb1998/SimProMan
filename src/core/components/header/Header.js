import React, { Component } from 'react'

import { MenuItem, Menu, Button } from '@material-ui/core';
import { NotificationsNone, AccountCircle } from '@material-ui/icons';
import './headers.scss'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anchorEl: null,
        }
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };

    render() {
        return (
            <div className="headerContainer">
                <div className="projectTitle">
                    Product1
                </div>

                <div className="userActions">
                    {/* <mat-icon class="headerIcon">notifications_none
              </mat-icon> */}
                    {/* <NotificationsIcon /> */}
                    <div className="account">
                        <div className="userName">Habeeb</div>
                        <NotificationsNone />
                        <AccountCircle aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} />

                        <Menu
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div >
            </div >
        )
    }
}

export default Header
