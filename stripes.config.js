// const platformCore = require('@folio/platform-core/stripes.config.js');
// const platformERM = require('@folio/platform-erm/stripes.config.js');
// const { merge } = require('lodash');

module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false
  },

  modules: {
    '@folio/calendar' : {},
    '@folio/checkin' : {},
    '@folio/checkout' : {},
    '@folio/circulation' : {},
    '@folio/inventory' : {},
    '@folio/plugin-find-user' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/requests' : {},
    '@folio/servicepoints' : {},
    '@folio/users' : {},
    '@folio/receiving' : {},
    '@folio/plugin-create-inventory-records' : {},
    '@folio/tenant-settings': {},
    '@folio/developer' : {},
    '@folio/stripes-erm-components' : {},
  },

  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/folio-favicon.png',
    },
  },
};

// module.exports = merge({}, platformCore, platformERM, platformComplete);
