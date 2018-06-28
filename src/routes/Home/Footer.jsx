import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {FormattedMessage} from 'react-intl';
import Fanyi from '../../components/fanyi/Fanyi';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
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
    return (<OverPack
      key="divfooter"
      {...props}
      playScale={0.05}
    >
      <div className="footer-content" key="div11">
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer1"
          className={`${props.className}-content-img`}
        >
          <img src={require(`../../assets/footer_Logo.png`)} />
        </TweenOne>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer3"
          id={`${props.id}-textWrapper`}
          className={`${props.className}-img`}
        >
          <img src={require(`../../assets/erweima.png`)} />
          <FormattedMessage id="index.footer.erweima" tagName="h2"/>
        </TweenOne>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer2"
          className="content-text"
        >
          <Fanyi
            tagName="p"
            cnText="地址：深圳市万国城B座6楼深创学院"
          />
          <Fanyi
            tagName="p"
            cnText="联系电话：0755-28912306"
          />
        </TweenOne>
      </div>
    </OverPack>);
  }
}

export default Footer;
