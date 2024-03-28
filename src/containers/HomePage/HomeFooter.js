import React, { Component } from 'react';

import { connect } from 'react-redux';


import { FormattedMessage } from 'react-intl';


//import css files


class HomeFooter extends Component {


    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2024 Pham Dinh Hao.  More information, please visit my channel.
                    <a target='_blank' href='https://www.facebook.com/hao.phamdinh.75'>&#8594; Click here &#8592;</a>  </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.langugae,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
