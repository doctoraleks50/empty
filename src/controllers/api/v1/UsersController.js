const di = require('bottlejs').pop('app').container;

class UsersController {
    constructor(usersService) {
        this.__usersService = usersService;
    }

    async create(req, res) {
        try {
            const user = await this.__usersService.create(req.body);
            return res.status(201).json(user);
        } catch (e) {
            console.log('ERROR: ', e.message)
        }
    }

    async getById(req, res) {
        const s1 = require('pg');
        try {
            const user = await this.__usersService.getById(req.params.id);

            return res.status(201).json(user);
        } catch (e) {
            console.log('ERROR: ', e.message)
        }
    }

}

module.exports = new UsersController(di.UsersService);
