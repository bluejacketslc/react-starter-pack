export function removeEmptyObjectFromArray(arr) {
    return arr.filter(value => Object.keys(value).length !== 0);
}

export function updateArrayAt(arr, idx, val) {
    return [
        ...arr.slice(0, idx),
        val,
        ...arr.slice(idx + 1)
    ]
}
