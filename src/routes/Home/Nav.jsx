import React from 'react';
import {connect} from 'dva'
import {routerRedux} from 'dva/router'
import TweenOne from 'rc-tween-one';
import { Menu,Icon } from 'antd';
import {FormattedMessage} from 'react-intl';
import { Link } from  'dva/router';

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    const locale=localStorage.getItem('locale') || 'zh_CN';
    this.state = {
      phoneOpen: false,
      locale,
    };
  }

  changeLocale=({key})=>{
    this.setState({
      locale:key,
    })
    const {dispatch}=this.props;
    dispatch({type: 'i18n/setLocale', locale: key})
  }

  phoneClick = ({key}) => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    },()=>{
      if(key==='zh_CN' || key==='en_US'){
        this.changeLocale({key})
      }
    });
  }

  clickMenu=({key})=>{
    const {dispatch,isMode}=this.props;
    let url=''
    switch (key){
      case 'menu_1':
        url='/';
        break;
      case 'menu_2':
        url='/about';
        break;
      case 'menu_3':
        url='/Project';
        break;
      case 'menu_4':
        url='/Media';
        break;
    }
    if(isMode){
      this.phoneClick({key})
    }
    dispatch(routerRedux.push({
      pathname:url
    }))
  }

  render() {
    const props = { ...this.props };
    const {locale}=this.state;
    const isMode = props.isMode;
    delete props.isMode;
    delete props.dispatch;

    const navData = [
      {
        id:'1',
        title:'nav.menu1',
        children:[]
      },
      {
        id:'2',
        title:'nav.menu2',
        /*children:[
          {
            id:'1',
            title:'大赛简介',
          },
          {
            id:'2',
            title:'大赛规则',
          },
        ]*/
      },
      /*{
        id:'3',
        title:'nav.menu3',
        children:[]
      },*/
      {
        id:'4',
        title:'nav.menu4',
        children:[]
      }
    ] ;
    const navChildren = navData.map(item=>{
      const {id,title,children}=item;
      if(children && children.length>0){
        return <SubMenu
          onClick={this.clickMenu}
          title={<span>
            <FormattedMessage id={title}/>
            {
              !isMode?<span>&nbsp;&nbsp;<Icon type="down"/></span>:''
            }
          </span>}
          key={`menu_${id}`}>
          {
            children.map(child=>(
              <Item key={`sub_${child.id}`}>{child.title}</Item>
            ))
          }
        </SubMenu>
      }
      return <Item key={`menu_${id}`}>
        <FormattedMessage id={title}/>
      </Item>
    })

    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <Link to="/"><img width="100%" src={require(`../../assets/head_logo.png`)} /></Link>
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={this.phoneClick}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['0']}
            onClick={this.clickMenu}
            mode="inline"
            theme="dark"
          >
            {navChildren}
            <SubMenu
              title={locale==='zh_CN'?'中文':'English'}>
              <Item key="zh_CN" >中文</Item>
              <Item key="en_US" >English</Item>
            </SubMenu>
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal"
          onClick={this.clickMenu}
          defaultSelectedKeys={['0']}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
        <Menu className={`${this.props.className}-fanyi`} mode="horizontal" onClick={this.changeLocale}>
          <SubMenu
            title={
            <span>
              {locale==='zh_CN'?'中文':'English'} &nbsp;&nbsp;<Icon type="down"/>
          </span>
          }>
            <Item key="zh_CN" >中文</Item>
            <Item key="en_US" >English</Item>
          </SubMenu>
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}


Header.defaultProps = {
  className: 'header0',
};

export default Header;
