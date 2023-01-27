import "./Filter.css"
import Button from "./Button"

function FilterContainer({filterObject, clickFilterFunc}){
    return(
        <div className="filter-container">
            <div className="filter-buttons-section">
                <Button typeBtn="filterBtn" filterType="doneTasks" filterTitle = "Done Tasks" filterObject={filterObject} />
                <Button typeBtn="filterBtn" filterType="timeOverTasks" filterTitle = "Time Over Tasks" filterObject={filterObject} />
                <Button typeBtn="filterBtn" filterType="inProcessTasks" filterTitle = "In Process Tasks" filterObject={filterObject} />
            </div>
            <Button typeBtn="activeFilterBtn" clickFilterFunc={clickFilterFunc} graphObject={filterObject.graphObject} filterObject={filterObject} />
        </div>
    )
}

export default FilterContainer