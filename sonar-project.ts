const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    token: '718ad772264e5d1a336bc5f6472eec2c2f194389',
    options: {
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.inclusions': '**', // Entry point of your code
      'sonar.projectKey': 'ts-express-boilerplate',
      'sonar.login': '718ad772264e5d1a336bc5f6472eec2c2f194389',
      'sonar.password': '',
      'sonar.test.inclusions':
        'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
    }
  },
  () => {}
)
