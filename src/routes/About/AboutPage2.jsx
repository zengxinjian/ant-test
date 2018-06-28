import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Button, Icon } from 'antd';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Link, Events } from 'react-scroll';
import {FormattedMessage} from 'react-intl';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };

    Events.scrollEvent.register('begin', () => {
      const { phoneOpen } = this.state;
      if (phoneOpen === false) {
        return;
      }
      this.setState({
        phoneOpen: false,
      });
    });
  }

  static defaultProps = {
    className: 'AboutPage2',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <Button type="primary"><Link to={item.link} spy smooth duration={500}><FormattedMessage id={item.title}/></Link></Button>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { link: 'link_brief', title:'index.AboutPage2.brief' },
      { link: 'link_rule', title:'index.AboutPage2.rule' },
      { link: 'link_expert', title:'index.AboutPage2.expert' },
      { link: 'link_partner', title:'index.AboutPage2.partner' },
      { link: 'link_answer', title:'index.AboutPage2.answer' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
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
