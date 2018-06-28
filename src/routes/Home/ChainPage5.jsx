import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import FanYi from '../../components/fanyi/Fanyi'

class Content extends React.Component {

  static defaultProps = {
    className: 'chainPage5',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <FanYi tagName="p" cnText={item.text}/>
      {/*<div className="icon">
        <img src={item.icon} width="100%" />
      </div>*/}
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: require(`../../assets/page5_icon1.png`),text:'1：区块链创赛首档路演类真人秀节目' },
      { icon: require(`../../assets/page5_icon2.png`),text:'2：邀约全球30个国家 组织500个参赛项目方' },
      { icon: require(`../../assets/page5_icon3.png`),text:'3：12集赛制录播节目  网络直播与卫视平台亿万传播量' },
      { icon: require(`../../assets/page5_icon4.png`),text:'4：业内资本方与大咖评审以及区块链底层应用评分系统' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        key="div-wrapper"
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          key="templates"
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
