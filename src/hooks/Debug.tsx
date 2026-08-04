import { getFromStore } from "./StorageHook"

export const debug = () => {
    const value = getFromStore("debug")
    if(value == "debug"){
        return true
    }
    return false
}