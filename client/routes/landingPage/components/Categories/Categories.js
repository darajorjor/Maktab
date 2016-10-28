import React from 'react'
import {Col, Row} from 'react-flexbox-grid'
import {Link} from 'react-router'

export default class Categories extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="container" style={{marginBottom: 50}}>
                    <h1>دسته بنده</h1>
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <ul className="verticalList">
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <ul className="verticalList">
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <ul className="verticalList">
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <ul className="verticalList">
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <ul className="verticalList">
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <ul className="verticalList">
                                <li><Link to="/">درسی</Link></li>
                                <li><Link to="/">درسی</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}