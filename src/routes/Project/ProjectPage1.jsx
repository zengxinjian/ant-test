import React from 'react';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'ProjectPage1',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <p className="title">{item.title}</p>
        <p className="content">{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: 'Ant Design' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: 'Ant Motion' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: 'Ant Design' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: 'Ant Motion' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: 'Ant Design' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: 'Ant Motion' },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
