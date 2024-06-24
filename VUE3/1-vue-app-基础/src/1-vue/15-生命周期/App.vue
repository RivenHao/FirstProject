<template>
  <div>
    <button @click="handleClick">g改变echarts宽度</button>
    <div id="main" :style="{width: mywidth,height:myheight}"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data() {
        return {
            text:'',
            option:{},
            mywidth:'600px',
            myheight:'400px'
        }
    },
    methods:{
      handleClick(){
        this.mywidth = '800px'
        this.myheight = '500px'
        this.$nextTick(()=>{
          this.myChart.resize() // 执行时间比updated晚，可以在某个更新后触发，不会雨露均沾
        })
      }
    },
    beforeCreate(){
      // 
    },
    created(){
      // 初始化工作，给data中较长的数据赋值
      this.text='222222222'
    },
    beforeMount(){
      // 挂载前，很少用到
    },
    mounted(){
      // 挂载后，可访问到div等等DOM节点
      // 订阅发布。ajax，访问dom
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('main'));
      // 指定图表的配置项和数据
      this.option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
    beforeUpdate(){
      // 更新之前
    },
    updated(){
      //更新之后，雨露均沾，谁更新都会触发，影响性能
      this.myChart.resize()
    },
    beforeUnmount(){
      // 组件销毁之前 -- v-if
    },
    unmounted(){
      // 组件销毁后
    }
}
</script>