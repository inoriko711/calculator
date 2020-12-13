package main

import (
	"fmt"
	"net/http"
)

func postHandler(w http.ResponseWriter, r *http.Request) {

	fmt.Fprint(w, "ok")
}

func main() {

	server := http.Server{
		Addr: "127.0.0.1:8080",
	}

	http.HandleFunc("/", postHandler)
	server.ListenAndServe()

}
