import "./App.css"
import FilterContainer from "./Modules/Components/Filter/FilterContainer"
import GraphContainer from "./Modules/Components/Graph/GraphContainer"
import React, { useState } from "react"
import { Graphic, UserFilter } from "./Modules/Add-ons/Classes"

const GraphData = {
  userStatistic: [
    {
      doneTasks: 8,
      timeOverTasks: 8,
      inProcessTasks: 6,
    },
    {
      doneTasks: 9,
      timeOverTasks: 9,
      inProcessTasks: 5,
    },
    {
      doneTasks: 3,
      timeOverTasks: 4,
      inProcessTasks: 1,
    },
    {
      doneTasks: 9,
      timeOverTasks: 4,
      inProcessTasks: 2,
    },
    {
      doneTasks: 2,
      timeOverTasks: 7,
      inProcessTasks: 10,
    },
    {
      doneTasks: 5,
      timeOverTasks: 0,
      inProcessTasks: 7,
    },
    {
      doneTasks: 4,
      timeOverTasks: 9,
      inProcessTasks: 8,
    },
    {
      doneTasks: 0,
      timeOverTasks: 1,
      inProcessTasks: 0,
    },
    {
      doneTasks: 10,
      timeOverTasks: 7,
      inProcessTasks: 9,
    },
    {
      doneTasks: 2,
      timeOverTasks: 7,
      inProcessTasks: 2,
    },
    {
      doneTasks: 5,
      timeOverTasks: 6,
      inProcessTasks: 6,
    },
    {
      doneTasks: 1,
      timeOverTasks: 7,
      inProcessTasks: 10,
    },
    {
      doneTasks: 1,
      timeOverTasks: 10,
      inProcessTasks: 9,
    },
    {
      doneTasks: 8,
      timeOverTasks: 2,
      inProcessTasks: 0,
    },
    {
      doneTasks: 0,
      timeOverTasks: 3,
      inProcessTasks: 3,
    },
    {
      doneTasks: 5,
      timeOverTasks: 5,
      inProcessTasks: 1,
    },
    {
      doneTasks: 6,
      timeOverTasks: 10,
      inProcessTasks: 10,
    },
    {
      doneTasks: 10,
      timeOverTasks: 2,
      inProcessTasks: 2,
    },
    {
      doneTasks: 0,
      timeOverTasks: 0,
      inProcessTasks: 3,
    },
    {
      doneTasks: 3,
      timeOverTasks: 0,
      inProcessTasks: 6,
    },
    {
      doneTasks: 5,
      timeOverTasks: 8,
      inProcessTasks: 6,
    },
    {
      doneTasks: 4,
      timeOverTasks: 2,
      inProcessTasks: 6,
    },
    {
      doneTasks: 9,
      timeOverTasks: 5,
      inProcessTasks: 7,
    },
    {
      doneTasks: 0,
      timeOverTasks: 0,
      inProcessTasks: 4,
    },
    {
      doneTasks: 9,
      timeOverTasks: 4,
      inProcessTasks: 4,
    },
    {
      doneTasks: 10,
      timeOverTasks: 6,
      inProcessTasks: 3,
    },
    {
      doneTasks: 3,
      timeOverTasks: 9,
      inProcessTasks: 3,
    },
    {
      doneTasks: 0,
      timeOverTasks: 0,
      inProcessTasks: 3,
    },
    {
      doneTasks: 8,
      timeOverTasks: 4,
      inProcessTasks: 0,
    },
    {
      doneTasks: 10,
      timeOverTasks: 5,
      inProcessTasks: 7,
    },
    {
      doneTasks: 1,
      timeOverTasks: 9,
      inProcessTasks: 0,
    },
  ],
  graphHeigth: 400,
}
const GraphObject = new Graphic(GraphData)

const FilterData = {
  filterColorsClass: {
    doneTasks: "green-bg",
    timeOverTasks: "red-bg",
    inProcessTasks: "yellow-bg",
  },
  graphObject: GraphObject,
}
const FilterObject = new UserFilter(FilterData)
// FilterObject.setFilter('doneTasks')

GraphObject.generateListOfColumnsByFilter(FilterObject.selectedList)

function App() {
  const [graphRender, setGraphRender] = useState(1)

  function ClickFilter() {
    GraphObject.generateListOfColumnsByFilter(FilterObject.selectedList)
    // alert(FilterObject.selectedList)
    setGraphRender(graphRender + 1)
  }
  console.log("erwerwe")
  return (
    <div className="App">
      <GraphContainer filterObject={FilterObject} graphObject={GraphObject} graphRender={graphRender} />
      <FilterContainer filterObject={FilterObject} clickFilterFunc={ClickFilter} />
    </div>
  )
}

export default App
