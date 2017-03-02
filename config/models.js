/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  // connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  // migrate: 'alter'

    connection : 'someMysqlServer',
	migrate : 'alter' // migrate参数用于配置我们的数据库是否随数据对象的更改而做变更。'alter'表示会自动做迁移，且尽量保持现有数据不变，'safe'表示不做任何改变，'drop'表示会清空数据库重新建立数据库模型。
	
};
