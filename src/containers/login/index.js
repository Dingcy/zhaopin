import React,{ Component } from 'react';
import { List, InputItem,Toast, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import Logo from '../../components/logo';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:''
        }
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    render(){
        const { isLogin } = this.props;
        return (
            <div>
            {isLogin?<Redirect to="/home" />:null}
            <Logo></Logo>
            <h2>登录页面</h2>
            <WingBlank>
            <List>
                <InputItem onChange={v => this.handleChange('user',v)}>用户名</InputItem>
                <WhiteSpace/>
                <InputItem type="password" onChange={v => this.handleChange('pwd',v)}>密码</InputItem>
            </List>
            <WhiteSpace/>
                <Button type="primary" onClick={this.login.bind(this)}>登录</Button> 
                <WhiteSpace/>
                <Button onClick={this.register.bind(this)} type="primary">注册</Button> 
            </WingBlank>
            </div>
        )
    }
    register(){
        this.props.history.push('/reg');
    }
    login(){
        if(!this.state.user || !this.state.pwd){
            Toast.fail('用户名或者密码不能为空',1);
        }else {
            this.props.login(this.state);
        }
    }

}

const mapState = (state) => ({
    isLogin:state.getIn(['login','isLogin'])
})

const mapDispatch = (dispatch) => ({
    login(data){
        dispatch(actionCreators.userLogin(data))
    }
})

export default connect(mapState,mapDispatch)(Login);