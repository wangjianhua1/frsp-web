<template>
  <div class="login">
    <div class="from-wrap">
      <h2>登录</h2>
      <Form ref="loginData" :model="loginData" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="username">
          <Input type="text" v-model="loginData.username" placeholder="请输入账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="loginData.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="form-footer">
          <Button type="primary" @click="handleSubmit('loginData')">Submit</Button>
          <Button @click="handleReset('loginData')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  import {login} from '../api'

  export default {

    data() {
      return {
        loginData: {
          username: '',
          password: '',
          rememberMe: true
        },
        ruleValidate: {
          username: [
            {required: true, message: '账号不能为空', trigger: 'change'},
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {type: 'string', min: 5, max: 16, message: '密码长度6-16个字符', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs.loginData.validate((valid) => {
          if (valid) {
            login(this.loginData).then(res=>{
              this.$Message.success('提交成功!')
              localStorage.setItem('user', JSON.stringify({username:'admin',password:'admin'}));
              this.$router.push({
                path: '/'
              })
            });
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style scoped>
  html, body {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
  }

  .login {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
    position: relative;
  }

  .login .from-wrap {
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -150px;
    width: 400px;
    height: 240px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
  }

  .login h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .login FormItem {
    margin-bottom: 15px;
  }

  .login .form-footer {
    text-align: right;
  }

  .ivu-form-item-required .ivu-form-item-label:before {
    display: none;
  }
</style>
