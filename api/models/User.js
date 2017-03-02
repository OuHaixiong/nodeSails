// JavaScript Document
/**
 * User.js
 *
 */
module.exports = {
	attributes : { // 如果没有主键，sails会自己帮你添加一个名为id的主键
		name : {
			type : 'string'
		},
		gender : {
			type : 'integer',
			defaultsTo : 0,
		}
        // 同样的sails会在每个表中添加createdAt和updatedAt两个字段。会自动更新时间
	}
};