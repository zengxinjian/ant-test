import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    const childrenData = [1,2,3];
    const childrenToRender = childrenData.map((item, i) => {
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className={`bg bg${i}`}
          key="bg"
        />
      </Element>);




    });
    const width=window.innerWidth;
    const heigth=width*900/1920;

    return (
      <OverPack
        {...props}
        key="OverPack"
        style={{
          height:heigth+'px'
        }}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              autoPlay={true}
              key="banner"
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
      </OverPack>
    );
  }
}

Banner.defaultProps = {
  className: 'chainPage1',
};

export default Banner;

