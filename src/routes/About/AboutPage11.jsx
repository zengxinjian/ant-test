import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {


  static defaultProps = {
    className: 'AboutPage11',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;

    return (
      <div
        {...props}
        className="AboutPage11-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
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
            <img width="100%" src={require(`../../assets/about/page11_banner.png`)} />
          </span>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
