//
export class UserFilter {
  selectedList = []

  constructor({ filterColorsClass, graphObject }) {
    this.filterColorsClass = filterColorsClass
    this.graphObject = graphObject
  }
  //
  setFilter(filterTitle) {
    this.selectedList.push(filterTitle)
  }
  //
  removeFilter(filterTitle) {
    this.selectedList.pop(filterTitle)
  }
}

export class Graphic {
  columns = []

  constructor({ userStatistic, graphHeigth }) {
    this.graphHeigth = graphHeigth
    this.userStatistic = userStatistic
  }

  generateListOfColumnsByFilter(selectedList) {
    try {
      const filteredUserStatistic = Object.values(this.userStatistic).map((el) => {
        let result = {}
        selectedList.forEach((element) => {
          result[element] = el[element]
        })
        return result
      })
      //GET CONVERTED COLUMNS HEIGTH
      //
      const listOfColumsHeigthNormal = Object.keys(filteredUserStatistic).map((el) => {
        return Object.values(filteredUserStatistic[el]).reduce((total, item) => {
          return total + item
        })
      })
      //
      const max = Math.max.apply(null, listOfColumsHeigthNormal)
      //
      const pixelsPerOneUnit = this.graphHeigth / max

      const listOfColumsHeigthConverted = []
      for (let i = 0; i < Array.from(this.userStatistic).length; i++) {
        listOfColumsHeigthConverted.push(this.graphHeigth - listOfColumsHeigthNormal[i] * pixelsPerOneUnit)
      }
      //
      // console.log(listOfColumsHeigthConverted);
      this.columns = filteredUserStatistic.map((el) => {
        const result = {
          ...el,
          top: listOfColumsHeigthConverted[filteredUserStatistic.indexOf(el)],
        }
        return result
      })
      return true
    } catch {
        this.columns = this.userStatistic.map((el) => {
            const result = {
              top: 400,
            }
            return result
          })
        console.log('filter not selected.');
        return false
    }
  }
}
