import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'AboutPage5',
  }
  getBlockChildren = (item, i) => (<div key={i}>
    <FormattedMessage id={item.title} tagName="h3"/>
    {
      item.content.map((child, index) => (<FormattedMessage key={`p-${index}`} id={child} tagName="p"/>))
    }
  </div>);

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    };
    delete props.isMode;
    const dataList = [
      {title: 'index.aboutPage5.title1', content: [
        'index.aboutPage5.p1',
        'index.aboutPage5.p2',
        'index.aboutPage5.p3',
      ]},
      {title: 'index.aboutPage5.title2', content: [
        'index.aboutPage5.p4',
        'index.aboutPage5.p5',
        'index.aboutPage5.p6',
        'index.aboutPage5.p7',
        'index.aboutPage5.p8',
        'index.aboutPage5.p9',
      ]},
      {title: 'index.aboutPage5.title3', content: [
        'index.aboutPage5.p10',
        'index.aboutPage5.p11',
        'index.aboutPage5.p12',
        'index.aboutPage5.p13',
      ]},
    ];
    const listChildren = dataList.map(this.getBlockChildren);

    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
        key="wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
          key="OverPack"
        >
          <TweenOne
            key="rowTow"
            animation={animType.one}
            className={`${props.className}-text`}
            id={`${props.id}-textWrapper`}
            resetStyleBool
          >
            <FormattedMessage id="index.aboutPage5.h2" tagName="h2"/>
            <div className="relevant">
              {listChildren}
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
