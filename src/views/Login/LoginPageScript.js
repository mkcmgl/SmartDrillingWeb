import axios from 'axios';


import {
  login,
  getUserList,
  cryptoLogin,
  getVerifyCode,
  getUserByUserId,
}  from "@/api/auth/user.js";
export default {
    name: 'LoginPage',
    data() {
    return {
      form: {
        username: "wyf",
        password: "123456",
        verifyCode: "",
      },
      rules: {
        username: [
          {
            required: true,
           
            trigger: "blur",
          },
        ],
      },
      verificationCode: "",
    };
  },
    methods: {
      async login() {
        if (this.form.username === "") {
          this.$message.error("请输入用户名");
          return;
        }
        if (this.form.password === "") {
          this.$message.error("请输入密码");
          return;
        }
        if (this.form.verifyCode != this.verificationCode) {
          this.$message.error("请输入正确的验证码");
          return;
        }
        this.loading = true;
        const postData = {
          UserId: this.form.username,
          PassWord: this.form.password,
          AuthWay: 0,
          Code: this.form.verifyCode,
        };

        // const response2 = await axios.get('http://123.60.81.112:6001/v1/identity/sso/code/getByUserId?userId=wyf');
        // if (response2.data.success) {
        //   this.$router.push('/mainview'); // 导航到 Mainviewpage
        // } else {
        //   this.$message.error('登录失败，请检查用户名和密码');
        // }
        // const token = "0.2.TEST.720000000.649001880583709933.273EA89A48C5FB35A293136DC4CFE82046309CD6";
        // const response1 = await axios.get('http://123.60.81.112:6001/v1/identity/user/getList', {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
        // if (response1.data.success) {
        //   this.$router.push('/mainview'); // 导航到 Mainviewpage
        // } else {
        //   this.$message.error('登录失败，请检查用户名和密码');
        // }
        // this.$storage.set("TOKEN", "0.2.TEST.720000000.649001880583709933.273EA89A48C5FB35A293136DC4CFE82046309CD6");

        // const rlt1 = await getUserList();
        // const rlt = await getDictData();

        

        const key = "EGCNPCV1";
        const iv = "CNPCV1EG";
        const str = await GetRequestJson(postData, true, 1, key, iv)
        const response =  await login(str)
          .then(async (res) => {
            const {
              accessToken,
              userRealName,
              userID,
              userType,
              requireBinding,
              requireTOTP,
              totpAuthenticateId,
              regions,
              requireChangePwd,
              roles,
            } = res.data;

            this.$storage.set("USERNAME", userRealName);
            this.$storage.set("PASSWORD", this.form.password);
            this.$storage.set("ROLENAME", roles ? roles[0] : "");
            this.$storage.set("USERID", userID);
            this.$storage.set("TOKEN", accessToken);
            this.$storage.set("USETYPE", userType);
            this.$storage.set("USERREGIONS", JSON.stringify(regions || []));
            this.$storage.set("ENCRYOPTION", this.password);

            // this.$router.push('/main/overview'); // 导航到 main/overview 页面
            this.$router.push('/Home'); 
            
          })
          .catch((err) => {
           
          });
         
        },
      async fetchVerificationCode() {
        console.log('fetchVerificationCode called'); // 添加日志
        try {
          if  (this.form.username === '') {
            return;
          }
          const rlt = await getVerifyCode({ userId: this.form.username });
          this.verificationCode = rlt.data.code; // 假设返回的数据中包含验证码
          this.form.verifyCode = rlt.data.code; // 假设返回的数据中包含验证码
        } catch (error) {
          console.error('获取验证码失败:', error);
        }
      },
    },
    mounted() {
       this.fetchVerificationCode(); // 组件挂载时获取验证码
    },
  };

  