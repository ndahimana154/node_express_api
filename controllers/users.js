export const getUsers = (req, res) => {
  console.log(users);
  res.send(JSON.stringify(users));
};
export const saveUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with Name ${user.firstName} added successfully`);
};
export const getSpecificUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with ID: ${id} deleted successfully`);
};
export const updateuser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  let userToBeUpdated = users.find((user) => (user.id = id));
  if (firstName) userToBeUpdated.firstName = firstName;
  if (lastName) userToBeUpdated.lastName = lastName;
  if (age) userToBeUpdated.age = age;
  console.log(userToBeUpdated);
  res.send(JSON.stringify(userToBeUpdated));
};
