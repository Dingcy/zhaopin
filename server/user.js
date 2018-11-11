const express = require('express');
const md5 = require('md5');
const Router = express.Router();
const model = require('./medal.js');

const User = model.getModel('user');
const _filter = {'pwd':0,'_v':0}


Router.get('/infor',function (req,res) {
    console.log(req);
    const { userid } = req.cookies;
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function (err,data) {
        if(err){
            return res.json({code:1})
        }
        if(data){
            return res.json({code:0,msg:data})
        }
    })
})
Router.get('/list',function (req,res) {
    User.find({},function (err,doc) {
        return res.json(doc);     
    })
})
// 注册接口
Router.post('/reg',function(req,res){
    const regData = req.body;
    User.findOne({user:regData.user},function (err,doc) {
        if(doc){
            return res.json({code:1,msg:'该用户名已被注册'});
        }
        const modelData = new User({user:regData.user,pwd:md5pwd(regData.pwd),type:regData.type});
        modelData.save(function (err,doc) {
            if(err){
                return res.json({code:1,msg:'数据库出错'});
            }else{
                const { user,type,_id } = doc;
                res.cookie('userid',_id);
                return res.json({code:0,data:{user,type,_id}});
            }
        })
    })
})

// 登录接口
Router.post('/login',function(req,res){
    const loginData = req.body;
    User.findOne({user:loginData.user,pwd:md5pwd(loginData.pwd)},_filter,function (err,doc) {
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'});
        }
        res.cookie('userid',doc._id);
        return res.json({code:0,data:doc})
       
    })
})

// 保存用户信息接口
Router.post('/update',function(req,res){
    const userid = req.cookies.userid;
    const body = req.body;
    if(!userid){
       return res.json({code:1})
    } 
    User.findByIdAndUpdate({'_id':userid},body,function (err,doc) {
        console.log(doc);
        if(!doc){
            return res.json({code:1,msg:'数据库错误'});
        }
        const data = Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
        return res.json({code:0,data})
       
    })
})


function md5pwd(pwd) {
    return md5(md5(pwd+'zhaopin_imooc_good@hduisaDFGD$#$&^jkdjf#jdGkjkJJ'))
}

module.exports = Router;