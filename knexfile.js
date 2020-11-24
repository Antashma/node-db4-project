// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipes.db3'
    }
  },
  useNullAsDefault: true,
  migrations: {
    directory: './migrations'
  }
};
