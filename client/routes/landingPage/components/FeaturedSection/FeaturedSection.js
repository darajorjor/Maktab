import React from 'react'
import CardList from '../../../../common/CardList/CardList.js'
import {Link} from 'react-router'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import style from './FeaturedSection.css'

var array = [{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
},{
    title: "زیست شناسی 1",
    user: {
        name: 'مهدی جرجرزاده',
        avatar: '/img/personnel.jpg'
    },
    img: '/img/image1.jpg',
    description: 'مرور کلی مفاهیم پایه ریست شناسی کنکوری'
}];


export default class FeaturedSection extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <CardList
                title="کلاس های ویژه"
                backgroundColor="#eee"
            >
                {array.map((item)=> {
                    return <Link to="class">
                        <Card className={style.card}>
                            <CardHeader
                                title={item.title}
                                subtitle={item.user.name}
                                avatar={item.user.avatar}
                            />
                            <CardMedia style={{height: 250,overflow: 'hidden'}}>
                                <img src={item.img} />
                            </CardMedia>
                            <CardTitle
                                subtitle={item.description}
                            />
                        </Card>
                    </Link>
                })}
            </CardList>
        )
    }
}