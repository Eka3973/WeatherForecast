export const formatDate = (date, locales = undefined, options = undefined) => {
    const formatDate = typeof date === 'number' ? date * 1000 : date

    return new Date(formatDate).toLocaleDateString(locales, options)
}


