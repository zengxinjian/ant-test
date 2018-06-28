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
    const {cnText='',enText='',tagName='span'}=this.props;
    this.state={
      cnText,
      tagName,
      enText,
    }
  }

  renderText=()=>{
    const {cnText,enText}=this.state;
    const {locale}=this.props;

    if(locale==='en_US'){
      return enText
    }
    return cnText;
  }

  componentWillReceiveProps(next,last){
    const {cnText:newText,enText:newEnText}=next;
    const {cnText:oldText,enText:oldEnText}=this.state;
    if(newText!=oldText || newEnText!=oldEnText){
      this.setState({
        cnText:newText,
        enText:newEnText,
      })
    }
  }

  render(){
    const {tagName="span",}=this.state;
    const CreateTag=tagName;

    return <CreateTag dangerouslySetInnerHTML={{__html: this.renderText()}}/>
  }

}

export  default connect(state=>(state.i18n))(Page);
