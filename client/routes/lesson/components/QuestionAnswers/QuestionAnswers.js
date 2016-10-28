/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {amber500} from 'material-ui/styles/colors'

let style = {
    question: {
        display: 'block',
        width: '70%',
        margin: '15px auto'
    }
};

export default class QuestionAnswers extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <RaisedButton
                    label={`1) ${this.props.answers.c1}`}
                    backgroundColor={amber500}
                    labelColor="#fff"
                    style={style.question}
                />

                <RaisedButton
                    label={`2) ${this.props.answers.c2}`}
                    backgroundColor={amber500}
                    labelColor="#fff"
                    style={style.question}
                />

                <RaisedButton
                    label={`3) ${this.props.answers.c3}`}
                    backgroundColor={amber500}
                    labelColor="#fff"
                    style={style.question}
                />

                <RaisedButton
                    label={`4) ${this.props.answers.c4}`}
                    backgroundColor={amber500}
                    labelColor="#fff"
                    style={style.question}
                />
            </div>
        )
    }
}