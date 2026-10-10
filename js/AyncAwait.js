// async await 

function resolveLater() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('GeeksForGeeks');
        },2000);
    });
}

async function WaitForGeeksforGeeks() {
    console.log('Calling');
    const result = await resolveLater();
    console.log(result);
}