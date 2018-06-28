/**
 * Created by Administrator on 2018/4/3.
 */

const data={
  'index.chainPage4.name1':'袁岳',
  'index.chainPage4.content1':'未来商习院董事局主席',
  'index.chainPage4.content2':'零点有数集团董事长',
  'index.chainPage4.content3':'飞马旅联合发起人',
  'index.chainPage4.name2':'冯晞',
  'index.chainPage4.content4':'未来商习院院长',
  'index.chainPage4.content5':'零点有数集团高级副总裁',
  'index.chainPage4.content6':'零点国际发展研究院院长',
  'index.chainPage4.name3':'刘科',
  'index.chainPage4.content7':'南方科技大学院士',
  'index.chainPage4.content8':'澳大利亚国家工程院院士',
  'index.chainPage4.content9':'环球资源公司合伙人',
  'index.chainPage4.name4':'郭昕',
  'index.chainPage4.content10':'未来商习院中方首席顾问',
  'index.chainPage4.content11':'工信部中欧工业4.0研究院中方院长',
  'index.chainPage4.content12':'曾任IDC大中华区总裁',
  'index.chainPage4.name5':'戴维霍尔',
  'index.chainPage4.content13':'未来商习院国际荣誉院长',
  'index.chainPage4.content14':'美国著名未来学家',
  'index.chainPage4.content15':'影响全球上千CEO',
  'index.chainPage4.name6':'沈寓实',
  'index.chainPage4.content16':'世纪互联集团副总裁首席技术官',
  'index.chainPage4.content17':'微软公司战略顾问',
  'index.chainPage4.content18':'中国云体系产业创',
  'index.chainPage4.content19':'新战略联盟秘书长',
  'index.chainPage4.name7':'顾嘉唯',
  'index.chainPage4.content20':'物灵科技联合创始人',
  'index.chainPage4.content21':'前百度少帅',
  'index.chainPage4.content22':'深度学习研究',
  'index.chainPage4.content23':'院主任研发构架师/首席设计师',
  'index.chainPage4.content24':'入选MIT科技创新新35杰',
  'index.chainPage4.name8':'鲍鹏山',
  'index.chainPage4.content25':'文学博士、作家、学者',
  'index.chainPage4.content26':'央视《百家讲坛》主讲嘉宾',
}
const keys=Object.keys(data);
const promiseAll=[];
let result='';

keys.map(key=>{
  promiseAll.push(fanyi({query:data[key]}));
})

Promise.all(promiseAll).then((values)=>{
  values.map(value=>{
    const {trans_result={}}=value;
    const {dst,src}=trans_result[0];
    const temp=keys.filter(key=>data[key]===src);
    result+=`"${temp}":"${dst}",`;
  })
  console.log(result)
})
