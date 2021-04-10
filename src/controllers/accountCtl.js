'use strict'
var Boom = require('boom')
const User = require('../database/models/accounts');
const Bcrypt = require('bcrypt');
module.exports = {
    getName: async (rep, res, next) => {
        try {
            var name = rep.params.user;
            console.log(name);
            return await User.query().findById(name);
        } catch (error) {
            Boom.badRequest('invalid query');
        }
       
    },
    getHello: async function(request, reply) {
        return "Hello Anh";
    },
    insertUser: async function(request, reply) {
        return "Hello Anh";
    },
    addUser: async (request, reply) => {
        try {
            const payload = request.payload;
            var hashPass = '';
            await Bcrypt.hash(payload.pass, 10, function(err, hash) {
                console.log(hash);
                hashPass = hash;
            });
            // const newHashPassword  = await bcrypt.hash(payload.pass, 10);
            // console.log(newHashPassword);
            await User.query().insert({
                username: payload.name,
                password: '$2b$10$maGl94wVYVuCMcbSH4sMyuvxfG4Zfdo2dclNZiXjhfcSbHwdYaDbu'
            });
            return `Welcome ${payload.name}!`;
            
        } catch (error) {
            return Boom.badRequest('Nhập dữ liêu không khớp!');
        }
    },
    deleteUser: async (request, reply) => {
        try {
            const id = request.params.id;
            console.log(id);
            return await User.query().deleteById(id);
        } catch (err) {
            console.log(err);
        }
    },
    updateUser: async (request, reply) => {
        try {
            const id = request.params.id;
            console.log(id);
            return await User.query()
            .findById(13)
            .patch({
                username: 2343245423543
            });
        } catch (err) {
            console.log(err);
        }
    },
    checkUser: async (request, reply) => {
        try {
            const id = request.params.id;
            const username = request.query.name;
            const pass = request.query.pass;
            const user = await User.query().findById(id);
            if(user.username == username){
                console.log(username + pass);
                if(Bcrypt.compare(pass, user.password)){
                    console.log("Tài khoản đăng nhập thành công");
                }
            }
        } catch (err) {
            Boom.badImplementation('gọi đến serve lỗi');
        }
    }
};