import React from 'react'
import SectionEntry from '../SectionEntry/SectionEntry.js'
import {Col, Row} from 'react-flexbox-grid'
import style from './ClassBody.css'

export default class ClassBody extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry
                            point={5}
                            capacity={6}
                        />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry
                            point={5}
                            capacity={6}
                        />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                </Row>
                <Row className={style.sectionRow}>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                    <Col xs>
                        <SectionEntry />
                    </Col>
                </Row>
            </div>
        )
    }
}