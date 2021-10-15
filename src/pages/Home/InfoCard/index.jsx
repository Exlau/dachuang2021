import { React, useEffect } from 'react'
import { Card, WhiteSpace } from 'antd-mobile';

// title partialContent competition nickname
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
                    extra={<span>{props.nickname}</span>}
                />
                <Card.Body>
                    <div dangerouslySetInnerHTML={{ __html: props.partialContent }}></div>
                </Card.Body>
                <Card.Footer content={props.competition} extra={<div>extra footer content</div>} />
            </Card>
        </div >
    )
}

