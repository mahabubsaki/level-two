import { IFriends } from "./interfaces";

const names = 's';
const hello = (...friends: IFriends[]): string => {
    return friends.map(item => item.name).join('-');
};

console.log(hello({ name: 'saki' }, { name: 'arif' }));