import React from 'react';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'AboutPage4',
  }

  getChildrenToRender = (item, i) => (
    <li key={i} id={`${this.props.id}-block${i}`}>
      <FormattedMessage id={item.title} tagName="p"/>
      {
        item.content.map((child, index) => (<FormattedMessage key={`p-${index}`} id={child}/>))
      }
    </li>);


  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    };
    const dataArray = [
      {img: '', title: 'index.aboutPage4.li1', content: [
          'index.aboutPage4.li2',
          'index.aboutPage4.li3',
        ]
      },
      {img: '', title: 'index.aboutPage4.li4', content: [
        'index.aboutPage4.li5',
      ]
      },
      {img: '', title: 'index.aboutPage4.li6', content: [
        'index.aboutPage4.li7',
        'index.aboutPage4.li8',
        'index.aboutPage4.li9',
      ]},
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);

    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper link_rule`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="div"
            key="title"
            reverseDelay={300}
            className={`${props.className}-title`}
            id={`${props.id}-title`}
          >
            <FormattedMessage
              id="index.AboutPage4.title"
              tagName="h1"
            />
            <FormattedMessage id="aboutPage.stage1" tagName="p"/>
          </TweenOne>
          {
            isMode ? <TweenOne
                key="rowTow-phone"
                animation={animType.one}
                className={`${props.className}-rowTow-phone`}
                id={`${props.id}-imgWrapper-phone`}
                resetStyleBool
              >
                {/*<dl className="dl-textContent">*/}
                  {/*<li>*/}
                    {/*<img src={require(`../../assets/about/page4_icon1.png`)} />*/}
                    {/*<h2>报名入口</h2>*/}
                    {/*<p>深创学院官方微信</p>*/}
                    {/*<p>深创学院官方网站</p>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<h2>报名截止时间</h2>*/}
                    {/*<p>2018年4月30日</p>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                    {/*<h2>报名要求</h2>*/}
                    {/*<p>面向全球翻译征集区块链技术</p>*/}
                    {/*<p>与面向的创新业项目</p>*/}
                  {/*</li>*/}
                {/*</dl>*/}

                <div className="img-flex">
                  <div className="content">
                    <img src={require(`../../assets/about/page4_icon1.png`)} />
                    <span className="content-text">
                      <p>我天</p>
                      <p>阿萨德发生大幅</p>
                      <p>阿萨德发生大幅</p>
                      <p>阿萨德发生大幅</p>
                      <p>阿萨德发生大幅</p>
                    </span>

                  </div>
                </div>

              </TweenOne> : <TweenOne
              key="rowTow"
              animation={animType.one}
              className={`${props.className}-rowTow`}
              id={`${props.id}-imgWrapper`}
              resetStyleBool
            >
              <Row className="sortImg">
                <Col span={4}><img src={require(`../../assets/about/page4_icon1.png`)} /></Col>
                <Col span={6} className="bor" />
                <Col span={4}><img src={require(`../../assets/about/page4_icon2.png`)} /></Col>
                <Col span={6} className="bor" />
                <Col span={4}><img src={require(`../../assets/about/page4_icon3.png`)} /></Col>
              </Row>
              <ul className="sortText">
                {childrenToRender}
              </ul>
            </TweenOne>
          }
        </OverPack>
      </div>
    );
  }
}


export default Content;
