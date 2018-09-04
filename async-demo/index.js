console.log('Before');

const user = getUser(1, (user) => {
    const GR = getRepositories(1, (repo) => {
        console.log(repo);
    });
    console.log(user);
});
console.log('After');

//callback
//promis
//async/awaits

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Test Promise');
            resolve({
                id: id,
                gitHubUsername: 'nihar2911 22'
            });
        }, 2000);
    })
};

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['r1', 'r2', 'r3']);
        }, 2000);
    });
};

//Promise