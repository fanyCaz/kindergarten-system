module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
      nombre: 'John',
      apellido: 'Doe',
      email: 'example@example.com',
      password:'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
