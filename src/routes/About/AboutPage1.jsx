import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  constructor(p){
    super(p);
  }

  render() {
    const props = { ...this.props };
    const { headType={} } = this.props;
    delete props.isMode;
    delete props.headType;

    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
        style={{
          backgroundImage: `url(${require(`../../assets/about/${headType.bgImg}`)})`
        }}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img width="100%" src={require(`../../assets/about/${headType.textImg}`)} />
          </span>
        </QueueAnim>
      </OverPack>
    );
  }
}

Content.defaultProps = {
  className: 'AboutPage1',
};

export default Content;
