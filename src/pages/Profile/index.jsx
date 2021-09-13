import { React, useEffect } from 'react'
import { Button } from 'antd-mobile'

import './index.less'

export default function Profile() {

    return (
        <div className='profile_root'>
            <div className="white_space">
            </div>
            <div className='self_info'>
                <div className='avatar'></div>
                <Button
                    type='primary'
                    className='edit_btn'
                    inline={true}
                >
                    Edit
                </Button>
                <div className='username'>Exlau</div>
            </div>
        </div>
    )
}
