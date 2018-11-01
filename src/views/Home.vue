<template>
  <div class="layout">
    <Layout>
      <Header>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="dark" width="auto" :style="{height:'100%'}" :open-names="['1']" @on-select="menuSelect">
            <Submenu name="1">
              <template slot="title"><Icon type="ios-paper" />信息采集</template>
              <MenuItem name="1-1">基本信息</MenuItem>
              <MenuItem name="1-2">财务报表</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title"><Icon type="ios-people" />分析监测</template>
              <MenuItem name="2-1">风险预警</MenuItem>
              <MenuItem name="2-2">信用报告</MenuItem>
              <MenuItem name="2-3">监控设置</MenuItem>
              <MenuItem name="2-4">企业画像</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-people" />
                模型管理
              </template>
              <MenuItem name="3-1">指标</MenuItem>
              <MenuItem name="3-2">模型参数管理</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title"><Icon type="ios-stats" />用户管理</template>
              <MenuItem name="4-1">数据字典</MenuItem>
              <MenuItem name="4-2">用户管理</MenuItem>
              <MenuItem name="4-3">资源管理</MenuItem>
              <MenuItem name="4-4">角色管理</MenuItem>
              <MenuItem name="4-5">机构管理</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', height: height+'px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        height: 0
      }
    },
    methods:{
      menuSelect(name){
        console.log(name)
      }
    },
    mounted() {
      this.height = document.body.clientHeight
      console.log(this.height)
    },
    computed:{
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    text-align: center;
    width: 100px;
    height: 30px;
    background: red;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    margin-right: 0px;
    float: right;
  }
</style>
