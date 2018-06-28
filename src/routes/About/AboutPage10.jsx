import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'AboutPage10',
  };

  getChildrenToRender = (item, i) => (
    <div key={i} id={`${this.props.id}-block${i}`} className="problemList">
      <FormattedMessage id={item.title} tagName="span"/>
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
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const dataArray = [
      {title: 'index.aboutPage10.li1', content: [
        'index.aboutPage10.li2'
      ]},
      {title: 'index.aboutPage10.li3', content: [
        'index.aboutPage10.li4',
        'index.aboutPage10.li5',
        'index.aboutPage10.li6',
      ]},
      {title: 'index.aboutPage10.li7', content: [
        'index.aboutPage10.li8',
        'index.aboutPage10.li9',
        'index.aboutPage10.li10',
        'index.aboutPage10.li11',
        'index.aboutPage10.li12',
        'index.aboutPage10.li13',
        'index.aboutPage10.li14',
        'index.aboutPage10.li15',
        'index.aboutPage10.li16',
        'index.aboutPage10.li17',
        'index.aboutPage10.li18',
        'index.aboutPage10.li19',
      ]},
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);

    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper link_answer`}>
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
            <FormattedMessage id="index.aboutPage10.title" tagName="h1"/>
            {childrenToRender}
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
