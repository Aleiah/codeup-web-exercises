const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() * 100 < 90) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
});

console.log(wait);
wait.then(() => console.log('resolved!'));
wait.catch(() => console.log('rejected!'));
