const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
    // resolve([1, 2, 3]);
    reject("error")
	}, 2000);
});

doWorkPromise.then((result) => {
  console.log("succes", result)
}).catch((error) => {
  console.log(error)
})