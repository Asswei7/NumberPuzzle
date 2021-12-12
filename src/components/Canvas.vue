<template>
  <div style="position: relative">
    <div>
      <canvas id="myCanvas" width="800" height="600" style="position:absolute;z-index:-1;"></canvas>
    </div>
    <div id="one" v-drag style="position:absolute;top:0;left:0;z-index:99999;"></div>
    <!-- 2   -->
    <div id="two" v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 90,0 90,90 30,90 30,120, 90,120, 90,150, 0,150, 0,60, 60,60, 60,30, 0,30, 0,0" style="fill:red;" />
      </svg>
    </div>
    <!-- 3   -->
    <div id="three" v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90">
        <polyline points="0,0 90,0 90,150 0,150 0,120, 60,120, 60,90, 0,90, 0,60, 60,60, 60,30, 0,30 0,0" style="fill:blue;" />
      </svg>
    </div>

    <!-- 4   -->
    <div id="four"  v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 30,0 30,60 60,60 60,0 90,0 90,150 60,150 60,90 0,90 0,0" style="fill:green;" />
      </svg>
    </div>

    <!-- 5   -->
    <div id="five" v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 90,0 90,30 30,30 30,60 90,60 90,150 0,150 0,120 60,120 60,90 0,90 0,0" style="fill:beige;" />
      </svg>
    </div>

<!--     6-->
    <div id="six" v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline  points="0,0 90,0 90,30 30,30 30,60 90,60 90,150 0,150 0,0" style="fill:palegoldenrod;mask: url(#hole);" >
<!--          <mask id="hole" width="30" height="30" x="0" y="0">-->
<!--            <polyline points="30,90 60,90 60,120 30,120 30,90" style="fill:black;" />-->
<!--          </mask>-->
        </polyline>
        <polyline points="30,90 60,90 60,120 30,120 30,90" style="fill:white;" />
      </svg>
    </div>
    <!-- 7   -->
    <div id="seven" v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 90,0 90,150 60,150 60,30 30,30 30,60 0,60 0,0" style="fill:olive;" />
      </svg>
    </div>
    <!-- 8   -->
    <div id="eight" v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 90,0 90,150 0,150 0,0" style="fill:aquamarine;" />
        <polyline points="30,30 60,30 60,60 30,60 30,30" style="fill:white;" />
        <polyline points="30,90 60,90 60,120 30,120 30,90" style="fill:white;" />
      </svg>
    </div>
    <!-- 9   -->
    <div id="nine"  v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 90,0 90,150 0,150 0,120 60,120 60,90 0,90 0,0" style="fill:#2a4546;" />
        <polyline points="30,30 60,30 60,60 30,60 30,30" style="fill:white;" />
      </svg>
    </div>
    <!-- 0   -->
    <div id="zero"  v-drag style="position:absolute;top:0;left:0;z-index:99999;">
      <svg height="150" width="90" >
        <polyline points="0,0 90,0 90,150 0,150 0,0" style="fill:chocolate;" />
        <polyline points="30,30 60,30 60,120 30,120 30,30" style="fill:white;" />
      </svg>
    </div>
    <div style="margin: 30px">
      <label>
        <input type="text" v-model="number">
      </label>
      <button v-on:click="rotateNum(number)">旋转输入的数字</button>

      <button v-on:click="reverseNum(number)">翻折输入的数字</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Canvas',
  data(){
    return{
      canvas:null,
      ctx:null,
      number:0,
      rotateDegs:[
        {
          deg:0,
          id:"zero",
          reverse:0,
        },
        {
          deg:0,
          id:"one",
          reverse:0,
        },
        {
          deg:0,
          id:"two",
          reverse:0,
        },
        {
          deg:0,
          id:"three",
          reverse:0,
        },
        {
          deg:0,
          id:"four",
          reverse:0,
        },
        {
          deg:0,
          id:"five",
          reverse:0,
        },
        {
          deg:0,
          id:"six",
          reverse:0,
        },
        {
          deg:0,
          id:"seven",
          reverse:0,
        },
        {
          deg:0,
          id:"eight",
          reverse:0,
        },
        {
          deg:0,
          id:"nine",
          reverse:0,
        },
      ],

    }
  },
  mounted () {
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.drawCheckerboard();
  },
  methods:{
    rotateNum(number){
      // console.log(number)
      let id = this.rotateDegs[parseInt(number)].id
      // console.log(id)
      this.num = document.getElementById(id)
      let deg = this.rotateDegs[parseInt(number)].deg
      this.rotateDegs[parseInt(number)].deg = (deg+90)%360;
      this.num.style.transform = 'rotateY('+ (this.rotateDegs[parseInt(number)].reverse+180)%360 +'deg)' + 'rotate('+this.rotateDegs[parseInt(number)].deg+'deg)';
    },
    reverseNum(number){
      let id = this.rotateDegs[parseInt(number)].id
      this.num = document.getElementById(id)
      //只能针对初始位置进行翻转，无法旋转后进行翻折
      // this.num.style.transform = 'rotate(90deg)'+'rotateY(180deg)';
      let reverse = this.rotateDegs[parseInt(number)].reverse
      this.rotateDegs[parseInt(number)].reverse = (this.rotateDegs[parseInt(number)].reverse+180)%360
      this.num.style.transform = 'rotate('+this.rotateDegs[parseInt(number)].deg+'deg)' + 'rotateY('+ (reverse+180)%360 +'deg)';
    },

    drawCheckerboard() {
      // 画棋盘，每个方格大小是30*30
      let _this = this;
      _this.ctx.beginPath();
      _this.ctx.fillStyle = "#fff";
      _this.ctx.rect(100, 100, 900, 900);
      _this.ctx.fill();
      for (let i = 0; i < 12; i++) {
        _this.ctx.beginPath();
        _this.ctx.strokeStyle = "#06D1D2";
        _this.ctx.moveTo(15 + i * 30, 105); // 垂直方向画15根线，相距30px;
        _this.ctx.lineTo(15 + i * 30, 105+30*11);
        _this.ctx.stroke();
        _this.ctx.moveTo(15, 105 + i * 30); //水平方向画15根线，相距30px;棋盘为14*14；
        _this.ctx.lineTo(15+30*11, 105 + i * 30);
        _this.ctx.stroke();
      }
    },

  },
  directives: {
    drag: function(el) {
      let one = el; //获取当前元素
      one.onmousedown = e => {
        //算出鼠标相对元素的位置
        let disX = e.clientX - one.offsetLeft;
        let disY = e.clientY - one.offsetTop;
        document.onmousemove = e => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;
          //移动当前元素
          one.style.left = left + "px";
          one.style.top = top + "px";
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
}
</script>

<style scoped>
#one {
  width: 30px;
  height: 150px;
  border: 1px solid #666;
  background-color: #ccc;
  /* 使用定位，脱离文档流 */
  position: relative;
  top: 10px;
  left: 10px;
  /* 鼠标移入变成拖拽手势 */
  cursor: move;
  /*z-index: 3000;*/
}


</style>
