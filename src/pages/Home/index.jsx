import { React, useState, useEffect } from 'react'
import SearchZone from '../../components/Index/SearchZone'
import InfoCard from './InfoCard'
import { getPosts } from '../../apis/posts'
import { Toast } from 'antd-mobile'

export default function Home(props) {
    const [homePosts, sethomePosts] = useState([])

    useEffect(() => {
        getPosts(10, false)
            .then(res => {
                sethomePosts(res.data.list)
                console.log(res.data.list)
            })
            .catch(err => {
                Toast.info(err.data.error)
            })
    }, [])

    return (
        <div className='home_root'>
            <div className="top_nav">
                <SearchZone history={props.history}></SearchZone>
            </div>
            <div className="center_info">
                {
                    homePosts.map(item => {
                        return <InfoCard history={props.history} {...item} />
                    })
                }
                {/* <InfoCard history={props.history} ></InfoCard>
                <InfoCard history={props.history}></InfoCard>
                <InfoCard history={props.history}></InfoCard>
                <InfoCard history={props.history}></InfoCard>
                <InfoCard history={props.history}></InfoCard> */}
            </div>
        </div>
    )
}
