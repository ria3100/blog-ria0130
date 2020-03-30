export const formatSEODate = (dateString: string, dateModified = false) => {
  if (!dateString && dateModified) return ''

  return dateString
    ? new Date(dateString).toISOString()
    : new Date().toISOString()
}

export const formatDisplayDate = (dateString: string) => {
  return new Date(dateString).toUTCString().replace(' 00:00:00 GMT', '')
}

export const getSecondsSinceEpoch = (dateString: string) => {
  return new Date(dateString).getTime() / 1000
}
