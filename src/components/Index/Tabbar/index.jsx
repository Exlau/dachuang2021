import { React, useEffect, useRef } from 'react'
import { TabBar } from 'antd-mobile';
import PubSub from 'pubsub-js';
import routes from '../../../routes';

import './index.less';


const Tabbar = (props) => {
    let state = {
        selectedTab: props.history.location.pathname,
    }

    useEffect(() => {
        state.selectedTab = props.history.location.pathname
    }, [])

    useEffect(() => {

    }, [props])
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedTab: this.props.history.location.pathname,
    //         hidden: false,
    //     };

    // }
    // componentDidMount() {
    //     this.setState({
    //         selectedTab: this.props.history.location.pathname
    //     })
    //     // this.tabChange = PubSub.subscribe('changeTab', (topic, message) => {
    //     //     // this.props.history.push(message)
    //     //     this.setState({
    //     //         selectedTab: this.props.history.location.pathname
    //     //     })
    //     // })
    // }

    // componentDidUpdate(prevProps) {
    //     // if (this.props.history.location.pathname === prevProps.history.location.pathname)
    //     //     this.setState({
    //     //         selectedTab: this.props.history.location.pathname
    //     //     })
    // }

    // componentWillUnmount() {
    //     // PubSub.unsubscribe(this.tabChange)
    // }

    const onPress = (e, tab) => {
        // this.props.history.push(tab)
        // this.setState({
        // selectedTab: this.props.history.location.pathname
        // })
        props.history.push(tab)
        state.selectedTab = props.history.location.pathname
    }


    return (
        <div
            className="tab_bar"
        >

            <TabBar
                className="tab_bar"
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={false}
                noRenderContent={true}
            >
                {
                    routes.map(item => {
                        return <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title={item.title}
                            key={item.key}
                            selected={state.selectedTab === item.selectedTab}
                            onPress={e => {
                                onPress(e, item.selectedTab)
                            }}
                        >
                        </TabBar.Item>

                    })
                }
            </TabBar>
        </div>
    );
}

export default Tabbar
