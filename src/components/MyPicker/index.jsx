import {React,useState} from "react"
import { Picker,List } from "antd-mobile"

// 传入pickerNow pickerList title sndData
const MyPicker = props => {
    const [pickerNow, setPicker] = useState(props.pickerNow)
    // setCollege()
    const pickerList = props.pickerList

    const pickerView = pickerList.map(value => {
        return { value, label: value }
    })



    return (
        <Picker
            data={pickerView}
            title={props.title}
            cols={1}
            style={{ width: "100%" }}
            onChange={data => {
                props.sndData(data)
                setPicker(data)
            }}
        >
            <List.Item
                arrow='horizontal'
            >
                {pickerNow ? pickerNow : props.title}
            </List.Item>
        </Picker>
    )
}

export default MyPicker