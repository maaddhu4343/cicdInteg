pipeline {
  agent any
  
  parameters {
    string(name: 'SPEC', defaultValue:'cypress/e2e/**', description: 'Enter script path that you want to run')
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Enter browser name')
  }
 
  stages {
    stage('Build') {
      steps {
        sh 'echo "Hello World"'
      }
    }
    stage('Test') {
      steps {
        bat 'npm i'
        bat 'npm run cypress:open -- --spec $SPEC --browser $BROWSER'
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
        echo 'This always runs'
    }

  }

}
