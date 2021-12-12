<template>
  <div class="drag">
    <div class="drag_box" v-drag></div>
    <div class="number-one"></div>
    <HelloWorld
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
export default {
  name: "drag",
  components: {HelloWorld},
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    };
  },
  //注册局部组件指令
  directives: {
    drag: function(el) {
      let dragBox = el; //获取当前元素
      dragBox.onmousedown = e => {
        //算出鼠标相对元素的位置
        let disX = e.clientX - dragBox.offsetLeft;
        let disY = e.clientY - dragBox.offsetTop;
        document.onmousemove = e => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          dragBox.style.left = left + "px";
          dragBox.style.top = top + "px";
        };
        document.onmouseup = e => {
          //鼠标弹起来的时候不再移动
          document.onmousemove = null;
          //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.onmouseup = null;
        };
      };
    }
  }
};
</script>
<style scoped>
.drag {
  width: 100%;
  height: 500px;
  background-color: #fff;
}
.drag_box {
  width: 150px;
  height: 90px;
  border: 1px solid #666;
  background-color: #ccc;
  /* 使用定位，脱离文档流 */
  position: relative;
  top: 100px;
  left: 100px;
  /* 鼠标移入变成拖拽手势 */
  cursor: move;
  z-index: 3000;
}

.number-one {

}
</style>
