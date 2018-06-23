FROM golang
ADD . $GOPATH/src/github.com/cellarstone/Cellar.Cloud/Api



# Cellar websockets - get packages & build
WORKDIR $GOPATH/src/github.com/cellarstone/Cellar.Cloud/Api


RUN go get -u github.com/golang/dep/cmd/dep
RUN dep ensure
RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o cellarcloudapi

# helpers
# RUN echo $GOPATH
RUN pwd
RUN ls -l

# -----------------------
# Stage 2
# -----------------------
FROM alpine:3.5
COPY --from=0 /go/src/github.com/cellarstone/Cellar.Cloud/Api/cellarcloudapi /app/cellarcloudapi
RUN chmod +x /app/cellarcloudapi



# helpers
RUN ls -l  

ENTRYPOINT /app/cellarcloudapi


