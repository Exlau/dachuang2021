import {React,useState} from 'react'
import { connect } from 'react-redux'
import { TextareaItem } from 'antd-mobile'
import BackBar from '../../components/BackBar'
import MyPicker from '../../components/MyPicker'

import './index.less'

const PickerList = [
    "挑战杯", "数学建模(美赛，国赛)", "CTF", "ACM", "蓝桥杯", "互联网+大学创新创业大赛",
    "大学生机械创新设计竞赛", "大学生化学实验邀请赛", "大学生结构设计竞赛", "大学生电子商务创新创意创业挑战赛", "大学生英语竞赛"
]

const Post = props => {
    const [postInfo, setpostInfo] = useState({
        competition:'',
        partialContent:'',
        postContent:'',
        postTitle:'',
        userId:props.userInfo.userID
    })

    return (
        <div className='post_root'>
            <BackBar history={props.history} title='新项目' />
            <MyPicker
                pickerNow={PickerList[0]}
                pickerList={PickerList}
                title='竞赛类型'
                sndData={data => { console.log(data) }}
            />
            <input 
            type='text' 
            className='post_title_ref'
            onChange={e=>{
                setpostInfo({...postInfo,postTitle:e.target.value})
                console.log(postInfo)
            }}
            />
            
            <div className='post_info'>
                <div className='part'></div>
                <h1 className='post_title'>{postInfo.postTitle}</h1>
                
            </div>
        </div>
    )
}

export default connect(
    state=>({userInfo:state.userInfo})
)(Post)
