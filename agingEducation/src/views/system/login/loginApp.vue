<style lang="less">
@bdColor: #fff;
.login {
  margin-top: 100px;
  height: 600px;
  h3 {
    margin-bottom: 40px;
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    color: #303030;
  }
}

.onelist {
  margin-top: 30px;
  text-align: center;
  > p {
    display: inline-block;
    position: relative;
    font-size: 22px;
    color: #303030;
    span {
      position: absolute;
      left: -105px;
      width: 100px;
      line-height: 55px;
      text-align: right;
    }
    input {
      border: 1px solid @bdColor;
      width: 315px;
      height: 53px;
      text-indent: 20px;
      outline: none;
    }
  }
}

.cm-button {
  display: inline-block;
  width: 315px;
  height: 50px;
  border: 0;
  color: #fff;
  background-color: #389744;
  font-size: 22px;
  cursor: pointer;
  border-radius: 5px;
}

.c-button {
  margin-top: 80px;
  text-align: center;
}
</style>
<template>
  <div>
    <ageHead></ageHead>

    <div class="g-content" ref="size">
      <div class="login">
        <h3>登录</h3>
        <div class="onelist">
          <p>
            <span>手机号：</span>
            <input type="text" placeholder="单行输入" v-model="phone">
          </p>
        </div>
        <div class="onelist">
          <p>
            <span>密码：</span>
            <input type="password" placeholder="单行输入" v-model="pass" @keyup.enter="submitForm">
            <a style="display:none;" href="./find.html">忘记密码?</a>
          </p>
        </div>
        <div class="c-button">
          <button class="cm-button" @click="submitForm">登录</button>
        </div>
      </div>
    </div>
    <ageFoot></ageFoot>
  </div>
</template>
<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      phone: "",
      pass: ""
    };
  },
  mounted() {},
  methods: {
    //验证提交
    submitForm() {
      let phone = this.reg.checkPhone(this.phone);
      if (phone != "ok") {
        this.$alert(phone, "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.pass == "") {
        this.$alert("密码不能为空", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }

      let param = {
        phone: this.phone,
        passWord: this.pass
      };

      this.until.postCard("/telev/usr/login", JSON.stringify(param)).then(
        res => {
          if (res.status == 200) {
            sessionStorage.setItem("DD_token", JSON.stringify(res.data));
            window.history.go(-1);
          } else {
            this.$alert(res.message, "提示", {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
        },
        err => {
          this.$alert("登录失败!", "提示", {
            confirmButtonText: "确定",
            callback: action => {}
          });
        }
      );
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>
