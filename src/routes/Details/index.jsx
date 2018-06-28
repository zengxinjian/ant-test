import React from 'react';
import {connect} from 'dva'
import ReactDOM from 'react-dom';
import ScrollAnim from 'rc-scroll-anim';
import enquire from 'enquire.js';
import { BackTop } from 'antd';
import {IntlProvider} from 'react-intl';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {ENGLISH} from '../../utils/constant';

import Content1 from '../About/AboutPage1';
import Content2 from './DetailsPage1';
import Nav from '../Home/Nav';
import Footer from '../Home/Footer';

import './less/antMotion_style.less';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const {params={}}=this.props.match || {};
    this.state = {
      isMode: false,
      show: !location.port,
      params
    };
  }
  componentDidMount() {
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
    const {params}=this.state;
    const dataParames = {
      textImg: 'mtzx_textImg.png',
      bgImg: 'mtzx_banner.png',
    }
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" dispatch={dispatch} isMode={this.state.isMode} />,
      <Content1 id="ChainPage1"  headType={dataParames} key="ChainPage1" isMode={this.state.isMode} />,
      <Content2 id="DetailsPage1" params={params} key="DetailsPage1" isMode={this.state.isMode}/>,
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
