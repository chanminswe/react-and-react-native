const users = ["User 1 ", "User 2", "User 3"];

export function fetchUsers(desc) {
  return new Promise((resolve, reject) => {
    resolve(users);
    if (desc) {
      resolve(users);
      console.log("Normal");
    } else {
      resolve(users.reverse());
      console.log("Reversed");
    }
  });
}

export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    const user = users[id];
    if (user === undefined) {
      reject(`User ${id} not found`);
    } else {
      resolve(user);
    }
  });
}
