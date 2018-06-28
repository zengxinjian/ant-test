import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'chainPage2',
  };

  getBlockChildren = (item, i) => (
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <FormattedMessage id={item.title} tagName="h3"/>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: require(`../../assets/page2_icon1.png`), title: 'index.chainPage2.icon1', content: '' },
      { icon: require(`../../assets/page2_icon2.png`), title: 'index.chainPage2.icon2', content: '' },
      { icon: require(`../../assets/page2_icon3.png`), title: 'index.chainPage2.icon3', content: '' },
      { icon: require(`../../assets/page2_icon4.png`), title: 'index.chainPage2.icon4', content: '' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          playScale={0.1}
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="div"
            key="title"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            <FormattedMessage
              id="index.chainPage2.title1"
              tagName="h1"
            />
            <FormattedMessage
              id="index.chainPage2.title2"
              tagName="h4"
            />
            <FormattedMessage
              id="index.chainPage2.title3"
              tagName="p"
            />
            <FormattedMessage
              id="index.chainPage2.title4"
              tagName="p"
            />
            <FormattedMessage
              id="index.chainPage2.title5"
              tagName="p"
            />
            <FormattedMessage
              id="index.chainPage2.title6"
              tagName="p"
            />
            <FormattedMessage
              id="index.chainPage2.title7"
              tagName="p"
            />
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
