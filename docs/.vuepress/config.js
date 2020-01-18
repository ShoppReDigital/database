module.exports = {
  title: "Database - Shoppre Consulting, India",
  description: "MySQL, MongoDB, SQLite, WebSQL, PostgreSQL, DataGrip, MS SQL, PHPMyAdmin, Database Backups, Archival, Replication, Indexing Consulting from India",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ]
  },
  dest: "public",
  plugins: [
      'social-share',
    {
      'sitemap': {
        hostname: 'https://database.shoppre.com/'
      },
    }
  ],
};
