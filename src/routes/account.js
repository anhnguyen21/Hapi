'use strict'
var Joi = require('joi'); 
const ctl = require('../controllers');

const vld = require('../validate');
const User = require('../database/models/accounts');

const account = Joi.object({
    name: Joi.string().min(1).max(140),
    pass: Joi.string().min(1).max(140)
});

var apiRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: ctl.account.getHello,
        options: {
            tags: ['api', 'v1'],
        }
    },{
        method: 'GET',
        path: '/account/{user}',
        handler: ctl.account.getName,

        options: {
            tags: ['api', 'v1'],
            validate: {
                params: Joi.object({ // Tạo đối tương trong trong routes
                    user: Joi.string().min(1).max(10) // Kiểm tra giá trị nhâp vào trên thanh tìm kiếm
                }),
                query: Joi.object({ // Hiển thị tham số được truyền lên thanh url:
                    limit: Joi.number().integer().min(1).max(100).default(10)
                }),
                // payload: { // Hiển thị các thuộc tính trong method post
                //    Joi.object({
                //         name: Joi.string().min(1).max(140),
                //         pass: Joi.string().min(1).max(140)
                //     })
                // },
                // headers: {
                //     'user-agent': Joi.string()
                // },
                // options: {
                //     allowUnknown: true
                // }
            }
        },
    }, {
        method: 'GET',
        path: '/shop/{id}',
        handler: ctl.shop.getShop,
        options: {
            tags: ['api', 'v1'],
            validate: {
                params: Joi.object({ // Tạo đối tương trong trong routes
                    id: Joi.string().min(1).max(10) // Kiểm tra giá trị nhâp vào trên thanh tìm kiếm
                }),
            }
        }
    },{
        method: 'POST',
        path: '/user',
        handler: ctl.account.addUser,
        options: {
            tags: ['api', 'v1'],
        }
    },{
        method: 'DELETE',
        path: '/user/{id}',
        handler: ctl.account.deleteUser,
        options: {
            tags: ['api', 'v1'],
        }
    },{
        method: 'PUT',
        path: '/user/{id}',
        handler: ctl.account.updateUser,
        options: {
            tags: ['api', 'v1'],
        }
    },{
        method: 'GET',
        path: '/user',
        options: {
            auth: 'simple',
            tags: ['api', 'v1'],
        },
        handler: function (request, h) {

            return 'welcome';
        }
    },{
        method: 'GET',
        path: '/checkuser/{id}',
        // options: {
        //     auth: 'simple'
        // },
        handler: ctl.account.checkUser,
        options: {
            tags: ['api', 'v1'],
        }
    }];
module.exports = apiRoutes;