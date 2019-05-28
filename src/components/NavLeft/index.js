import React, { Component } from 'react';
import './index.less'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu = (data)=>{
        //console.log('111111',data);
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                       <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>共享单车管理</h1>
                </div>
                <Menu theme='dark'>
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}

export default NavLeft;