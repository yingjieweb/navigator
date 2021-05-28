import $ from 'jQuery'
import * as echarts from 'echarts';
import '../database/china.js'

let $mapButton = $('.map') // 获取通知 button
let $mapModal = $('.map-modal') // 获取 map 模态框
let $mapModalClose = $('.map-modal-close') // 获取 map 模态框 close

$mapButton.on('click', () => {$mapModal.addClass('show-map-modal')})
$mapModalClose.on('click', () => {$mapModal.removeClass('show-map-modal')})

let chartDom = document.getElementsByClassName('china-map')[0]

let baseOption = {
  tooltip: {
    show: false
  },
  geo: {
    map: "china",
    roam: false,// 一定要关闭拖拽
    zoom: 1.23,
    center: [105, 36], // 调整地图位置
    label: {
      normal: {
        show: false, //关闭省份名展示
        fontSize: "10",
        color: "rgba(0,0,0,0.7)"
      },
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: "#DFEAED",
        borderColor: "#389dff",
        borderWidth: 1, //设置外层边框
        shadowBlur: 5,
        shadowOffsetY: 8,
        shadowOffsetX: 0,
        shadowColor: "#DFEAED"
      },
      emphasis: {
        areaColor: "#70BFC7",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 5,
        borderWidth: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    }
  },
  series: [
    {
      type: "map",
      map: "china",
      roam: false,
      zoom: 1.23,
      center: [105, 36],
      // geoIndex: 1,
      // aspectScale: 0.75, //长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true,
          textStyle: {
            color: "#fff"
          }
        }
      },
      itemStyle: {
        normal: {
          areaColor: "#DFEAED",
          borderColor: "#389dff",
          borderWidth: 0.5
        },
        emphasis: {
          areaColor: "#70BFC7",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 5,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};
const Chart = echarts.init(chartDom);
Chart.setOption(baseOption)

let citiesCoordinate = [
  { name: '枣庄', value: [117.57, 34.86], time: '2018-06-10' },
  { name: '南京', value: [118.78, 32.04], time: '2018-09-23' },
  { name: '青岛', value: [120.33, 36.07], time: '2019-01-26' },
  { name: '大连', value: [121.62, 38.92], time: '2019-06-16' },
  { name: '济南', value: [117, 36.65], time: '2019-08-08' },
  { name: '潍坊', value: [119.1, 36.62], time: '2020-05-01' },
  { name: '杭州', value: [120.19, 30.26], time: '2020-08-01' },
  { name: '沈阳', value: [123.38, 41.8], time: '2021-05-16' },
];
let meetCoordinate = [{ name: '曲阜', value: [116.98, 35.59], time: '2018-06-29'}]

let upperOption = {
  series: [
    {
      type: "map",
      map: "china",
      roam: false,
      zoom: 1.23,
      center: [105, 36],
      // geoIndex: 1,
      // aspectScale: 0.75, //长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: "#FFCCCC",
          borderColor: "#FF6666",
          borderWidth: 0.5
        },
        emphasis: {
          areaColor: "#FF9966",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 5,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    },
    {
      name: "cities",
      type: "scatter",
      coordinateSystem: "geo",
      data: citiesCoordinate,
      symbol: "circle",
      symbolSize: 5,
      hoverSymbolSize: 8,
      tooltip: {
        formatter(value) {
          return `${value.data.name} <br/> &nbsp;&nbsp; — ${value.data.time}`
        },
        position: "right",
        show: true
      },
      encode: {
        value: 2
      },
      label: {
        formatter: "{b}",
        position: "right",
        show: true
      },
      itemStyle: {
        color: "#C53938"
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    {
      name: "meetCoordinate",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: meetCoordinate,
      symbolSize: 15,
      tooltip: {
        formatter(value) {
          return `你不来, 我不老 <br/> ${value.data.name} — ${value.data.time}`
        },
        position: "right",
        show: true
      },
      encode: {
        value: 2
      },
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke",
        color: "#C53938",
        period: 9,
        scale: 2
      },
      hoverAnimation: true,
      label: {
        formatter: "{b}",
        position: "right",
        show: true
      },
      itemStyle: {
        color: "#C53938",
        shadowBlur: 2,
        shadowColor: "#333"
      },
      zlevel: 1
    }
  ]
};

const myChart = echarts.init(chartDom);
myChart.setOption(upperOption)


