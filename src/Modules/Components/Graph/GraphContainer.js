import "./Graph.css"
import Column from "./Column"

function GraphContainer({graphObject, graphRender, filterObject}){
    console.log(graphRender);
    
    let columns = [...Array(31)].map((_, idx) => (
		<div className="column-blank">
			<Column
				column={graphObject.columns[idx]}
				filterColors={filterObject.filterColorsClass}
			/>
		</div>
	));

    return(
        <div className="graph-container">
            <div className="column-blank"></div>
            {columns}
        </div>
    )
}

export default GraphContainer
