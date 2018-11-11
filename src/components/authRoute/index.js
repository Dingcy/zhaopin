import React,{ Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';

class AuthRoute extends Component{
    componentDidMount(){
        const publicList = ['/reg','/login'];
        const localPath = this.props.location.pathname;
        if(publicList.indexOf(localPath)>-1){
            return null;
        }
        axios.get('/user/infor').then((res) => {
            if(res.status === 200){
                if(res.data.code === 0){
                    // 登录信息存在
                    this.props.load(res.data.msg);
                }else{
                    this.props.history.push('/login');
                }
            }
        })
    }
    render(){
        return (
            null
        )
    }
}

const mapDispatch = (dispacth) => ({
    load(data){
        dispacth(actionCreators.loadData(data))
    }
})

export default connect(null,mapDispatch)(withRouter(AuthRoute));