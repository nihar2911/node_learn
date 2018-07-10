const p = new Promise((resolve, reject) => {
    //Kick off some async work

    setTimeout(() => {
        // resolve(1); //Pending => resolved, fullfilled
        reject(new Error('message')); // pending => rejected or failed
    }, 2000)
});

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));