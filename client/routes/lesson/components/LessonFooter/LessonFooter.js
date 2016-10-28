import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {lightGreenA700} from 'material-ui/styles/colors'

export default class LessonFooter extends React.Component {

    render(){
        return(
            <div>
                <Row center="xs">
                    <Col xs="12">
                        <FlatButton
                            label="بعدی"
                            style={{marginRight: 10}}
                        />
                        <RaisedButton
                            label="درسته ؟"
                            labelColor="#fff"
                            backgroundColor={lightGreenA700}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}