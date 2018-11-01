import Vue from 'vue'
import HelloWorld from '@/views/Main'

describe('Main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header-platform').textContent).toEqual('金融风险管理平台')
  })
})
