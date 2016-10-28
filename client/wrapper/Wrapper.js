import React from 'react'
import MJNavbar from '../common/MJNavbar/MJNavbarContainer.js'
import Footer from '../routes/landingPage/components/Footer/Footer.js'
import MSnackbar from '../common/MSnackBar/MSnackbar.js'

export default class Wrapper extends React.Component {

    render(){
        return(
            <div>
                <MJNavbar />
                {this.props.children}
                <Footer />
                <MSnackbar/>
            </div>
        )
    }
}