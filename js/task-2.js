// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,
//а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
// console.table(users);
const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const updatedUsers = allUsers.map(user =>
                user.name === userName
                    ? { ...user, active: !user.active }
                    : user);
            resolve(updatedUsers);
        }, 1000);
    });
};
const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);