package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	fmt.Println("BEGIN")

	directory := "./wwwroot"

	fmt.Println("START")

	http.Handle("/", http.FileServer(http.Dir(directory)))

	fmt.Println("RUN")

	log.Printf("Serving %s on HTTP port: %s\n", directory, "55502")

	http.ListenAndServe(":55502", nil)
}
