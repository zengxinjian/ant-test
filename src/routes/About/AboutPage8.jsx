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
      {img: '', title: 'index.aboutPage8.li1', content: [
          'index.aboutPage8.li2',
          'index.aboutPage8.li3',
          'index.aboutPage8.li4',
          'index.aboutPage8.li5',
          'index.aboutPage8.li6',
          'index.aboutPage8.li7',
        ]
      },
      {img: '', title: 'index.aboutPage8.li8', content: [
        'index.aboutPage8.li9',
        'index.aboutPage8.li10',
        'index.aboutPage8.li11',
        'index.aboutPage8.li12',
      ]
      },
      {img: '', title: 'index.aboutPage8.li13', content: [
        'index.aboutPage8.li14',
        'index.aboutPage8.li15',
        'index.aboutPage8.li16',
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
            <FormattedMessage id="aboutPage.stage4" tagName="p"/>
          </TweenOne>
          <TweenOne
            key="rowTow"
            animation={animType.one}
            className={`${props.className}-rowTow`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <Row className="sortImg">
              <Col span={4}><img src={require(`../../assets/about/page8_icon1.png`)} /></Col>
              <Col span={6} className="bor" />
              <Col span={4}><img src={require(`../../assets/about/page8_icon2.png`)} /></Col>
              <Col span={6} className="bor" />
              <Col span={4}><img src={require(`../../assets/about/page8_icon3.png`)} /></Col>
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
