import React from 'react'
import Paper from 'material-ui/Paper'

export default class ClassSidebar extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Paper style={{height: 350}}>
                    <br/>
                    <p style={{textAlign: 'center'}}>Class status and props</p>
                </Paper>
                <br/>
                <Paper style={{height: 350}}>
                    <br/>
                    <p style={{textAlign: 'center'}}>App Notifications</p>
                </Paper>
                <br/>
                <Paper style={{height: 350}}>
                    <br/>
                    <p style={{textAlign: 'center'}}>Ads</p>
                </Paper>
            </div>
        )
    }
}