import React from 'react'
import SearchZone from '../../components/Index/SearchZone'
import InfoCard from './InfoCard'
export default function Home(props) {
    return (
        <div className='home_root'>
            <div className="top_nav">
                <SearchZone history={props.history}></SearchZone>
            </div>
            <div className="center_info">
                <InfoCard history={props.history} params='dddd'></InfoCard>
                <InfoCard history={props.history}></InfoCard>
                <InfoCard history={props.history}></InfoCard>
                <InfoCard history={props.history}></InfoCard>
                <InfoCard history={props.history}></InfoCard>
            </div>
        </div>
    )
}
