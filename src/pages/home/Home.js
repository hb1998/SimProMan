import React, { Component } from 'react'
import './home.scss'
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import MainBoard from './components/main-board/MainBoard';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    addTask = () => {

    }

    render() {
        return (
            <div className="homeContainer">
                <div className="controlsContainer">

                    <div className="addTask">
                        <Button onClick={this.addTask()} color="primary">
                            <Add/>
                        </Button>
                    </div>
                    <div className="views">
                        {/* <button  *ngIf="viewMode !== 'short';else long"
                  (click)="toggleView('short')" mat-icon-button>
                  <mat-icon>short_text</mat-icon>
                </button>
                  <button (click)="toggleView('long')" mat-icon-button>
                    <mat-icon>subject</mat-icon>
                  </button> */}

                    </div>

                </div>
                <MainBoard />
            </div>
        )
    }
}

export default Home



