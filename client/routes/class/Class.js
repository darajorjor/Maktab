import React from 'react'
import Paper from 'material-ui/Paper'
// import {Link} from 'react-router'
// import style from './Class.css'
// import Store from 'material-ui/svg-icons/action/store'
// import IconButton from 'material-ui/IconButton'
// import {deepOrange500} from 'material-ui/styles/colors'
import {Col, Row} from 'react-flexbox-grid'
import ClassTitle from './components/ClassTitle/ClassTitle.js'
import ClassSidebar from './components/ClassSidebar/ClassSidebar'
import ClassBody from './components/ClassBody/ClassBody.js'

export default class Class extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container">
                <Row>
                    <Col md={3}>
                        <ClassSidebar />
                    </Col>
                    <Col md={9}>
                        <Paper className="wrapperPaper">
                            <ClassTitle
                                account="جرجرزاده"
                                title="زیست شناسی 1"
                            />
                            {/*<IconButton tooltip="دکّه" iconStyle={{width: 50, height: 50}} style={{height: 79, width: 79, position: 'absolute', right: 0, top: 0}}><Store color={deepOrange500}/></IconButton>*/}
                            <br/>
                            <ClassBody />
                            <br/>
                            <br/>
                            <br/>
                        </Paper>
                    </Col>
                </Row>
            </div>
        )
    }
}