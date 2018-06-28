import React from 'react';
import {connect} from 'dva'
import ReactDOM from 'react-dom';
import ScrollAnim from 'rc-scroll-anim';
import enquire from 'enquire.js';
import { BackTop } from 'antd';
import {IntlProvider} from 'react-intl';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {ENGLISH} from '../../utils/constant';


import Nav from './Nav';
import Content1 from './ChainPage1';
import Content2 from './ChainPage2';
import Content3 from './ChainPage3';
import Content4 from './ChainPage4';
import Content5 from './ChainPage5';
import Content6 from './ChainPage6';
import Content7 from './ChainPage7';
import Footer from './Footer';

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
    window.scrollBy(0,0);
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
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
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" dispatch={dispatch} isMode={this.state.isMode} />,
      <Content1 id="ChainPage1" key="ChainPage1" isMode={this.state.isMode} />,
      <Content2 id="ChainPage2" key="ChainPage2" isMode={this.state.isMode} />,
      <Content3 id="ChainPage3" key="ChainPage3" isMode={this.state.isMode} />,
      <Content4 id="ChainPage4" key="ChainPage4" isMode={this.state.isMode} />,
      <Content5 id="ChainPage5" key="ChainPage5" isMode={this.state.isMode} />,
      <Content6 id="ChainPage6" key="ChainPage6" isMode={this.state.isMode} />,
      <Content7 id="ChainPage7" key="ChainPage7" isMode={this.state.isMode} />,
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />,
    ];


    return (
      <IntlProvider locale={i18n.locale} messages={i18n.messages}>
        <div className="templates-wrapper">
          {this.state.show && children}
          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>
        </div>
      </IntlProvider>
    );
  }
}
export default connect(state=>state)(Home);
