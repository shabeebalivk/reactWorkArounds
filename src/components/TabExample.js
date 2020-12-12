import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './TabExample.css';
import LeftArrow from '../images/left-arrow.png'
import RightArrow from '../images/right-arrow.png'

// list of items


// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}

    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { name, id } = el;

        return <MenuItem text={name} key={id} selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
            style={{ zIndex: 100 }}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: <img src={LeftArrow} alt="left arrow" style={{ height: 30, width: 25, }} />, });
const ArrowRight = Arrow({ text: <img src={RightArrow} alt="left arrow" style={{ height: 30, width: 25 }} />, });

const selected = 1;

class TabExample extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(this.props.categories, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
        this.props.onTabChange(key)
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="mainContainer">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                    menuClass="menuClass"
                    arrowClass="arrowClass"
                    wrapperClass="wrapperClass"
                    innerWrapperClass="innerWrapperClass"
                    itemClass="itemClass"
                    itemClassActive="itemClassActive"
                />
            </div>
        );
    }
}

export default TabExample