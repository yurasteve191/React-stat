function Column({ column,filterColors }) {
  const { top } = column
    console.log(filterColors);
  //
  let categories = Object.keys(column).reduce(
		(result, item) =>
			item !== top ? [
				...result,
				<div
					style={{ flexGrow: column[item].toString() }}
					className={`column-category ${filterColors[item]}`}
				>
					{column[item]}
				</div>,
			] : result,
		[]
	);
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
