/**
 * 测试控制器
 */
module.exports = {
    test : function (req, res) {
    	//console.log(req);
    	console.log(process);
    	res.send('OK');
    	//res.send(req);
        //return res.json(req);
    }
};