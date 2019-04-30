export const splitByDevices = (message) => {
    const arr = message.split('::')
    const result = []
    arr.map(element => {
        const array = element.match(/(\S+)\s+(\S+)\s+(.+)/).slice(1)
        result.push(array)
    })
    return result
}

export const convertMessage = (message) => {
    const splitedString = splitByDevices(message)
    return splitedString.map(element =>  [element[0], element[1], JSON.parse(element[2])])
}