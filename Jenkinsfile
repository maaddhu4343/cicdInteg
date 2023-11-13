pipeline {
  agent any
  
  parameters {
    string(name: 'SPEC', defaultValue:'cypress/e2e/**', description: 'Enter script path that you want to run')
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Enter browser name')
  }
  options {
    ansiColor(['authorizationMatrix'])
    
  }

  stages {
    stage('Build') {
      steps {
        sh 'echo "Hello World"'
      }
    }
    stage('Test') {
      steps {
        sh 'npm i'
        sh 'npm run cypress:run -- --spec $SPEC --browser $BROWSER'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deplying......"'
      }
    }
  }

  post {
    always { 
        publishers { archiveArtifacts 'cypress/screenshots/**' }
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Cypress Report'])
    }

  }

}
