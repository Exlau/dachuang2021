import { React, useEffect, useState } from 'react'
import { Button } from 'antd-mobile'

import { connect } from 'react-redux'
import { setToken } from '../../redux/actions/user_action'

import { getUserInfo } from '../../apis/userInfo'

import './index.less'

const Profile = (props) => {
    const [profileInfo, setProfileInfo] = useState({})

    const showFollowMe = e => {
        props.history.push('/followlist')
    }

    const logout = e => {
        props.setToken('')
        console.log('click')
    }

    const editClick = e => {
        props.history.push('/editprofile')
    }

    useEffect(() => {
        // 这里最好做个缓存
        getUserInfo(props.userInfo.userID)
            .then(res => {
                console.log(res)
                setProfileInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='profile_root'>
            <div className="white_space">
            </div>
            <div className='self_info'>
                <div className='avatar'></div>
                <Button
                    type='primary'
                    className='edit_btn'
                    inline={true}
                    onClick={editClick}
                >
                    编辑资料
                </Button>


                {/* 这里需要绑定事件 */}
                <div className='social_info'>
                    <h1 className='username'>
                        {profileInfo.nickname}
                    </h1>
                    <div className='follow_info'>
                        <h2 className='who_follow_me' onClick={showFollowMe}>
                            <span className='follow_num'>0</span>
                            关注我的
                        </h2>
                        <h2 className='who_I_follow'>
                            <span className='follow_num'>0</span>
                            我关注的
                        </h2>
                    </div>
                    <Button
                        type='primary'
                        className='logout_btn'
                        inline
                        onClick={logout}
                    >
                        logout
                    </Button>
                </div>

            </div>
        </div >
    )
}

export default connect(
    state => (
        {
            userInfo: state.userInfo
        }
    ),
    {
        setToken: setToken
    }
)(Profile)
