'use strict';

class UsersService {
    constructor( usersModel) {
        this.__usersModel = usersModel;
    }

    async getById(userId) {
        const user = await this.__usersModel.findOne({
            where: {
                user_id: userId
            },
        });
    }
    async create(user_data) {
        const user = await this.__usersModel.create(user_data);
    }
}

module.exports = UsersService;
