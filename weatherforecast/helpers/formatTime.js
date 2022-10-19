export const formatTime = (time, locales = undefined, options = undefined) => {

    return new Date(time).toLocaleTimeString(locales, options)
}

