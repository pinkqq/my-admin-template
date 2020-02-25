<template>
  <div class="login-container">
    <div class="login" v-loading="loading">
      <el-image
        class="logo"
        alt="logo-login"
        fit="contain"
        :src="require('@/assets/logo-login.png')"
      />
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
            maxlength="32"
            placeholder="用户名"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :type="passwordType"
            maxlength="32"
            placeholder="密码"
            @keyup.enter.native="login"
            ref="password"
          ></el-input>
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="login">
            登 录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="copyright">
      © 2014-2019 Hecai Network Technology Co., Ltd. |
      <a href="http://www.beian.miit.gov.cn">浙ICP备14002505号-4</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      passwordType: "password",
      loginForm: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码至少为6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    login() {
      this.$refs.loginForm.validate(value => {
        if (value) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.replace(this.$route.query.redirect || "/");
              this.loading = false;
            })
            .finally(() => {
              this.loading = false;
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
}
.copyright {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  height: 40px;
}
.login {
  position: relative;
  top: 15vh;
  width: 250px;
  margin: 0 auto;
  text-align: center;

  .logo {
    width: 80px;
    height: 140px;
    margin-bottom: 20px;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: #444;
    cursor: pointer;
    user-select: none;
  }

  .submit {
    width: 100%;
  }
}
</style>
