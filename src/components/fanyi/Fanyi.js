/**
 * Created by Administrator on 2018/4/3.
 */
import React from 'react'
import {connect} from 'dva'
import {http} from '../../utils/request'
import {fanyi} from '../../utils/trans'

class Page extends React.Component{

  constructor(p){
    super(p)
    const {cnText='',tagName='span'}=this.props;
    this.state={
      cnText,
      tagName,
      enText:''
    }

    this.changeCNText()
  }

  changeCNText=()=>{
    const {dispatch}=this.props;
    const {cnText}=this.state;
    if(!cnText){
      return;
    }
    fanyi({query:cnText}).then(data=>{
      const {trans_result=[]}=data;
      const {src,dst}=trans_result[0] || {}
      this.setState({
        enText:dst
      })
    })
  }

  renderText=()=>{
    const {cnText,enText}=this.state;
    const {locale}=this.props;

    if(locale==='en_US' && enText){
      return enText
    }
    return cnText;
  }

  componentWillReceiveProps(next,last){
    const {cnText:newText}=next;
    const {cnText:oldText}=this.state;
    if(newText!=oldText){
      this.setState({
        cnText:newText,
      },this.changeCNText)
    }
  }

  render(){
    const {tagName="span",}=this.state;
    const CreateTag=tagName;

    return <CreateTag>{this.renderText()}</CreateTag>
  }

}

export  default connect(state=>(state.i18n))(Page);
