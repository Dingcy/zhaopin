import React,{ Component } from 'react';
import { NavBar, Toast,InputItem,TextareaItem,Button } from 'antd-mobile';
import AvatarSelector from '../../components/avatarSelector';
import { actionCreators } from './store';
import { connect } from 'react-redux';





class BossInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:'',
            company:'',
            salary:'',
            desc:''
        }
    }

    handelChange(key,value){
        this.setState({
            [key]:value
        })
    }

    saveInfo(){
        if(!this.state.company || !this.state.title || !this.state.desc || !this.state.salary){
            Toast.fail('请填写必填项',2);
            return null;
        }
        this.props.saveInfor(this.state);
    }

    render(){
        return (
            <div>
                <NavBar mode="dark" leftContent="Back">BOSS完善信息</NavBar>
                <AvatarSelector selectAvatar={(ele) => {
                    this.setState({
                        avatar:ele
                    })}} />
                <InputItem onChange={v => this.handelChange('title',v)}>招聘职位</InputItem>
                <InputItem onChange={v => this.handelChange('company',v)}>公司名称</InputItem>
                <InputItem onChange={v => this.handelChange('salary',v)}>职位薪资</InputItem>
                <TextareaItem onChange={v => this.handelChange('desc',v)} rows={3} autoHeight title='职位要求'></TextareaItem>
                <Button type='primary' onClick={this.saveInfo.bind(this)}>保存</Button>
            </div>
        )
    }
}

const mapDispatchToProps =  (dispatch) => ({
    saveInfor(data){
        dispatch(actionCreators.saveInfo(data));
    } 
})

export default connect(null,mapDispatchToProps)(BossInfo);