import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: "",
            isOpen: false,
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        // this.props.dispatch(actions.fetchGenderStart())
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }

        // } catch (error) {
        //     console.log(error)
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objectUrl
            })

        }


    }
    openPreviewImage = () => {
        if (!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }
    render() {

        let genders = this.state.genderArr;
        let language = this.props.language;
        let roles = this.state.roleArr;
        let postitions = this.state.positionArr;
        let isLoadingGender = this.props.isLoadingGender;
        console.log("check state component", this.state)
        return (
            <div className='user-redux-container'>
                <div className='title'>Manage redux</div>

                <div className="user-redux-body" >
                    <div className='container'>
                        <div className='row'>
                            <form class="row g-4">
                                <div className='col-12'><FormattedMessage id="manage-user.add" /></div>
                                <div className='col-12'>{isLoadingGender === true ? 'Loading Gender' : ''}</div>
                                <div className="col-md-3">
                                    <label for="inputEmail4" className="form-label"><FormattedMessage id="manage-user.email" /></label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-3">
                                    <label for="inputPassword4" className="form-label"><FormattedMessage id="manage-user.password" /></label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-3">
                                    <label for="inputFirstName" className="form-label"><FormattedMessage id="manage-user.first-name" /></label>
                                    <input type="text" class="form-control" id="inputFirstName" />
                                </div>
                                <div className="col-3">
                                    <label for="inputLastName" className="form-label"><FormattedMessage id="manage-user.last-name" /></label>
                                    <input type="text" className="form-control" id="inputLastName" />
                                </div>
                                <div className="col-md-3">
                                    <label for="inputPhoneNumber" className="form-label"><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input type="text" class="form-control" id="inputPhoneNumber" />
                                </div>
                                <div className="col-md-9">
                                    <label for="inputAddress" className="form-label"><FormattedMessage id="manage-user.address" /></label>
                                    <input type="text" class="form-control" id="inputAddress" />
                                </div>
                                <div className="col-md-3">
                                    <label for="inputGender" className="form-label"><FormattedMessage id="manage-user.gender" /></label>
                                    <select id="inputGender" className="form-select">
                                        {genders && genders.length > 0 && genders.map((item, index) => {
                                            return (
                                                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }

                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputPosition" className="form-label"><FormattedMessage id="manage-user.position" /></label>
                                    <select id="inputPosition" className="form-select">
                                        {postitions && postitions.length > 0 && postitions.map((item, index) => {
                                            return (
                                                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputRoleID" className="form-label"><FormattedMessage id="manage-user.role" /></label>
                                    <select id="inputRoleID" className="form-select">
                                        {roles && roles.length > 0 && roles.map((item, index) => {
                                            return (
                                                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="inputImage" className="form-label"><FormattedMessage id="manage-user.image" /></label>
                                    <div className='preview-img-container'>
                                        <input id='previewImg' type="file" hidden
                                            onChange={(event) => this.handleOnchangeImage(event)}
                                        />
                                        <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className='fas fa-upload'></i></label>
                                        <div className='preview-image' style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}
                                            onClick={() => this.openPreviewImage()}
                                        >

                                        </div>
                                    </div>

                                </div>

                                <div className="col-12">
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true && <Lightbox
                    mainSrc={this.state.previewImgUrl}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />}

            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
