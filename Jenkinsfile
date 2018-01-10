pipeline {
  agent any
  
  
  stages {
    stage('Build and Deploy') {
      steps {
        parallel (
          admin: {
            sh 'docker build -t cloudadmin ./Cellar.Cloud.Admin'
            sh 'docker tag cloudadmin eu.gcr.io/cellarstone-1488228226623/cloudadmin:0.0.1'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudadmin:0.0.1'

            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/admin.yaml'
          },
          api: {
            sh 'docker build -t cloudapi ./Cellar.Cloud.Api'
            sh 'docker tag cloudapi eu.gcr.io/cellarstone-1488228226623/cloudapi:0.0.1'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudapi:0.0.1'

            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/api.yaml'
          },
          nginx: {
            sh 'docker build -t cloudnginx ./nginx'
            sh 'docker tag cloudnginx eu.gcr.io/cellarstone-1488228226623/cloudnginx:0.0.1'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudnginx:0.0.1'

            sh 'gcloud container clusters get-credentials developcluster-1 --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/nginx.yaml'
          },
          mongo: {
            sh 'gcloud container clusters get-credentials developcluster-1 --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/mongodb.yaml'
          }
        )
      }
    }
  }
}