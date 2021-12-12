<style lang="css" scoped>
.aa{
  transition: all 2s;
}
.go{
  transform:rotate(-180deg);
  transition: all 2s;
}
</style>
<template>
  <div>
    <button :class="[rotate?'go':'aa']" @click="start">hello</button>
<!--    //class随rotate的true或者false改变 我这为图方便用了项目里的图标测试，图片也是一样的~-->
  </div>

</template>
<script>
export default {
  name: 'NumberPuzzle',
  data () {
    return {
      rotate:false
    }
  },
  methods: {
    start(){
      this.rotate=!this.rotate;
      console.log(this.rotate)
    }
  }
}
</script>


