import React from 'react'
import {lightGreen700,lightGreen500} from 'material-ui/styles/colors'
import {Col, Row} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'
import style from './Footer.css'

export default class Footer extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div style={{width: '100%',backgroundColor: lightGreen500}}>
                    <div className="container">
                        <Row center="md" className={style.footerRow}>
                            <Col md>
                                <h3>کلاس های برتر</h3>
                                {this.props.aboutUsItems.map((item) => <FlatButton
                                    label={item.label}
                                    className={style.footerLink}
                                />)}
                            </Col>
                            <Col md>
                                <h3>بلاگ کلاس من</h3>
                                {this.props.aboutUsItems.map((item) => <FlatButton
                                    label={item.label}
                                    className={style.footerLink}
                                />)}
                            </Col>
                            <Col md>
                                <h3>موضوعات</h3>
                                {this.props.aboutUsItems.map((item) => <FlatButton
                                    label={item.label}
                                    className={style.footerLink}
                                />)}
                            </Col>
                            <Col md>
                                <h3>مقالات</h3>
                                {this.props.aboutUsItems.map((item) => <FlatButton
                                    label={item.label}
                                    className={style.footerLink}
                                />)}
                            </Col>
                            <Col md>
                                <h3>درباره ما</h3>
                                {this.props.aboutUsItems.map((item) => <FlatButton
                                    label={item.label}
                                    className={style.footerLink}
                                />)}
                            </Col>
                            <Col md>
                                <h3>تماس با ما</h3>
                                {this.props.contactUsItems.map((item) => <FlatButton
                                    label={item.label}
                                    className={style.footerLink}
                                />)}
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{width: '100%',backgroundColor: lightGreen700}}>
                    <Row center="xs" style={{padding: 15}}>
                        <Col xs={4}>
                            <span style={{color: '#fff'}}>تمام حقوق این وبسایت متعلق به مهدی جرجرزاده بوده</span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

Footer.defaultProps = {
    aboutUsItems: [
        {label: "درباره ما"},
        {label: "داستان ما"},
        {label: "تیم ما"}
    ],
    contactUsItems: [
        {label: "تماس با ما"},
        {label: "ایمیل"},
        {label: "شماره های تماس"},
        {label: "شبکه های اجتماعی"},
        {label: "ما کجا هستیم ؟"},
    ]
};