import { isEqual, differenceWith, isArray } from 'lodash'

export function takeDiff(obj1, obj2) {
    let diff = {}

    for (const key in obj1) {

        if (obj2.hasOwnProperty(key) &&
            !isEqual(obj1[key], obj2[key])
        ) {
            if (
                isArray(obj2[key]) &&
                isArray(obj1[key])
            ) {
                diff[key] = differenceWith(obj1[key], obj2[key], isEqual)
            }
            else diff[key] = obj1[key]
        }
    }
    return diff
}


export function updateObject(obj, value) {
    return {
        ...obj,
        ...value
    }
}


export function getIndexInObject(idx, obj) {
    return Object.keys(obj)[idx]
}