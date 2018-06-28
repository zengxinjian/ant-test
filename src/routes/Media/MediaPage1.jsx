import React from 'react';
import {Link} from 'dva/router'
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {getIndexNews} from '../../utils/api'
import {indexNewsId} from '../../utils/constant'
import {http} from '../../utils/request'
import Fanyi from '../../components/fanyi/Fanyi'

class Content extends React.Component {

  static defaultProps = {
    className: 'MediaPage1',
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

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<Link key={`link-${i}`} to={`/details/${item.ID}`}>
      <li
        key={i}
        id={`${this.props.id}-${id}`}
      >
        <div className="content-wrapper">
          <img src={item.img} height="100%" />
          <Fanyi tagName="h2" className="title" cnText={item.title}/>
          <Fanyi tagName="p" className="content" cnText={item.content}/>
          <span>{item.createDate}</span>
        </div>
      </li>
    </Link>);
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

    const {newsData}=this.state;
    const dataArray =newsData.map(item=>({ID:item.ID,img:item.ImageThumbUrl,title:item.Title,createDate:item.CreateDate,content:item.Summary}))
    /*const dataArray = [
      { img: require(`../../assets/page3_title.png`), title: '深创学院深创学院的系类活动大赛视频深创学院的系类活动大赛视频的系类活动大赛视频', content: '2018-04-03' },
      { img: require(`../../assets/page3_title.png`), title: '深创学深创学院的系类活动大赛视频院的系类活动大赛视频', content: '2018-04-03' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类活动大赛视频', content: '2018-04-03' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院深创学院的系类活动大赛视频深创学院的系类活动大赛视频深创学院的系类活动大赛视频的系类活动大赛视频', content: '2018-04-03' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类深创学院的系类活动大赛视频深创学院的系类活动大赛视频深创学院的系类活动大赛视频活动大赛视频', content: '2018-04-03' },
      { img: require(`../../assets/page3_title.png`), title: '深创学院的系类深创学院的系类活动大赛视频深创学院的系类活动大赛视频深创学院的系类活动大赛视频活动大赛视频', content: '2018-04-03' },
    ];*/

    return (
      <div
        {...props}
        className="content-template-wrapper MediaPage1-wrapper"
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
            { dataArray.map(this.getChildrenToRender)}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
