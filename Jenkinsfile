pipeline {
  agent any
  
  stages {
    stage('Build') {
      when {
        // anyOf {
          branch 'master'
       // branch 'develop'
       // }
      }
      steps {
        parallel (
          webcellarstone: {
            sh 'docker build -t webcellarstone ./WebCellarstone'
          },
          webiav: {
            sh 'docker build -t webiav ./WebIAV'
          },
          admin: {
            sh 'docker build -t cloudadmin ./Admin'
          },
          api: {
            sh 'docker build -t cloudapi ./Api'
          },
          nginx: {
            sh 'docker build -t cloudnginx ./Nginx'
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
          webcellarstone: {
            sh 'docker tag webcellarstone eu.gcr.io/cellarstone-1488228226623/webcellarstone:0.0.9'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/webcellarstone:0.0.9'
          },
          webiav: {
            sh 'docker tag webiav eu.gcr.io/cellarstone-1488228226623/webiav:0.0.9'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/webiav:0.0.9'
          },
          admin: {
            sh 'docker tag cloudadmin eu.gcr.io/cellarstone-1488228226623/cloudadmin:0.0.9'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudadmin:0.0.9'
          },
          api: {
            sh 'docker tag cloudapi eu.gcr.io/cellarstone-1488228226623/cloudapi:0.0.9'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudapi:0.0.9'
          },
          nginx: {
            sh 'docker tag cloudnginx eu.gcr.io/cellarstone-1488228226623/cloudnginx:0.0.9'
            sh 'gcloud docker -- push eu.gcr.io/cellarstone-1488228226623/cloudnginx:0.0.9'
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
          webcellarstone: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/webcellarstone.yaml'
          },
          webiav: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/webiav.yaml'
          },
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
          },
          pubsub: {
            sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'
            sh 'kubectl apply -f k8s/pubsub.yaml'
          }
          // ,
          // tickstack: {
          //   sh 'gcloud container clusters get-credentials cellarcloud --zone europe-west1-b --project cellarstone-1488228226623'

          //   // sh 'kubectl delete configmap telegraf-config'
          //   // sh 'kubectl create configmap telegraf-config --from-file k8s/tickStack/telegraf/telegraf.conf'
          //   sh 'kubectl delete configmap influxdb-config'
          //   sh 'kubectl create configmap influxdb-config --from-file k8s/tickStack/influxdb/influxdb.conf'

          //   sh 'kubectl apply -f k8s/tickStack/influxdb/deployment.yaml'
          //   sh 'kubectl apply -f k8s/tickStack/influxdb/service.yaml'

          //   sh 'kubectl apply -f k8s/tickStack/kapacitor/deployment.yaml'
          //   sh 'kubectl apply -f k8s/tickStack/kapacitor/service.yaml'

          //   // sh 'kubectl apply -f k8s/tickStack/telegraf/daemonset.yaml'

          //   sh 'kubectl apply -f k8s/tickStack/chronograf/deployment.yaml'
          //   sh 'kubectl apply -f k8s/tickStack/chronograf/service.yaml'
            
          // }
        )
      }
    }
  }
}