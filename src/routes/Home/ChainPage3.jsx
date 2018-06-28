import React from 'react';
import {Link} from 'dva/router'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {getIndexNews} from '../../utils/api'
import {indexNewsId} from '../../utils/constant'
import {http} from '../../utils/request'
import {FormattedMessage} from 'react-intl';
import Fanyi from '../../components/fanyi/Fanyi'

class Content extends React.Component {
  static defaultProps = {
    className: 'chainPage3',
  };

  state={
    newsData:[],
  };

  constructor(p){
    super(p);
    http(getIndexNews,{ index:1,size:5,typeId:indexNewsId}).then(data=>{
      const {DataList=[]}=data;
      this.setState({
        newsData:DataList,
      })
    })
  }

  getImgUrl=(url)=>{
    const defaultNewImg=require('../../assets/defaultNews.png');
    return url || defaultNewImg;
  }

  getBlockChildren = (item, i) => (<Link to={`/details/${item.ID}`} key={`link-${i}`}>
    <li key={i} id={`${this.props.id}-block${i}`}>
      <img src={this.getImgUrl(item.icon)} />
      <div className="text-title">
        <Fanyi tagName="h2" cnText={item.title}/>
        <Fanyi tagName="p" cnText={item.content}/>
        <span>{item.createDate}</span>
      </div>
    </li>
  </Link>);

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;


    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    };
    const {newsData=[]}=this.state;
    let top1={},news=[];
   if(newsData && newsData.length>0){
     top1=newsData[0];
     news =[...newsData];
     news.shift();
   }
    const dataSource=news.map(item=>({ID:item.ID,icon:item.ImageThumbUrl,createDate:item.CreateDate,title:item.Title}));

    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="div"
            className={`${props.className}-title`}
            key="title"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            <FormattedMessage id="index.chainPage3.title" tagName="h1"/>
          </TweenOne>

          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <Link to={`/details/${top1.ID}`} key={`link-${props.id}`}>
            <span id={`${props.id}-img`}>
              <img width="100%" src={this.getImgUrl(top1.ImageUrl)} />
              <div className="content-img">
                {/*<h3>{top1.Title}</h3>*/}
                <Fanyi tagName="h3" cnText={top1.Title}/>
                <p>{top1.CreateDate}</p>
              </div>
            </span>
            </Link>
          </TweenOne>

          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            component="ul"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            {dataSource.map(this.getBlockChildren)}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
