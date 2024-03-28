import React, { Component } from 'react';

import { connect } from 'react-redux';


import { FormattedMessage } from 'react-intl';


//import css files


class About extends Component {


    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về MTP
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="427px" src="https://www.youtube.com/embed/zoEtcR5EW08"
                            title="SƠN TÙNG M-TP | CHÚNG TA CỦA TƯƠNG LAI | OFFICIAL MUSIC VIDEO"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Liệu mai sau phai vội mau không bước bên cạnh nhau (bên cạnh nhau)
                            Thì ta có đau? (Thì ta có đau? Có đau?)
                            Đôi mi nhoè phai ai sẽ lau?
                            Ai sẽ đến lau nỗi đau này?
                            Vô tâm quay lưng ta thờ ơ, lạnh lùng băng giá như vậy sao? (Vậy sao? Vậy sao?)
                            Vờ không biết nhau (không biết nhau, không biết nhau)
                            Lặng im băng qua chẳng nói một lời (chẳng nói một lời)
                            Ooh-whoa-ooh-whoa-oh-oh-oh (yeah, eh)
                            Rồi niềm đau có chóng quên? (Hah-ah-ooh-ah)
                            Hay càng quên càng nhớ thêm, vấn vương vết thương lòng xót xa?
                            Đừng như con nít (con nít), từng mặn nồng say đắm say (oh-oh-ah)
                            Cớ sao khi chia tay (chia tay), ta xa lạ đến kì lạ? (Ta xa lạ đến kì lạ)
                            Ai dám nói trước sau này (trước sau này)
                            Chẳng ai biết trước tương lai sau này (sau này)
                            Tình yêu đâu biết mai này có vẹn nguyên
                            Còn nguyên như lời ta đã hứa trước đây? (Ta đã hứa trước đây)
                            Dẫu cho giông tố xô xa rời (xa rời)
                            Còn mãi những điều đẹp đẽ say đắm một thời (một thời)
                            Nụ cười và giọt nước mắt rơi từng trao cùng ta
                            Nhìn lại về phía mặt trời (phía mặt trời)
                            Ta về phía mặt trời (phía mặt trời)
                            Yah, yah
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
