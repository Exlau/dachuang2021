import { React, useEffect } from 'react'

import BackBar from '../BackBar'

import './index.less'
export default function Detail(props) {
    useEffect(() => {
        console.log('detail props:', props)
    }, [])

    return (
        <div className='detail_root'>
            <BackBar history={props.history} />
        </div>
    )
}
