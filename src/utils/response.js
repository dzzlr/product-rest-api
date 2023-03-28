const response = (code, status, data, res) => {
    res.json(code, [
        {
            code,
            status,
            data,
            metadata: {
                prev: "",
                next: "",
                current: ""
            }
        }
    ])
}