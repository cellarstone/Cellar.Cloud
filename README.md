
# Ports

Port | Application
--- | ---
55502 | Admin
55503 | Api


# Google Cloud SDK

Installation page
https://cloud.google.com/sdk


```Shell

gcloud auth list
gcloud projects list

gcloud app instances list
gcloud container images list 


```


# Kubernetes CLI

Install as part of Google Cloud SDK
https://kubernetes.io/docs/tasks/tools/install-kubectl/

`gcloud components install kubectl`

Kubernetes UI

`kubectl proxy`

and open http://localhost:8001/ui
or 
use Google Cloud > Kubernetes engine > Workloads



```Shell

kubectl cluster-info

kubectl get nodes

kubectl get services
kubectl get pods --all-namespaces

kubectl delete pods --all
kubectl delete deployments --all
kubectl delete services --all
kubectl delete daemonsets --all 
kubectl delete statefulsets --all

```


# Versions


Version | Description 
--- | ---
0.1 | Initial version. Find this TAG in history