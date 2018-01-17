

You must create disk in you GCE

`gcloud compute disks create influxdb --size=100GB`

`gcloud compute disks create chronograf kapacitor --size=10GB`

You must copy config files 

`kubectl create configmap influxdb-config --from-file k8s/tickStack/influxdb/influxdb.conf`

`kubectl create configmap telegraf-config --from-file k8s/tickStack/telegraf/telegraf.conf`