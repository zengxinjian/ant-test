import React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Button } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';
import Fanyi from '../../components/fanyi/Fanyi'

class Content extends React.Component {

  static defaultProps = {
    className: 'chainPage4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={id}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <FormattedMessage id={item.title} tagName={item.title.length==2?"h2":"h3"} />
        {
          item.content.map((child, index) => (<FormattedMessage tagName="p" key={`p-${index}`} id={child}/>))
        }

        <div>

        </div>
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
      {
        img: require(`../../assets/page4_head1.png`),
        title: 'index.chainPage4.name1',
        content: [
          'index.chainPage4.content1',
          'index.chainPage4.content2',
          'index.chainPage4.content3'
      ]
      },
      {
        img: require(`../../assets/page4_head2.png`),
        title: 'index.chainPage4.name2',
        content: [
          'index.chainPage4.content4',
          'index.chainPage4.content5',
          'index.chainPage4.content6',
        ]
      },
      {
        img: require(`../../assets/page4_head3.png`),
        title: 'index.chainPage4.name3',
        content: [
          'index.chainPage4.content7',
          'index.chainPage4.content8',
          'index.chainPage4.content9',
        ]
      },
      {
        img: require(`../../assets/page4_head4.png`),
        title: 'index.chainPage4.name4',
        content: [
          'index.chainPage4.content10',
          'index.chainPage4.content11',
          'index.chainPage4.content12',
        ]
      },
      {
        img: require(`../../assets/page4_head5.png`),
        title: 'index.chainPage4.name5',
        content: [
          'index.chainPage4.content13',
          'index.chainPage4.content14',
          'index.chainPage4.content15',
        ]
      },
      {
        img: require(`../../assets/page4_head6.png`),
        title: 'index.chainPage4.name6',
        content: [
          'index.chainPage4.content16',
          'index.chainPage4.content17',
          'index.chainPage4.content18',
          'index.chainPage4.content19',
        ]
      },
      {
        img: require(`../../assets/page4_head7.png`),
        title: 'index.chainPage4.name7',
        content: [
          'index.chainPage4.content20',
          'index.chainPage4.content21',
          'index.chainPage4.content22',
          'index.chainPage4.content23',
          'index.chainPage4.content24',
        ]
      },
      {
        img: require(`../../assets/page4_head8.png`),
        title: 'index.chainPage4.name8',
        content: [
          'index.chainPage4.content25',
          'index.chainPage4.content26',
        ]
      },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        key='content4-wrapper'
        className="content-template-wrapper chainPage4-wrapper link_expert"
      >
        <OverPack
          key="content-template"
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            <FormattedMessage id="index.chainPage4.title"/>
          </TweenOne>
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
