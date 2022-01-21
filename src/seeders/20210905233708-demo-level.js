module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Levels', [
      {
        desc_level: 'basic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        desc_level: 'intermediary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        desc_level: 'advanced',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('Levels', null, {}),
};
