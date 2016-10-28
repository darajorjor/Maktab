/*
 * Copyright (c) 2016. Mehdi JorJor all rights reserved
 */

import React from 'react'
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers'
import QuestionTitle from '../QuestionTitle/QuestionTitle'

export default class Question extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <QuestionTitle
                    title="شباهت میان سلول های بافت ماهیچه ای اسکلتی و بافت ماهیچه ای قلبی، ... در آن هاست."
                />
                <br/>
                <QuestionAnswers
                    type="MC"
                    answers={{
                        c1: 'وجود بخش های تیره و روشن',
                        c2: 'تعداد هسته',
                        c3: 'شکل سلول',
                        c4: 'نحوه ی اتصال بین دو سلول',
                    }}
                />
            </div>
        )
    }
}