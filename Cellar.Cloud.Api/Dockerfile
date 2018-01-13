FROM golang
ADD . $GOPATH/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Api



# Cellar websockets - get packages & build
WORKDIR $GOPATH/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Api
RUN go-wrapper download
RUN go-wrapper install
RUN go build -o cellarcloudapi  

# helpers
# RUN echo $GOPATH
RUN pwd
RUN ls -l


# -----------------------
# Stage 2
# -----------------------
#  FROM alpine:latest
#  RUN apk --no-cache add ca-certificates
# FROM golang:alpine
FROM golang
# RUN apk update && apk add bash
EXPOSE 55503

# WORKDIR /app
COPY --from=0 /go/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Api/cellarcloudapi .

# RUN ls -l  

CMD ["./cellarcloudapi"]
# ENTRYPOINT ["/app/cellarcloudapi"]

