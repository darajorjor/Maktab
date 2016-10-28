import React from 'react'
import style from './MainSection.css'
import {Row, Col} from 'react-flexbox-grid'
import SignUpForm from './SignUpForm/SignUpForm.js'

export default class MainSection extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className={style.wrapper}>
                <div className="container">
                    <Row>
                        <Col md={3} sm={12} xs={12}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <SignUpForm />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}