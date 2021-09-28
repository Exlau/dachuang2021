import React from 'react'
import { Route, Redirect } from 'react-router-dom';

import store from '../../redux/store';
import { connect } from 'react-redux'
import { setToken } from '../../redux/actions/user_action'

import Index from '../Index'
import Login from '../Login'
import Detail from '../Detail'
import Edit from '../../pages/Profile/Edit'
import FollowList from '../../pages/Profile/FollowList';

const Routers = (props) => {

    return (
        <>
            <div className='routers_root'>
                <Route exact path='/' render={() => <Redirect to='/index/home' />} />
                <Route path='/login' component={Login} history={props.history} />
                <Route path='/index' component={Index} history={props.history} />
                <Route path='/detail' component={Detail} history={props.history} />
                <Route path='/editprofile' component={Edit} history={props.history} />
                <Route path='/followList' component={FollowList} history={props.history} />
            </div>
            {
                props.userInfo.TOKEN === '' ?
                    <Redirect to='/login' />
                    : <Redirect to='/' />

            }

        </>
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
)(Routers)
