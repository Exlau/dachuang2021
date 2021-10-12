import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../redux/actions/user_action';

import { DatePicker, List, InputItem } from 'antd-mobile';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';

import BackBar from '../../../components/BackBar'

import { getUserInfo } from '../../../apis/userInfo';
import { upLoadAvatar } from '../../../apis/file';

import { base64ToBlob } from '../../../utils/filetype';

import './index.less'
import axios from 'axios';
const BirthDayPicker = props => {
    const nowTimeStamp = Date.now();
    const now = new Date(nowTimeStamp);
    // GMT is not currently observed in the UK. So use UTC now.
    const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

    // Make sure that in `time` mode, the maxDate and minDate are within one day.
    let minDate = new Date(nowTimeStamp - 1e7);
    const maxDate = new Date(nowTimeStamp + 1e7);
    // console.log(minDate, maxDate);
    if (minDate.getDate() !== maxDate.getDate()) {
        // set the minDate to the 0 of maxDate
        minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
    }

    const handleChange = date => {
        setState({ date })
        props.sndData(date)
    }

    const [state, setState] = useState(
        {
            date: now,
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
        }
    )
    return (
        <div className='birthday_root'>

            <DatePicker
                mode="date"
                title="Select Date"
                extra="Optional"
                value={state.date}
                onChange={handleChange}
            >
                <List.Item arrow="horizontal">Date</List.Item>
            </DatePicker>
        </div>
    )
}

const AvatarPicker = props => {

    const [avatarImg, setAvatar] = useState({
        file: '',
        preview: ''
    })

    const onChange = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        const file = e.target.files[0]

        reader.readAsDataURL(file)

        reader.onload = () => {
            console.log('选择的文件', file)
            console.log('文件读取结果', reader.result)
            setAvatar({
                file,
                preview: reader.result
            })

            let formdt = new FormData()

            formdt.append('data', file)

            console.log('form data ', formdt.get('data'))

            console.log('data', file)
            // upLoadAvatar(props.userInfo.userID, file)
            //     .then(res => {
            //         console.log('res', res)
            //     })
            //     .catch(err => {
            //         console.log('err', err)
            //     })
            axios({
                method: 'POST',
                url: 'http://139.186.170.86:8808/api/v1.0/file/upload/1/0',
                headers: {
                    'Token-Authorization-With': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAiLCJleHAiOjE2MzI4OTA4NDEsImlhdCI6MTYzMjgwNDQ0MSwidXNlcm5hbWUiOiJhZG1pbiJ9.hcvNTash0aRWXdNHS2TD-JmVVgckFurCKgNuvhW7nnc',
                    'Content-Type': false
                },
                data: formdt
            })
        }

        const img = e.target.files
        // upLoadAvatar(props.userInfo.userID, img)
        //     .then(res => {
        //         console.log('res', res)
        //     })
        //     .catch(err => {
        //         console.log('err', err)
        //     })
    }

    return (
        <>
            <input
                className='avatarPicker'
                id='avatar'
                type='file'
                onChange={onChange}
                encType='multipart/form-data'
            />
            <InputItem type="text" />
        </>
    )
}


// const AvatarPicker = props => {
//     const data = [{
//         url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//         id: '2121',
//     }];

//     const [state, setState] = useState({
//         files: data,
//         multiple: false,
//     })

//     const onChange = (files, type, index) => {
//         console.log(files, type, index);
//         console.log(files.length)
//         setState({
//             files,
//         });
//         if (files.length != 0) {
//             console.log('userID', props.userInfo.userID)
//             console.log('filedata', files[0].url)
//             let realFile = base64ToBlob(files[0].url, 'image/png')
//             console.log('realpng', realFile)
//             upLoadAvatar(props.userInfo.userID, realFile)
//                 .then(res => {
//                     console.log('res', res)
//                 })
//                 .catch(err => {
//                     console.log('err', err)
//                 })
//         }

//     }

//     const {files} = state;

//     return (
//         <ImagePicker
//             files={files}
//             onChange={onChange}
//             onImageClick={(index, fs) => console.log(index, fs)}
//             selectable={files.length < 1}
//         />
//     )
// }

const CollegePicker = props => {

}

const Edit = props => {
    const [userInfo, setUserInfo] = useState({
        birthday: "2001-01-01",
        college: "信息与软件工程学院",
        competition: "ACM",
        country: "中国",
        description: "我喜欢睡觉 ",
        district: "成都市",
        email: "7553519521@qq.com",
        grade: "大一",
        id: 1,
        nickname: "newName",
        password: "x654321",
        phone: 13956421548,
        province: "四川",
        qq: 7553519521,
        sex: "男",
        wechat: "wechat-3566"
    })

    useEffect(() => {
        getUserInfo(props.userInfo.userID)
            .then(res => {
                console.log(res)
                setUserInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const editAvatar = e => {

    }

    const handleBirthday = data => {
        console.log('parent', data)
    }

    return (
        <div className='edit_root'>
            <BackBar history={props.history} title='edit' />
            {/* <div className='avatar_edit'> */}
            {/* <input
                    type='file'
                    onClick={editAvatar}
                    style={{ backgroundImage: `url(${userInfo.iconUrl})` }}
                /> */}
            {/* </div> */}

            <AvatarPicker className='avatar_picker' userInfo={props.userInfo} />


            <h2 className='edit_title'>基本资料</h2>
            <BirthDayPicker sndData={handleBirthday} />

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
        setUser: setUser
    }
)(Edit)




// -----------------------------------



