import {
    getDictRegionData,
    getDicCountrytData,
    getDictBlockData,
    getDictWelltypeData,
    getDictWellshapeData,
    getDictWellstatusData,
    getDictOperatordivisionData,
    getDictOperatorData,
    getDictriskTypeData,
    getDictRiskLevelData,
    getDictOperationStatusData,
    getDictuserTypeData,
    getDictuserIdentityData,
    getDictFolderTypeData,
    getDictresourceTypeData,
    getDictuserStateData,

  }  from "@/api/dic/dic.js";


export default {
    name: 'Dictionary',
    data() {
      return {
        selectedItem: 0, // 默认选中第一个项（国家）
        columns: [], // 动态列
        contryDatas: [],
      };
    },
    methods: {
      search() {
        console.log('搜索功能待实现');
      },
    },
    methods: {
    async selectItem(index) {
        this.selectedItem = index;
        if (index === 0) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'name', label: '国家' },
            { prop: 'countryCode', label: '编码' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 1) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'regionCode', label: '区域编码' },
            { prop: 'countryCode', label: '国家编码' },
            { prop: 'name', label: '区域' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 2) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'blockCode', label: '区块编码' },
            { prop: 'regioncode', label: '区域编码' },
            { prop: 'name', label: '区块' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 3) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'welltypeCode', label: '编码' },
            { prop: 'name', label: '井型' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 4) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'wellstateCode', label: '编码' },
            { prop: 'name', label: '井状态' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 5) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'wellshapeCode', label: '编码' },
            { prop: 'name', label: '井别' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 6) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'operatordivisionCode', label: '编码' },
            { prop: 'name', label: '公司名' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 7) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'operatorCode', label: '编码' },
            { prop: 'name', label: '作业者' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 8) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'riskType', label: '编码' },
            { prop: 'name', label: '风险类型' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 9) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'riskLevel', label: '编码' },
            { prop: 'name', label: '风险等级' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 10) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'operationStatusCode', label: '编码' },
            { prop: 'name', label: '作业状态' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 11) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'userType', label: '编码' },
            { prop: 'name', label: '用户类型' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 12) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'userIdentity', label: '编码' },
            { prop: 'name', label: '用户身份' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 13) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'userState', label: '编码' },
            { prop: 'name', label: '用户状态' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 14) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'folderType', label: '编码' },
            { prop: 'name', label: '系统目录' },
            { prop: 'comments', label: '描述' },
          ];
        } else if (index === 15) {
          this.columns = [
            { prop: 'order', label: '序号' },
            { prop: 'resourceType', label: '编码' },
            { prop: 'name', label: '资源类型' },
            { prop: 'comments', label: '描述' },
          ];
        }
        this.fetchData(index); // 切换选项时获取数据
      },
      async FirstSelect() {       
        await this.selectItem(0);
        const rlt = await getDicCountrytData().then(async (res) => {
          this.contryDatas = res.data; // 将获取的数据存入 contryDatas
        });
      },
      async fetchData(index) {
        try {
          // 模拟获取数据
          let response;
          if (index === 0) {
            const rlt = await getDicCountrytData().then(async (res) => {
            this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建国家'; // 修改按钮文字
          } else if (index === 1) {
            const rlt = await getDictRegionData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建区域'; // 修改按钮文字
          } else if (index === 2) {
            const rlt = await getDictBlockData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建区块'; // 修改按钮文字
          } else if (index === 3) {
            const rlt = await getDictWelltypeData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建井型'; // 修改按钮文字
          } else if (index === 4) {
            const rlt = await getDictWellstatusData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建井状态'; // 修改按钮文字
          } else if (index === 5) {
            const rlt = await getDictWellshapeData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建井别'; // 修改按钮文字
          } else if (index === 6) {
            const rlt = await getDictOperatordivisionData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建作业公司'; // 修改按钮文字
          } else if (index === 7) {
            const rlt = await getDictOperatorData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建作业者'; // 修改按钮文字
          } else if (index === 8) {
            const rlt = await getDictriskTypeData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建风险类型'; // 修改按钮文字
          } else if (index === 9) {
            const rlt = await getDictRiskLevelData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建风险等级'; // 修改按钮文字
          } else if (index === 10) {
            const rlt = await getDictOperationStatusData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建作业状态'; // 修改按钮文字
          } else if (index === 11) {
            const rlt = await getDictuserTypeData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建用户类型'; // 修改按钮文字
          } else if (index === 12) {
            const rlt = await getDictuserIdentityData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建用户身份'; // 修改按钮文字
          } else if (index === 13) {
            const rlt = await getDictuserStateData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建用户状态'; // 修改按钮文字
          } else if (index === 14) {
            const rlt = await getDictFolderTypeData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建系统目录'; // 修改按钮文字
          } else if (index === 15) {
            const rlt = await getDictresourceTypeData().then(async (res) => {
              this.contryDatas = res.data; // 将获取的数据存入 contryDatas
            });
            this.buttonText = '新建资源类型'; // 修改按钮文字
          }
          this.contryDatas = response.data; // 将获取的数据存入 contryDatas
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
    mounted() {
      this.FirstSelect(); // 默认选中第一个项（国家）
    }
  };