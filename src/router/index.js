import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wuziqi from '../components/Wuziqi'
import Drag from '../components/drag'
import Canvas from '../components/Canvas'
import NumberPuzzle from '../components/NumberPuzzle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wuziqi',
      component: Wuziqi
    },
    {
      path: '/1',
      name: 'Drag',
      component: Drag
    },
    {
      path: '/2',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/3',
      name: 'Canvas',
      component: Canvas
    },
    {
      path: '/4',
      name: 'NumberPuzzle',
      component: NumberPuzzle
    },

  ]
})
