Package.describe({
  name: 'superlumen:crypto-md5-server',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Load jparker:crypto-md5 on the server only',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/superlumen/meteor-crytp-md5-server',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Load crypto-md5 on the **server** only
  api.use('jparker:crypto-md5', 'server');
  api.imply('jparker:crypto-md5', 'server');
});
