export const required = (value:string) => {
    if (value) {
        return undefined
    } else return 'Field is required'
}

export const maxLength30 = (value:string) => {
    if (value && value.length > 30) {
        return 'Max length is 30 symbols'
    } else return undefined
}

export const maxLengthCreator = (maxLength:any) => (value: string) => {
    if (value.length > maxLength)  return `Max length is ${maxLength} symbols`
    return undefined
}