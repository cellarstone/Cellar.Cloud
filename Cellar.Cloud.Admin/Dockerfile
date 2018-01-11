FROM golang:alpine
ADD . $GOPATH/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Admin



# Cellar websockets - get packages & build
WORKDIR $GOPATH/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Admin
RUN go-wrapper download
RUN go-wrapper install
RUN go build -o cellarcloudadmin

# helpers
# RUN echo $GOPATH
RUN pwd
RUN ls -l


RUN apk update

## Change alpine version to install latest node
RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv &&\
    apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community nodejs-current-npm

# Install NodeJS
# RUN apk add nodejs
# RUN apk add nodejs-npm

# BUILD APP 
RUN npm install
RUN npm run-script myappbuild



# -----------------------
# Stage 2
# -----------------------
#  FROM alpine:latest
#  RUN apk --no-cache add ca-certificates
FROM golang:alpine
EXPOSE 55502

WORKDIR /app
COPY --from=0 /go/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Admin/cellarcloudadmin /app/
COPY --from=0 /go/src/github.com/cellarstone/Cellar.Cloud/Cellar.Cloud.Admin/wwwroot /app/wwwroot
 
# RUN ls -l 

# WORKDIR /app/wwwroot

# RUN ls -l 

# WORKDIR /app

# RUN ls -l 

CMD ["./cellarcloudadmin"]


