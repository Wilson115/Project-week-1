const awaitPromise = async () => {
    console.log("1. Before running Promise");
  
    try {
      let promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("2. Inside SetTimeout");
            // resolve("Hello");
          reject("Bye bye");
        }, 3000);
      });