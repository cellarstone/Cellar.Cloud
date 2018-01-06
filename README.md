

# CLOUD

Run everything with these commands.

Linux : `docker-compone -f docker-compose.full.production.linux.yml`

Windows: `docker-compone -f docker-compose.full.production.windows.yml`


# Ports

Port | Application
--- | ---
55501 | Web
55502 | Admin
55503 | Api
55504 | Cdn
55505 | Workflow
55506 | Websocket
27017 | mongodb
1883 | mqtt
24224 | fluentd
9200 | elastic
5601 | kibana
9090 | prometheus
9091 | prometheus pushgateway
3000 | grafana
19999 | sysmon - netdata


# Author notes

Inspect elasticsearch IP address

`docker inspect cellarhub_elasticsearch_1 | grep IPAddress`

