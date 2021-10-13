export const populateProducts = (parents, json) => {
    const tmpArr = [...parents]
    parents.map((parent, parentIndex) => {
        json.map(instance => {
            if (parent.CategoryName === instance.CategoryName) {
                tmpArr[parentIndex].products.push({
                    name: instance.pname,
                    description: instance.Descriptions,
                    price: instance.price,
                    measurename: instance.measurename,
                    img: instance.img,
                    order: instance.pOrder
                })
            }
        })
    })
    return tmpArr
};
export const transform = (incomingArr) => {
    const arrToSend = []
    incomingArr.map((instance) => {
      const tmpObj = { ...instance }
      tmpObj.measures = []
      if(instance.qrMenuIsGrammView) {
        // PUSH MEASURE NAMES
        if(instance.CategoryName === "АРХИ") {
          tmpObj.measures.push("50гр")
          tmpObj.measures.push("0.7L")
        }
        if(instance.CategoryName === "WHISKEY") {
          tmpObj.measures.push("50гр")
          tmpObj.measures.push("0.7L")
        }
        if(instance.CategoryName === "LIQUOR") {
          tmpObj.measures.push("50гр")
          tmpObj.measures.push("0.7L")
        }
        if(instance.CategoryName === "TEQUILA") {
          tmpObj.measures.push("50гр")
          tmpObj.measures.push("0.7L")
        }
        if(instance.CategoryName === "КОНЪЯК") {
          tmpObj.measures.push("50гр")
          tmpObj.measures.push("0.7L")
        }

        const tmpProsObj = {}
        instance.products.map(pro => {
          if(typeof tmpProsObj[pro.name] === 'undefined'){
            tmpProsObj[pro.name] = []
            tmpProsObj[pro.name].push(pro)
          } else {
            tmpProsObj[pro.name].push(pro)
          }
        })
        const nextArr = []
        for (let [key, value] of Object.entries(tmpProsObj)) {
          if(value.length > 1){
            const tmp = {...value[0]}
            tmp.hasVariant = true
            tmp.variants = []
            if(instance.CategoryName === "АРХИ") {
              value.map(val => val.measurename === "50гр" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.7" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.75L" && tmp.variants.push(val))
            }
            else if(instance.CategoryName === "WHISKEY") {
              value.map(val => val.measurename === "50гр" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.7" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.75L" && tmp.variants.push(val))
            }
            else if(instance.CategoryName === "LIQUOR") { 
              value.map(val => val.measurename === "50гр" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.7" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.75L" && tmp.variants.push(val))
            }
            else if(instance.CategoryName === "TEQUILA") { 
              value.map(val => val.measurename === "50гр" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.7" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.75L" && tmp.variants.push(val))
            }
            else if(instance.CategoryName === "КОНЪЯК") { 
              value.map(val => val.measurename === "50гр" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.7" && tmp.variants.push(val))
              value.map(val => val.measurename === "0.75L" && tmp.variants.push(val))
            }
            else {
              value.map(val => tmp.variants.push(val))
            }
            nextArr.push(tmp)
          } else {
            nextArr.push({...value[0], hasVariant: false})
          }
        }
        tmpObj.products = nextArr
        arrToSend.push(tmpObj)
      } else {
        arrToSend.push(instance)
      }
    })
    return arrToSend
  }

  export const returnParents = (arr) => {
    const tmp = []; arr.map(el => tmp.push({ CategoryID: el.CategoryID, CategoryName: el.CategoryName, catOrder: el.catOrder, qrMenuIsGrammView: el.qrMenuIsGrammView, products: [] }))
    const filtered = tmp.filter((v, i, a) => a.findIndex(t => (t.CategoryID === v.CategoryID)) === i)
    const ascending = filtered.sort((a, b) => (a.catOrder > b.catOrder) ? 1 : -1)
    return ascending
  }