Package.describe({
  name: 'jkuester:reactive-stack',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A simple reactive stack implementation, works with any frontend',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-reactive-data-structures',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.7', '2.3', '3.0']);
  api.use('ecmascript');
  api.use('tracker');
  api.mainModule('reactive-stack.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tracker');
  api.use('tinytest');
  api.use('jkuester:reactive-stack');
  api.mainModule('reactive-stack-tests.js');
});
