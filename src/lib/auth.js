function logOut(id) {
  localStorage.removeItem(id);
}

function logIn(id, user) {
  localStorage.setItem(id, JSON.stringify(user));
}

function checkUser(id) {
  const user = localStorage.setItem(id);
  if (!user) {
    return null;
  }
  return JSON.parse(user);
}

module.exports = { logOut, logIn, checkUser };
