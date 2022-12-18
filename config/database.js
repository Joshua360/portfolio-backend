

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'gthraqqd_strapidb'),
      user: env('DATABASE_USERNAME', 'gthraqqd_strapidb'),
      password: env('DATABASE_PASSWORD', 'ombudo27'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'nojocoke_strapi'),
//       user: env('DATABASE_USERNAME', 'nojocoke_strapi'),
//       password: env('DATABASE_PASSWORD', 'nojocoke_strapi'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
