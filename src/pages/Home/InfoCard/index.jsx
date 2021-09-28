import { React, useEffect } from 'react'
import { Card, WhiteSpace } from 'antd-mobile';

export default function InfoCard(props) {

    const handleClick = () => {
        props.history.push(`/detail/${props.params}`,)
    }

    return (
        <div>
            <WhiteSpace size="lg" />
            <Card full onClick={handleClick}>
                <Card.Header
                    title={props.title}
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                />
                <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
        </div>
    )
}

