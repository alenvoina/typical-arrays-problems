exports.min = function min(array = []) {
  if (array.length === 0) return 0

   let min = Infinity

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }

  return min
}

exports.max = function max(array = []) {
  if (array.length === 0) return 0

    let max = -Infinity

    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
      }
    }
    return max
}

exports.avg = function avg(array = []) {
  if (array.length === 0) return 0

  let avg = 0
  for (let i = 0; i < array.length; i++) {
      avg+=array[i]
    }
    avg/=array.length
  return avg

}
