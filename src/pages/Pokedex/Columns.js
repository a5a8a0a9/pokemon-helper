import pokedex from '@/assets/json/pokedex.json'
import CNS2unicode_2 from '@/assets/json/CNS2unicode_2.json'
import CNS2unicode_15 from '@/assets/json/CNS2unicode_15.json'
import CNS2unicode_BMP from '@/assets/json/CNS2unicode_BMP.json'
import CNS_stroke from '@/assets/json/CNS_stroke.json'

let unicode2CNS = {}
for (let CNS in CNS2unicode_2) {
  const unicode = CNS2unicode_2[CNS]
  unicode2CNS[unicode] = CNS
}
for (let CNS in CNS2unicode_15) {
  const unicode = CNS2unicode_15[CNS]
  unicode2CNS[unicode] = CNS
}
for (let CNS in CNS2unicode_BMP) {
  const unicode = CNS2unicode_BMP[CNS]
  unicode2CNS[unicode] = CNS
}

export { unicode2CNS, CNS_stroke }

export const strokeMapping = pokedex.reduce((pVal, cVal) => {
  if (!pVal[cVal.stroke]) {
    pVal[cVal.stroke] = {
      stroke: cVal.stroke,
      list: []
    }
  }
  pVal[cVal.stroke].list.push(cVal.name[0])
  return pVal
}, {})

export const strokeOptions = Object.values(strokeMapping).map(({ stroke }) => {
  return {
    id: stroke,
    value: stroke,
    name: `${stroke} 劃`
  }
})
