<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" @on-select="menuSelect">
      <div class="header-platform"><span>金融风险监管平台</span></div>
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"/>
            信息采集
          </template>
          <MenuItem name="1-1" to="/404">基本信息</MenuItem>
          <MenuItem name="1-2" to="/login">财务报表</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-stats"/>
            分析监测
          </template>
          <MenuItem name="2-1">风险预警</MenuItem>
          <MenuItem name="2-2">信用报告</MenuItem>
          <MenuItem name="2-3">监控设置</MenuItem>
          <MenuItem name="2-4">企业画像</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-construct"/>
            模型管理
          </template>
          <MenuItem name="3-1">指标</MenuItem>
          <MenuItem name="3-2">模型参数管理</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-people"/>
            用户管理
          </template>
          <MenuItem name="4-1">数据字典</MenuItem>
          <MenuItem name="4-2">用户管理</MenuItem>
          <MenuItem name="4-3">资源管理</MenuItem>
          <MenuItem name="4-4">角色管理</MenuItem>
          <MenuItem name="4-5">机构管理</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '199px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <Icon :style="{margin: '0 0px'}" type="md-menu" size="24"></Icon>
        <Icon :style="{float: 'right',marginTop: '10.5px'}" type="ios-person" size="28"></Icon>
        <Icon :style="{float: 'right',marginTop: '10.5px'}" type="ios-flag" size="28">
          <span>0</span>
        </Icon>
      </Header>
      <Content>
        <!--<Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>-->
        <Card style="margin: 2px 2px">
          <div :style="{height:height+'px'}"><router-view></router-view></div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        height:0
      }
    },
    methods: {
      menuSelect(name) {
        console.log(name)
      }
    },
    mounted() {
      this.height = document.body.clientHeight
      console.log(this.height)
    },
  }
</script>
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .ivu-layout-header {
    padding: 0 15px;
    height: 49px;
    line-height: 49px;
  }
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }
  .header-platform{
    background-color: white;
    height: 49px;
    text-align: center;
    line-height: 49px;
    font-size: 18px;
  }
</style>
