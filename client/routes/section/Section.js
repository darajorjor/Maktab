import React from 'react'
import Paper from 'material-ui/Paper'
import CardList from '../../common/CardList/CardList.js'
import style from './Section.css'
// import {Card, CardMedia, CardTitle} from 'material-ui/Card';
// import {Link} from 'react-router'
import NotesAndTips from '../../common/NotesAndTips/NotesAndTips.js'
import LessonEntry from './components/LessonEntry/LessonEntry'

var array = [{
    img: 'img/muscles-anatomy-back.jpg',
    title: '1) ماهیچه های پشتی',
    subtitle: 'تانکروم، جاماتا، راسته بزرگ و ...'
},{
    img: 'img/muscles-anatomy-back.jpg',
    title: '2) ماهیچه های پشتی',
    subtitle: 'تانکروم، جاماتا، راسته بزرگ و ...'
},{
    img: 'img/muscles-anatomy-back.jpg',
    title: '3) ماهیچه های پشتی',
    subtitle: 'تانکروم، جاماتا، راسته بزرگ و ...'
},{
    img: 'img/muscles-anatomy-back.jpg',
    title: '4) ماهیچه های پشتی',
    subtitle: 'تانکروم، جاماتا، راسته بزرگ و ...'
},{
    img: 'img/muscles-anatomy-back.jpg',
    title: '5) ماهیچه های پشتی',
    subtitle: 'تانکروم، جاماتا، راسته بزرگ و ...'
},{
    img: 'img/muscles-anatomy-back.jpg',
    title: '6) ماهیچه های پشتی',
    subtitle: 'تانکروم، جاماتا، راسته بزرگ و ...'
}];

export default class Section extends React.Component {

    render(){
        return(
            <div className="container">
                <CardList>
                    {array.map((item)=> {
                        return <LessonEntry item={item} />
                    })}
                </CardList>
                <Paper className="wrapperPaper">
                    <h1>ساختار ماهیچه ای</h1>
                    <span className={style.point}>6/0</span>

                    <NotesAndTips maxWidth="100%" maxHeight="100%"/>
                </Paper>
            </div>
        )
    }
}