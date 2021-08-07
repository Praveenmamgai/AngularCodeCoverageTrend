// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
  ],
  preprocessors: {
    'src/**/*.js': ['coverage']
},
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')

    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/angular-unit-testing'),
      reports: ['cobertura', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    coverageReporter: {
      includeAllSources: true,
      dir: require('path').join(__dirname, '..report/coverage/'),
      reporters: [
          { type: "cobertura", subdir: ".", file: 'cobertura.xml' },
          { type: 'text-summary' }
      ]
  },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    junitReporter: {
    dir: require('path').join(__dirname,'../test-results.xml')
    }
  });
};

