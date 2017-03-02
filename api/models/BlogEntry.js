/**
 * BlogEntry.js 通过命令生成的：sails generate api BlogEntry （会生成controller和models）
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id : {
		type : 'integer',
		primaryKey : true
	},
    title : {
		type : 'string',
		required : true,
		defaultsTo : ''
		
	},
	boty : {
		type:'string',
		required : true,
		dafaultsTo : ''
	}
  }
};

// 下面是Sails中常见的元属性
//    email 验证数据元素是否是电子邮件地址。
//    如果未指定值， defaultsTo 会将该值设置为 use。
//    autoIncrement 只能用在整数属性上。
//    unique 验证此属性是否在所有实例上是唯一的。
//    primaryKey 表明该属性将用作模型的主键。
//    enum 表明这个元属性的值是只接受给定属性的值的数组。所以 enum:['Fred', 'Barney', 'Wilma', 'Betty'] 表示仅接受这 4 个值。
//    size 将会设置传递给数据库的大小限制，通常是字符串长度限制。


