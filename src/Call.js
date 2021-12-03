import react from "react"

export function call(path, data) {

        var root = "http://127.0.0.1:5000/"
        var x = fetch(root + path, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json()
            })
            .then((json) => {
                console.log(json)

                return json

            });

    return 
}

