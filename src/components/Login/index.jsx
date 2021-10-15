import { React, useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { setToken, setUser } from '../../redux/actions/user_action'

import { List, InputItem, Toast, Button } from 'antd-mobile';

import { login, regis } from '../../apis/login';
import axios from 'axios';

const Login = (props) => {
    let [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    })

    const onErrorClick = () => {
        if (userInfo.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }


    const userNameChange = username => {
        setUserInfo({
            ...userInfo,
            username
        })
    }

    const passwordChange = password => {
        setUserInfo({
            ...userInfo,
            password
        })
    }

    const onErr = e => {
        console.log(e)
    }

    const doLogin = e => {
        login(userInfo)
            .then(res => {
                // Toast.info(res.data.status)
                const TOKEN = res.headers['token-authorization-with']
                const userID = res.headers['user-id']
                props.setUser({
                    TOKEN,
                    userID
                })
                Toast.info(res.headers.message)
            }).catch(err => {
                console.log(userInfo)
                Toast.info(err.headers.message)
            })

    }

    const doRegis = e => {
        const regsInfo = {
            nickname: userInfo.username,
            ...userInfo
        }
        regis(regsInfo)
            .then(res => {
                const TOKEN = res.headers['token-authorization-with']
                const userID = res.headers['user-id']
                props.setUser({
                    TOKEN,
                    userID
                })
                Toast.info(res.headers.message)
            })
            .catch(err => {
                console.log(userInfo)
                Toast.info(err.headers.message)
            })
    }

    return (
        <div className='login_root'>
            <List renderHeader={() => 'LOGIN'}>
                <InputItem
                    type="username"
                    placeholder="input your username"
                    onErrorClick={onErrorClick}
                    onChange={userNameChange}
                    value={userInfo.username}
                >
                    userName
                </InputItem>

                <InputItem
                    type="password"
                    placeholder="input your password"
                    onErrorClick={onErr}
                    onChange={passwordChange}
                    value={userInfo.password}
                >password</InputItem>
            </List>
            <Button
                type='primary'
                onClick={doLogin}
                inline
                size='small'
            >
                login
            </Button>
            <Button
                type='primary'
                onClick={doRegis}
                inline
                size='small'
            >
                registry
            </Button>
        </div>
    )
}

export default connect(
    state => (
        {
            userInfo: state.userInfo
        }
    ),
    {
        setToken: setToken,
        setUser: setUser
    }
)(Login)