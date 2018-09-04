console.log("before");
// getUser(1, (user) => {
//     console.log(user);
//     getRepo(user.gitUserName, (repo) => {
//         console.log(repo)
//         getCommits(repo[0], forcommit)
//     });
// });

// Promise way
getUser(1)
    .then(user => getRepo(user.gitUserName))
    .then(repo => getCommits(repo[0]))
    .then(commits => console.log('commit', commits))
    .catch(err => console.log('Error', err.message));


// aysnc and await way
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repo = await getRepo(user.gitUserName);
        const commit = await getCommits(repo[0]);
        console.log(commit);
    } catch (err) {
        console.log('Error', err.message);
    }
};
displayCommits();


// const p = getUser(1);
// p.then(user => console.log(user));


//console.log(user);
console.log("after");

// function name for call back hell
function forcommit(commit) {
    console.log(commit)
};
// do same for all anomas function

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("incoming data.....");
            resolve({
                id: id,
                gitUserName: 'nihar_nc'
            });
        }, 2000);
    });
};

function getRepo(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("incoming data..... for repo");
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
};

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("incoming data.....for commits");
            resolve(['Commit1', 'Commit2', 'Commit3']);
        }, 2000);
    });
};