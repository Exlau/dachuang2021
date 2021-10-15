import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getFollowList } from '../../../apis/userInfo'
import BackBar from '../../../components/BackBar'

const FollowList = props => {
    const [followList, setFollowList] = useState([])

    useEffect(() => {
        getFollowList(props.userInfo.userID)
            .then(res => {
                console.log('followlist', res)
                setFollowList(res.data.list)
            })
            .catch(err => {
                console.log('followlist', err)
            })
    }, [])

    return (
        <div className="followlist_rootr">
            <BackBar history={props.history} title="关注我的" />
            {
                followList.length === 0 ? 'no follower' 
                    :
                    followList.map(val => {
                        return val
                    })
            }
        </div>
    )
}

export default connect(
    state => ({ userInfo: state.userInfo })
)(FollowList)