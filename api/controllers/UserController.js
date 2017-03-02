
module.exports = {
    hello : function (req, res) {
    	//res.send('hello man!!!欧海雄'); // 不渲染视图，直接打印字符串
    	//res.view({data:{'name':'欧阳海雄'}}); // 往默认视图中传数据，并渲染视图
    	//console.log(sails.config); // 所有的配置项
    	//res.view('hello', {data:{'name':'欧阳海雄'}}); // 往自定义的视图中传数据，并渲染视图
		//return res.view('hello', {'name':'欧阳海雄', 'title':'这个是控制器传过来的标题'});
		return res.render('hello', {'name':'欧阳海雄', 'title':'这个是控制器传过来的标题'});
		// res.render 方法和 res.view 是一样的
    },

    bye : function (req, res) {
        //return res.redirect('http://maimengmei.com'); // 302跳转
        sails.log('debug日志！');
		sails.log.error('error日志！');
		sails.log.warn('warn日志！', 'request aborted.'); // 打印多个消息用,隔开
		sails.log.info('info日志！');
		sails.log.verbose('verbose日志！'); // 后面这两种日记无法在控制台打印，是因为可以在配置文件（config/log.js）中对配置的级别进行设置，只记录比当前配置级别低的日志内容
		sails.log.silly('silly日志！'); 
		res.send('请求完毕');
	},
	
    add : function (req, res) {
        //console.log(req.query);//返回一个参数组成的对象
		User.create({name:req.query.name}).exec(function (err, user) {
			// 在模型层中框架自己已经实现了create基本的方法
			// 在默认的方法中
			if (err) {
				return res.serverError(err);
			}
			sails.log('User is id is:', user.id);
			return res.ok('添加一天记录成功，添加后的ID为：' + user.id);
		});
	},
	
    del : function (req, res) {
		User.destroy({name : '欧阳海雄'}).exec(function (err) {
			// 调用模型自带的destroy方法删除符合条件的记录
			if (err) {
			    return res.serverError(err);
			}
			return res.ok('Any user named 欧阳海雄 have now been deleted, if there were any.');
		});
	},
	
	modify : function (req, res) {
		User.update({name : 'ouhaixiong'}, {name : '欧海雄'}).exec(function afterwards(err, updated) {
			// 调用user模型的默认update方法，更新数据
			if (err) {
				return res.serverError(err);
			}
			return res.ok('Updated user to have name ' + updated[0].name);
		});
	},
	
    load : function (req, res) {
		User.find({name:'欧海雄'}).exec(function (err, users) {
			// 调用user模型的默认find方法，获取符合条件的所有记录
			if (err) {
			    return res.serverError(err);
			}
			sails.log('Wow, there are %d users named 欧海雄. Check it out:', users.length, users);
			//return res.json(users);
			res.send(users); // 和上面的一句是一样的
		});
	},



	
};