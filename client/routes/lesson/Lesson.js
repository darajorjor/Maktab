import React from 'react'
import Paper from 'material-ui/Paper'
import LessonHeader from './components/LessonHeader/LessonHeader'
import LessonFooter from './components/LessonFooter/LessonFooter.js'
import Question from './components/Question/Question.js'

export default class Lesson extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" style={{maxWidth: 1024, marginBottom: '3vw', marginTop: '3vw'}}>
                <Paper className="wrapperPaper">
                    <LessonHeader />
                    <div style={{width: '100%', height: 500}}>
                        <Question />
                    </div>
                    <LessonFooter />
                </Paper>
            </div>
        )
    }
}