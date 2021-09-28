import { React, useEffect } from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default function BackBar(props) {

    useEffect(() => {

    }, [])

    const handleLeftClick = () => {
        props.history.goBack()
    }

    return (
        <div className='backbar_root'>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={handleLeftClick}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{props.title ? props.title : props.history.location.pathname}</NavBar>

        </div>
    )
}
