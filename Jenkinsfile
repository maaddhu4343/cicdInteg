pipeline {
  agent any
  
  parameters {
    string(name: 'SPEC', defaultValue:'cypress/e2e/**', description: 'Enter script path that you want to run')
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Enter browser name')
  }

  options {
    ansiColor('xterm')
  }
 
  stages {
    stage('Build') {
      steps {
        bat 'echo "Hello World"'
      }
    }
    stage('Test') {
      steps {
        bat 'npm i'
        bat 'npm run cypress:open -- --spec ${SPEC} --browser ${BROWSER}'
      }
    }
    stage('Deploy') {
      steps {
        bat 'echo "Deplying......"'
      }
    }
  }

  post {
    always { 
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }

  }

}
