import React, { Component } from 'react'
import './menu.scss'
import logo from '../../../assets/logo/simpromanLogo.svg'
export class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="sideMenuContainer">
            <div className="simpromanLogo">
                <img src={logo}/>
                <div className="logoText" >  
                    <span className="sim"> Sim</span><span className="pro" >Pro</span><span className="man" >Man</span>
                </div>
            </div>
            <div className="sideMenuItems">
                <div className="item active">
                    <div className="itemName">
                        My Board
                    </div>
                    <div className="remaining">
                        4
                    </div>
                </div>
                <div className="item">
                    <div className="itemName">
                        Team Board
                    </div>
                    <div className="remaining">
                        4
                    </div>
                </div>
                <div className="item">
                    <div className="itemName">
                        Projects
                    </div>
                    <div className="remaining">
                        4
                    </div>
                </div>
                <div className="item">
                    <div className="itemName">
                        Analytics
                    </div>
                    
                </div>
        
            </div>
        </div>
        )
    }
}

export default Menu

