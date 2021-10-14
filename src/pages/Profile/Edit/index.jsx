import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { setUser } from '../../../redux/actions/user_action';

import { DatePicker, List, InputItem, Picker, Button } from 'antd-mobile';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';

import BackBar from '../../../components/BackBar'

import { getUserInfo, updateUserInfo } from '../../../apis/userInfo';
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
                <List.Item arrow="horizontal">生日</List.Item>
            </DatePicker>
        </div>
    )
}

const CollegePicker = props => {

    const [collegeNow, setCollege] = useState(props.collegeNow)
    // setCollege()
    const collegeList = [
        "计算机科学与工程学院", "自动化工程学院", "机械与电气工程学院", "生命科学与技术学院", "数学科学学院", "经济与管理学院",
        "公共管理学院", "外国语学院", "马克思主义学院", "资源与环境学院", "航空航天学院", "医学院", "信息与软件工程学院",
        "基础与前沿研究院", "材料与能源学院", "格拉斯哥学院", "英才实验学院", "先进毫米波技术集成攻关研究院", "电子科技大学（深圳）高等研究院"
    ]

    const collegePickerList = collegeList.map(value => {
        return { value, label: value }
    })



    return (
        <Picker
            data={collegePickerList}
            title='college'
            cols={1}
            style={{ width: "100%" }}
            onChange={data => {
                props.sndData(data)
                setCollege(data)
            }}
        >
            <List.Item
                arrow='horizontal'
            >
                {collegeNow ? collegeNow : '学院'}
            </List.Item>
        </Picker>
    )
}


const CompetitionPicker = props => {
    const [competitionNow, setCompetition] = useState(props.competitionNow)
    // setCollege()
    const competitionList = [
        "挑战杯", "数学建模(美赛，国赛)", "CTF", "ACM", "蓝桥杯", "互联网+大学创新创业大赛",
        "大学生机械创新设计竞赛", "大学生化学实验邀请赛", "大学生结构设计竞赛", "大学生电子商务创新创意创业挑战赛", "大学生英语竞赛"
    ]

    const competitionPickerList = competitionList.map(value => {
        return { value, label: value }
    })



    return (
        <Picker
            data={competitionPickerList}
            title='competition'
            cols={1}
            style={{ width: "100%" }}
            onChange={data => {
                props.sndData(data)
                setCompetition(data)
            }}
        >
            <List.Item
                arrow='horizontal'
            >
                {competitionNow ? competitionNow : '竞赛'}
            </List.Item>
        </Picker>
    )
}

const GradePicker = props => {
    const [gradeNow, setGrade] = useState(props.gradeNow)

    const gradeList = [
        "大一", "大二", "大三", "大四", "研一", "研二", "研三"
    ]

    const gradePickerList = gradeList.map(value => {
        return { value, label: value }
    })


    return (
        <Picker
            data={gradePickerList}
            title='grade'
            cols={1}
            style={{ width: "100%" }}
            onChange={data => {
                props.sndData(data)
                setGrade(data)
            }}
        >
            <List.Item
                arrow='horizontal'
            >
                {gradeNow ? gradeNow : '年级'}
            </List.Item>

        </Picker>
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
        </>
    )
}





const Edit = props => {
    const [userInfo, setUserInfo] = useState({
        birthday: "2001-01-01",
        college: "信息与软件工程学院",
        competition: "ACM",
        country: "中国",
        description: "我喜欢睡觉",
        district: "成都市",
        email: "",
        grade: "大一",
        id: [],
        nickname: "",
        password: "x654321",
        phone: [],
        province: "四川",
        qq: 12321321,
        sex: "男",
        wechat: ""
    })


    useEffect(() => {
        getUserInfo(props.userInfo.userID)
            .then(res => {
                const existData = Object.keys(res.data)
                    .filter(key => res.data[key] !== null && res.data[key] !== undefined)
                    .reduce((acc, key) => ({ ...acc, [key]: res.data[key] }), {})

                setUserInfo({ ...userInfo, ...existData })
                console.log('setUserinfo', userInfo)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleBirthday = data => {
        setUserInfo({ ...userInfo, birthday: data })
    }

    const handleCollege = data => {
        setUserInfo({ ...userInfo, college: data[0] })

    }

    const handleCompetition = data => {
        setUserInfo({ ...userInfo, competition: data[0] })

    }

    // const handleName = data => {
    //     setUserInfo({ ...userInfo, name: data })

    // }

    const handleEmail = data => {
        setUserInfo({ ...userInfo, email: data })

    }

    const handleGrade = data => {
        setUserInfo({ ...userInfo, grade: data[0] })

    }

    const handleNickname = data => {
        setUserInfo({ ...userInfo, nickname: data })
    }

    const handlePhone = data => {
        setUserInfo({ ...userInfo, phone: data })
        console.log(userInfo)
    }

    const handleSubmit = e => {
        console.log('上传的数据', userInfo)
        updateUserInfo(userInfo)
            .then(res => {
                console.log('success', res)
            })
            .catch(err => {
                console.log('error', err)
            })
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

            {/* <AvatarPicker className='avatar_picker' userInfo={props.userInfo} /> */}


            <h2 className='edit_title'>基本资料</h2>
            <BirthDayPicker sndData={handleBirthday} />
            <CollegePicker sndData={handleCollege} collegeNow={userInfo.college} />
            <CompetitionPicker sndData={handleCompetition} competitionNow={userInfo.competition} />
            <GradePicker sndData={handleGrade} gradeNow={userInfo.grade} />
            {/* <InputItem onChange={handleName} placeholder={userInfo.name}>姓名</InputItem> */}
            <InputItem onChange={handleEmail} placeholder={userInfo.email}>email</InputItem>
            <InputItem onChange={handleNickname} placeholder={userInfo.nickname}>Nickname</InputItem>
            <InputItem onChange={handlePhone} placeholder={userInfo.phone}>电话</InputItem>
            <Button
                type='primary'
                className='submit_btn'
                onClick={handleSubmit}
            >
                submit
            </Button>

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



