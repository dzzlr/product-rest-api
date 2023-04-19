const response = (code, data, res) => {
    res.json(code, [
        {
            code,
            status: "OK",
            data,
            metadata: {
                prev: "",
                next: "",
                current: ""
            }
        }
    ]);

    // if (code == 200) {
    //     //
    // } else if (code == 400) {
    //     //
    // }
}

module.exports = response;