export function resetObject(data) {
  if (!data) {
    return
  }

  for (const key in data) {
    data[key] = null
  }
}

export function resetArray(array) {
  if (!array) {
    return
  }

  if (Array.isArray(array)) {
    array.splice(0)
  }
}

export function assignObject(originObj, copyFrom) {
  if (!originObj) {
    return
  }

  if (copyFrom) {
    Object.assign(originObj, copyFrom)
  } else {
    if (Array.isArray(originObj)) {
      resetArray(originObj)
    } else {
      resetObject(originObj)
    }
  }
}
