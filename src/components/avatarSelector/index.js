import React,{ Component } from 'react';
import { Grid,List } from 'antd-mobile';





class AvatarSelector extends Component {

    constructor(props){
        super(props);
        this.state = {}
        
    }

  

    render(){
        const list = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                        .split(',').map(v => ({
                            icon: require('../../static/img/'+v+'.png'),
                            text: `${v}`,
                        }));
        const render = this.state.icon ?(<div>
            <span>已选择头像</span>
            <img style={{width:20}} src={this.state.icon} alt=""/>
        </div>):'请选择头像'                
        return (
            <List renderHeader={()=>render}>
                <Grid onClick={ ele => {
                    this.setState(ele);
                    this.props.selectAvatar(ele.text)} 
                } 
                data={list} columnNum={5} />
        
            </List>
        )
    }
}


export default AvatarSelector;