class UserService {
    constructor() {
        this.users = [
            {id: 1, name: 'Andrew', age: 29},
            {id: 2, name: 'Mary', age: 25},
            {id: 3, name: 'Alex', age: 11},
            {id: 4, name: 'Ann', age: 17}
        ];
    }

    getUsers = () => new Promise(resolve => {
        console.log('GET USERS');
        setTimeout(() => resolve(this.users), 1000);
    });
}

export default new UserService();
