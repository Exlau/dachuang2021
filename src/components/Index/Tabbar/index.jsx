import React from 'react'
import { TabBar } from 'antd-mobile';
import PubSub from 'pubsub-js';
import routes from '../../../routes';

import './index.less';


export default class Tabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.history.location.pathname,
            hidden: false,
        };

    }
    componentDidMount() {
        this.tabChange = PubSub.subscribe('changeTab', (topic, message) => {
            // this.props.history.push(message)
            this.setState({
                selectedTab: this.props.history.location.pathname
            })
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.tabChange)
    }

    onPress = (e, tab) => {
        this.props.history.push(tab)
        this.setState({
            selectedTab: this.props.history.location.pathname
        })
    }


    render() {
        return (
            <div
                className="tab_bar"
            >

                <TabBar
                    className="tab_bar"
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    noRenderContent={true}
                >
                    {
                        routes.map(item => {
                            return <TabBar.Item
                                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                                title={item.title}
                                key={item.key}
                                selected={this.state.selectedTab === item.selectedTab}
                                onPress={e => {
                                    this.onPress(e, item.selectedTab)
                                }}
                            >
                            </TabBar.Item>

                        })
                    }
                </TabBar>
            </div>
        );
    }
}
