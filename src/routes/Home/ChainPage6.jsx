import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'chainPage6',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    };
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
            <FormattedMessage id="index.chainPage6.title"/>
          </TweenOne>
          <TweenOne
            key="h2"
            animation={{ ...oneAnim, delay: 100 }}
            component="h2"
            id={`${props.id}-titleContent`}
          >
            <FormattedMessage id="index.chainPage6.viceTitle"/>
          </TweenOne>
          <TweenOne
            key="img1"
            animation={animType.one}
            className={`${props.className}-content1`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <img src={require(`../../assets/page6_img1.png`)} />
            <div className="content-text">
              <FormattedMessage id="index.chainPage6.cooperativeUnit" tagName="span"/>
              <FormattedMessage id="index.chainPage6.PlatformMedia" tagName="span"/>
            </div>
          </TweenOne>
          <TweenOne
            key="img2"
            animation={animType.one}
            className={`${props.className}-content2`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <img src={require(`../../assets/page6_img2.png`)} />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
