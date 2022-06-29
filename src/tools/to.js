const to = (promise) => {
    return promise
        .then((data) => [data, null])
        .catch((err) => [null, err]);
};

exports.to = to