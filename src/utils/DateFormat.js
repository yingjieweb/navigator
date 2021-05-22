function DateFormat(date) {
  let YY = date.getFullYear()
  let MM = parseInt(date.getMonth()) < 10 ? '0' + date.getMonth() : date.getMonth()
  let DD = parseInt(date.getDate()) < 10 ? '0' + date.getDate() : date.getDate()
  let hh = parseInt(date.getHours()) < 10 ? '0' + date.getHours() : date.getHours()
  let mm = parseInt(date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let ss = parseInt(date.getSeconds()) < 10 ? '0' + date.getSeconds() : date.getSeconds()

  return `${YY}-${++MM}-${DD} ${hh}:${mm}:${ss}`
}

export {DateFormat}
