import React, { Component } from 'react';

import { connect } from 'react-redux';


import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

//import css files


class Specialty extends Component {


    render() {

        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.setting}>
                            <div className='section-customize'>
                                <div className='bg-img section-img-specialty'></div>

                                <div>Co xuong khop 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-img-specialty'></div>

                                <div>Co xuong khop 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-img-specialty'></div>

                                <div>Co xuong khop 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-img-specialty'></div>

                                <div>Co xuong khop 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-img-specialty'></div>

                                <div>Co xuong khop 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-img-specialty'></div>

                                <div>Co xuong khop 6</div>
                            </div>

                        </Slider>
                    </div>

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
