const di = require('bottlejs').pop('app').container;

class UsersController {
    constructor(usersService) {
        this.__usersService = usersService;
    }

    async create(req, res) {
            const user = await this.__usersService.create(req.body);
            return res.status(201).json(user);
    }

    async getById(req, res) {
            const user = await this.__usersService.getById(req.params.id);
            return res.status(201).json(user);
    }

}

module.exports = new UsersController(di.UsersService);
