import { React, useEffect } from 'react'
import { Route, Router } from 'react-router-dom'
import Tabbar from './Tabbar'
import routes from '../../routes'
import './index.less'


export default function Index(props) {

    return (
        <div className="index_root">
            <Router history={props.history}>
                {
                    routes.map(item => {
                        return <Route
                            path={item.selectedTab}
                            component={item.component}
                            key={item.selectedTab}
                        />
                    })
                }
            </Router>
            <Tabbar history={props.history} />
        </div>
    )
}
