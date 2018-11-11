import React,{ Component } from 'react';
import { List, InputItem,Toast, WhiteSpace,WingBlank,Button,Radio} from 'antd-mobile';
import Logo from '../../components/logo';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'niuren'
        };
        this.reg = this.reg.bind(this);
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    };
    reg(){
        if(!this.state.pwd || !this.state.user || !this.state.repeatpwd){
            Toast.fail('用户名或者密码不能为空',2);
            return null;
        }else if(this.state.pwd !== this.state.repeatpwd){
            Toast.fail('密码和确认密码不一致',2);
            return null;
        }
        this.props.regUser(this.state);
    }
    render(){
        const RadioItem = Radio.RadioItem;
        const { isRegister,redirect}  = this.props;
        if(!isRegister){
            return (
                <div>
                    <Logo></Logo>
                    <WingBlank>
                <List>
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem onChange={v=>this.handleChange('type','niuren')} checked={this.state.type === 'niuren'}>牛人</RadioItem>
                    <RadioItem onChange={v=>this.handleChange('type','boss')} checked={this.state.type === 'boss'}>BOSS</RadioItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.reg}>注册</Button>
                </List>
                </WingBlank>
                </div>
            )
        }else {
            return < Redirect to={redirect} />
        }
       
    }
   
}

const mapState = (state) => ({
    isRegister:state.get('register').get('isRegister'),
    msg:state.get('register').get('msg'),
    redirect:state.get('register').get('redirect'),
})

const mapDispatch = (dispatch)=>({
    regUser(data){
        dispatch(actionCreators.RegUserInfor(data))
    }
})

export default connect(mapState,mapDispatch)(Register);