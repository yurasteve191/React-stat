function Column({ column,filterColors }) {
  const { top } = column
    console.log(filterColors);
  //
  let categories = []
  Object.keys(column).forEach((element) => {
    if (element !== "top") {
      const elStyle = {
        flexGrow: column[element].toString(),
        // backgroundColor: filterColors[element]
      }
      categories.push(
        <div style={elStyle} className={`column-category ${filterColors[element]}`}>
          {column[element]}
        </div>
      )
    }
  })
  //
  const heightCol = 400 - top + "px"
  const mainStyle = {
    top: top,
    height: heightCol,
  }
  return (
    <div style={mainStyle} className="column">
      {categories}
    </div>
  )
}

export default Column
