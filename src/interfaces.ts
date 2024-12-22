// interfaces - similar to type aliases, but only used to define objects

interface Rectangle {
    width: number,
    height: number
}

const rect: Rectangle = {  
    width: 10,
    height: 20
}

console.log("rect:", rect);