import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'chainPage7',
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
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper link_partner`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img3"
            animation={animType.one}
            className={`${props.className}-content3`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <FormattedMessage
              id="index.chainPage7.title"
              tagName="h1"
            />
            <img src={require(`../../assets/page6_img3.png`)} />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
