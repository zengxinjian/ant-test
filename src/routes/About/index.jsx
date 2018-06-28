import React from 'react';
import {connect} from 'dva'
import { BackTop } from 'antd';
import ReactDOM from 'react-dom';
import enquire from 'enquire-js';

import Nav from '../Home/Nav'
import Content1 from './AboutPage1';
import Content2 from './AboutPage2';
import Content3 from './AboutPage3';
import Content4 from './AboutPage4';
import Content5 from './AboutPage5';
import Content6 from './AboutPage6';
import Content7 from './AboutPage7';
import Content8 from './AboutPage8';
import Content9 from './AboutPage9';
import Content10 from '../Home/ChainPage4';
import Content11 from '../Home/ChainPage7';
import Content12 from './AboutPage10';
import Content13 from './AboutPage11';

import Footer from '../Home/Footer';

import './less/antMotion_style.less';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      show: !location.port,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
    window.scrollBy(0,0);
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }
  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const {i18n,dispatch}=this.props;
    const dataParames = {
      textImg: 'page1_textImg.png',
      bgImg: 'page1_banner.png',
    }
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" dispatch={dispatch} isMode={this.state.isMode} />,
      <Content1 id="aboutPage1" headType={dataParames}  key="aboutPage1" isMode={this.state.isMode}/>,
      <Content2 id="aboutPage2" key="aboutPage2" isMode={this.state.isMode}/>,
      <Content3 id="aboutPage3" key="aboutPage3" isMode={this.state.isMode}/>,
      <Content4 id="aboutPage4" key="aboutPage4" isMode={this.state.isMode}/>,
      <Content5 id="aboutPage5" key="aboutPage5" isMode={this.state.isMode}/>,
      <Content6 id="aboutPage6" key="aboutPage6" isMode={this.state.isMode}/>,
      <Content7 id="aboutPage7" key="aboutPage7" isMode={this.state.isMode}/>,
      <Content8 id="aboutPage8" key="aboutPage8" isMode={this.state.isMode}/>,
      <Content9 id="aboutPage9" key="aboutPage9" isMode={this.state.isMode}/>,
      <Content13 id="aboutPage11" key="aboutPage11" isMode={this.state.isMode}/>,
      <Content10 id="ChainPage4" key="ChainPage4" isMode={this.state.isMode} />,
      <Content11 id="ChainPage7" key="ChainPage7" isMode={this.state.isMode} />,
      <Content12 id="aboutPage10" key="aboutPage10" isMode={this.state.isMode} />,
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    );
  }
}

export default connect(state=>state)(Home);
