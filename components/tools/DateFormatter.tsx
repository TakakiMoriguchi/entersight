export default function DateFormatter(dt: Date) {
  let date = new Date(dt)
  var y = date.getFullYear()
  var m = ('00' + (date.getMonth()+1)).slice(-2)
  var d = ('00' + date.getDate()).slice(-2)

  return (
    <>
      { y + '/' + m + '/' + d }
    </>
  )
}