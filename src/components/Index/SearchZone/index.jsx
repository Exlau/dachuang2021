import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import PubSub from 'pubsub-js';
import './index.less'

export default class SearchZone extends React.Component {
    constructor(props) {
        super(props)
    }

    onChange = (value) => {
        this.setState({ value });
    };

    clear = () => {
        this.setState({ value: '' });
    };

    handleClick = () => {
        this.props.history.push('/index/search')
        PubSub.publish('changeTab', '/index/search')
        // console.log(this.props.history.location.pathname)
    }

    render() {
        return (<div>
            <SearchBar
                placeholder="Search"
                onFocus={this.handleClick}
            />
            <WhiteSpace />

        </div>);
    }
}
