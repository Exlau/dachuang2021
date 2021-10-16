import { Toast } from 'antd-mobile'
import { React, useEffect, useState } from 'react'
import { getAPost } from '../../apis/posts'

import BackBar from '../BackBar'

import './index.less'
export default function Detail(props) {
    const [postInfo, setpostInfo] = useState({})
    useEffect(() => {
        const pathInfo = props.location.pathname.split('/')
        getAPost(pathInfo[2])
            .then(res => {
                setpostInfo(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log('err', err)
                Toast.info(err.data.error)
            })
    }, [])

    return (
        <div className='detail_root'>
            <BackBar history={props.history} />
            <div className='post_content' >
                <div className='main_content' dangerouslySetInnerHTML={{ __html: postInfo.postContent }}></div>
                <div className='footer_content'>
                    <p className='editor'>
                        Edit By: {postInfo.nickname}
                    </p>
                    <p className='last_time'>
                        Last Edit Time: {postInfo.postModified}
                    </p>
                </div>
            </div>
        </div>
    )
}
