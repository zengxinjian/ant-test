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
      {img: '', title: 'index.aboutPage6.li1', content: [
          'index.aboutPage6.li2',
        ]
      },
      {img: '', title: 'index.aboutPage6.li3', content: [
        'index.aboutPage6.li4',
        'index.aboutPage6.li5',
        'index.aboutPage6.li6',
        'index.aboutPage6.li7',
        'index.aboutPage6.li8',
        'index.aboutPage6.li9',
      ]
      },
      {img: '', title: 'index.aboutPage6.li10', content: [
        'index.aboutPage6.li11',
        'index.aboutPage6.li12',
        'index.aboutPage6.li13',
      ]},
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);

    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
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
            <FormattedMessage id="aboutPage.stage2" tagName="p"/>
          </TweenOne>
          <TweenOne
            key="rowTow"
            animation={animType.one}
            className={`${props.className}-rowTow`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <Row className="sortImg">
              <Col span={4}><img src={require(`../../assets/about/page6_icon1.png`)} /></Col>
              <Col span={6} className="bor" />
              <Col span={4}><img src={require(`../../assets/about/page6_icon2.png`)} /></Col>
              <Col span={6} className="bor" />
              <Col span={4}><img src={require(`../../assets/about/page6_icon3.png`)} /></Col>
            </Row>
            <ul className="sortText">
              {childrenToRender}
            </ul>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
