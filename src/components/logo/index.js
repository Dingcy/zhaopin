import React,{ Component } from 'react';
import { LogoContainer } from './style';
import LogoImg from '../../static/job.png';

class Logo extends Component{
    render(){
        return (
            <LogoContainer>
                <img src={LogoImg} alt=""/>
            </LogoContainer>
        )
    }
}

export default Logo;