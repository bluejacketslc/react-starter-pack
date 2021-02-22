import { isEmpty, isString } from 'lodash'

export function checkFileExtension(file, ext) {
    //ext format : png, jpg, jpeg
    // if ext can be split, split it
    //file can be from input or string
    if (isEmpty(file)) return false
    const fileExtension = `.${getFileExtension(file)}`
    const extensions = ext.split(', ')
    return extensions.includes(fileExtension)
}
export function getFileExtension(file) {
    if (isString(file))
        return file.split('.').pop().toLowerCase();
    return file.name.split('.').pop().toLowerCase();
}

