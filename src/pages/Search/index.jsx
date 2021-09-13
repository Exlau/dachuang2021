import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '美食'
        }
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    handelCancel = () => {
        this.props.history.goBack()
    }

    render() {
        return <div className="search_root">
            <SearchBar
                placeholder="Search"
                ref={ref => this.autoFocusInst = ref}
                onCancel={this.handelCancel}
            />
            <WhiteSpace />
        </div>;
    }
}


