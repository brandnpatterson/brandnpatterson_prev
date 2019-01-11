exports.getUsers = (req, res) => {
  const users = [
    { id: 1, name: 'Brandon' },
    { id: 2, name: 'Lauren' },
    { id: 3, name: 'Wesley' }
  ];

  res.json(users);

  console.log('Sent Users');
};
