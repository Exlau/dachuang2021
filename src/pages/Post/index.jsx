import { React, useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { TextareaItem, InputItem, Button, Toast } from 'antd-mobile'
import BackBar from '../../components/BackBar'
import MyPicker from '../../components/MyPicker'
import { uploadPost } from '../../apis/posts'

import './index.less'

const PickerList = [
    "挑战杯", "数学建模(美赛，国赛)", "CTF", "ACM", "蓝桥杯", "互联网+大学创新创业大赛",
    "大学生机械创新设计竞赛", "大学生化学实验邀请赛", "大学生结构设计竞赛", "大学生电子商务创新创意创业挑战赛", "大学生英语竞赛"
]

const Post = props => {
    const [postInfo, setpostInfo] = useState({
        competition: PickerList[0],
        partialContent: '',
        postContent: '',
        postTitle: '',
        userId: props.userInfo.userID
    })

    const [postHTML, setpostHTML] = useState('')
    const [postPartHTML, setpostPartHTML] = useState('')
    const postHTMLRef = useRef()

    useEffect(() => {
        setpostHTML(postHTMLRef.current.innerHTML)
        setpostPartHTML(postHTMLRef.current.querySelector('.post_partcontent').innerHTML)
    }, [postInfo])

    return (
        <div className='post_root'>
            <BackBar history={props.history} title='新项目' />
            <MyPicker
                pickerNow={PickerList[0]}
                pickerList={PickerList}
                title='竞赛类型'
                sndData={data => {
                    setpostInfo({ ...postInfo, competition: data[0] })
                }}
            />

            <InputItem
                type='text'
                className='ref post_title_ref'
                placeholder='输入标题'
                onChange={e => {
                    setpostInfo({ ...postInfo, postTitle: e })
                }}
            />

            <InputItem
                type='text'
                className='ref post_partical_ref'
                placeholder='输入正文描述'
                onChange={e => {
                    setpostInfo({ ...postInfo, partialContent: e })
                }}
            />

            <TextareaItem
                type='text'
                className='ref post_content_ref'
                placeholder='输入正文'
                onChange={e => {
                    setpostInfo({ ...postInfo, postContent: e })
                }}
            />


            <div
                className='post_info'
                ref={postHTMLRef}
            >
                <div className='part'></div>
                <h1 className='post_title'>{postInfo.postTitle}</h1>
                <h2 className='post_partcontent'>{postInfo.partialContent}</h2>
                <p className='post_content'>{postInfo.postContent}</p>
            </div>

            <Button
                type='primary'
                onClick={e => {
                    const sndData = {
                        ...postInfo,
                        partialContent: postPartHTML,
                        postContent: postHTML
                    }
                    console.log('upload data', sndData)
                    uploadPost(sndData)
                        .then(res => {
                            Toast.info('success upload')
                        })
                        .catch(err => {
                            Toast.info(err.data.error + ' ' + err.data.message)
                        })

                }}
            >submit</Button>
        </div>
    )
}

export default connect(
    state => ({ userInfo: state.userInfo })
)(Post)
