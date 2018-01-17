pipeline {
  agent any
  
  stages {
    stage('Build') {
      when {
        anyOf {
          branch 'master'
          branch 'develop'
        }
      }
      steps {
        parallel (
          admin: {
            sh 'docker build -t cloudadmin ./Admin'
          },
          api: {
            sh 'docker build -t cloudapi ./Api'
          },
          nginx: {
            sh 'docker build -t cloudnginx ./nginx'
          }
        )
      }
    }
    stage('Publish') {
      when {
        branch 'master' 
      }
      steps {
        parallel (
          admin: {
            sh 'docker tag cloudadmin eu.gcr.io/cellarstone-1488228226623/cloudadmin:0.0.1'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudadmin:0.0.1'
          },
          api: {
            sh 'docker tag cloudapi eu.gcr.io/cellarstone-1488228226623/cloudapi:0.0.1'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudapi:0.0.1'
          },
          nginx: {
            sh 'docker tag cloudnginx eu.gcr.io/cellarstone-1488228226623/cloudnginx:0.0.2'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudnginx:0.0.2'
          }
        )
      }
    }
    stage('Human Check - Publish app to the cloud') {
      when {
        branch 'master' 
      }
      steps {
        input "Can I publish builded and published app to the Cellarstone Cloud ? Automatically will be deployed . . . "
      }
    }
    stage('Deploy') {
      when {
        branch 'master' 
      }
      steps {
        parallel (
          admin: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/admin.yaml'
          },
          api: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/api.yaml'
          },
          nginx: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/secrets.yaml'
            sh 'kubectl apply -f k8s/nginx.yaml'
          },
          mongo: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/mongodb.yaml'
          }
          tickstack: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/tickStack/influxdb/deployment.yaml'
            sh 'kubectl apply -f k8s/tickStack/influxdb/service.yaml'
            sh 'kubectl apply -f k8s/tickStack/kapacitor/deployment.yaml'
            sh 'kubectl apply -f k8s/tickStack/kapacitor/service.yaml'
            sh 'kubectl apply -f k8s/tickStack/telegraf/daemonset.yaml'
            sh 'kubectl apply -f k8s/tickStack/chronograf/deployment.yaml'
            sh 'kubectl apply -f k8s/tickStack/chronograf/service.yaml'
          }
        )
      }
    }
  }
}