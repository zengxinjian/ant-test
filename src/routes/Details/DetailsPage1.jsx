import React from 'react';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {http} from '../../utils/request'
import {getNewsDetail} from '../../utils/api'
import Fanyi from '../../components/fanyi/Fanyi'
import FanyiHtml from '../../components/fanyi/FanyiHtml'
import {imageDomain} from '../../utils/constant'

class Content extends React.Component {

  static defaultProps = {
    className: 'DetailsPage1',
  };

  state={
    detail:{}
  }

  constructor(p){
    super(p);
    const {params}=this.props;
    const {id}=params
    http(getNewsDetail,{articleId:id}).then(data=>{
      this.setState({
        detail:data,
      })
    })
  }

  getDetail=(str)=>{
    if(!str){
      return str;
    }
    const imgReg = /<img.*?(?:>|\/>)/gi;
    const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    const arr = str.match(imgReg);

    if(!arr || arr.length<1){
      return str
    }
    for (var i = 0; i < arr.length; i++) {
      const src = arr[i].match(srcReg);
      if(!src[1] || src[1].indexOf('/')!==0){
        return str;
      }
      const imgUrl=`http://${imageDomain}${src[1]}`;
      str=str.replace(arr[i],`<img src="${imgUrl}"/>`);
    }
    return str
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const {detail={}}=this.state;


    return (
      <div
        {...props}
        className="content-template-wrapper DetailsPage1-wrapper"
      >
        <OverPack
          className={`content-template ${props.className}`}
          playScale={0.1}
        >
          <TweenOneGroup
            className={`${props.className}-wrapper`}
            component="ul"
            key="ul"
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            id={`${props.id}-ul`}
          >
            <div className="title">
              <Fanyi tagName="h1" cnText={detail.Title}/>
              <Fanyi tagName="h4" cnText={detail.CreateTime}/>
            </div>
            <div className="content">
              {/*<p dangerouslySetInnerHTML={{__html: this.getDetail(detail.ArticleContent)}}/>*/}
              <FanyiHtml
                tagName="p"
                enText={this.getDetail(detail.ArticleContentEn)}
                cnText={this.getDetail(detail.ArticleContent)}/>
            </div>
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
