import "./Graph.css"
import Column from "./Column"

function GraphContainer({graphObject, graphRender, filterObject}){
    let Columns = []
    console.log(graphRender);
    for (let i = 0; i < 31; i++) {
        Columns.push(<div className="column-blank"><Column column={graphObject.columns[i]} filterColors={filterObject.filterColorsClass} /></div>)
    }
    return(
        <div className="graph-container">
            <div className="column-blank"></div>
            {Columns}
        </div>
    )
}

export default GraphContainer