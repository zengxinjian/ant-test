import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {
  static defaultProps = {
    className: 'AboutPage3',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    };

    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper link_brief`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
          playScale={0.1}
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
              id="index.AboutPage3.title"
              tagName="h1"
            />
            <FormattedMessage
              id="index.AboutPage3.lianzhan"
              tagName="h3"
            />
          </TweenOne>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={require(`../../assets/about/page3_bg.png`)} />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <FormattedMessage
              id="index.aboutPage3.p1"
              tagName="p"
            />
            <FormattedMessage
              id="index.aboutPage3.p2"
              tagName="p"
            />
            <FormattedMessage
              id="index.aboutPage3.p3"
              tagName="p"
            />
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="div"
            key="form"
            reverseDelay={300}
            className={`${props.className}-form`}
            id={`${props.id}-form`}
          >
            <Row className="rowTitle">
              <Col span={7}><FormattedMessage id="index.aboutPage3.row1" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.row2" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.row3" tagName="p"/></Col>
              <Col span={7}><FormattedMessage id="index.aboutPage3.row4" tagName="p"/></Col>
            </Row>
            <Row className="rowContent">
              <Col span={7}><FormattedMessage id="index.aboutPage3.col1" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.col2" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.col3" tagName="p"/></Col>
              <Col span={7}><FormattedMessage id="index.aboutPage3.col4" tagName="span"/></Col>
            </Row>
            <Row className="rowTitle">
              <Col span={7}><FormattedMessage id="index.aboutPage3.row5" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.row6" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.row7" tagName="p"/></Col>
              <Col span={7}><FormattedMessage id="index.aboutPage3.row8" tagName="p"/></Col>
            </Row>
            <Row className="rowContent">
              <Col span={7}><FormattedMessage id="index.aboutPage3.col5" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.col6" tagName="p"/></Col>
              <Col span={5}><FormattedMessage id="index.aboutPage3.col7" tagName="p"/></Col>
              <Col span={7}><FormattedMessage id="index.aboutPage3.col8" tagName="span"/></Col>
            </Row>
          </TweenOne>

        </OverPack>
      </div>
    );
  }

}


export default Content;
