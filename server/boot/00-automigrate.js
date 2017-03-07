/**
 * Created by alexander on 2/6/17.
 */

'use strict';

module.exports = function(app) {

  var ds = app.dataSources['sql'];

  ds.automigrate(function (err) {
    if (err){
        console.log('------------automigrate error-----');
    }
    else{
        console.log('------------ automigrate ---------------');
    }
    // ds.discoverModelProperties('Customer', function (err, props) {
    //   console.log(props);
    // });
  });


  // show tables;
  // drop table ACL;
  // drop table AccessToken;
  // drop table Role;
  // drop table RoleMapping;
  // DROP TABLE `auth`.`User`;
  // show tables;
};
