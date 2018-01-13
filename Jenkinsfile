pipeline {
  agent any
  
  stages {
    stage('Build and Deploy') {
      steps {
        parallel (
          admin: {
            sh 'docker build -t cloudadmin ./Cellar.Cloud.Admin'
          },
          api: {
            sh 'docker build -t cloudapi ./Cellar.Cloud.Api'
          },
          nginx: {
            sh 'docker build -t cloudnginx ./nginx'
          }
        )
      }
    }
  }
}