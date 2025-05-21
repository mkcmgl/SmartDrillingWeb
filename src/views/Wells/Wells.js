import {
    getWellList,
    getWellInfoById,
    createWell,
    deleteWell,
    updateWell,
    
  }  from "@/api/well/well";
import wellStateImage from '@/assets/Well/RealTimeWellState.svg';

export default {
    name: 'Wells',
    data() {
      return {
        newWellDialogVisible: false,
        newDrillDialogVisible: false,
        operationDialogVisible: false,
        operationContent: '',
        selectOptions: {
          options1: [],
          options2: [],
          options3: [],
          options4: [],
          options5: [],
          options6: [],
          options7: [],
          options8: [],
          options9: [],
          options10: []
        }, // 下拉选项
        WellData: [
          { 
            index: 1, 
            name: '井A', 
            startDepth: 1000, 
            endDepth: 1500, 
            area: '东区', 
            block: '区块1', 
            lastUpdateTime: '2023-09-15 14:30', 
            lastUpdateUser: '张三', 
            operation: '编辑', 
            state: '正常',
            drillData: [
              { drillIndex: 1, drillName: '钻次A1', drillDepth: 500, drillTime: '2023-09-10' },
              { drillIndex: 2, drillName: '钻次A2', drillDepth: 600, drillTime: '2023-09-11' }
            ]
          },
          { 
            index: 2, 
            name: '井B', 
            startDepth: 1200, 
            endDepth: 1700, 
            area: '西区', 
            block: '区块2', 
            lastUpdateTime: '2023-09-14 09:20', 
            lastUpdateUser: '李四', 
            operation: '编辑', 
            state: '维护',
            drillData: [
              { drillIndex: 1, drillName: '钻次B1', drillDepth: 700, drillTime: '2023-09-12' },
              { drillIndex: 2, drillName: '钻次B2', drillDepth: 800, drillTime: '2023-09-13' }
            ]
          },
          { 
            index: 3, 
            name: '井C', 
            startDepth: 900, 
            endDepth: 1300, 
            area: '南区', 
            block: '区块3', 
            lastUpdateTime: '2023-09-13 16:45', 
            lastUpdateUser: '王五', 
            operation: '编辑', 
            state: '正常',
            drillData: [
              { drillIndex: 1, drillName: '钻次C1', drillDepth: 400, drillTime: '2023-09-14' },
              { drillIndex: 2, drillName: '钻次C2', drillDepth: 500, drillTime: '2023-09-15' }
            ]
          },
          { 
            index: 4, 
            name: '井D', 
            startDepth: 1100, 
            endDepth: 1600, 
            area: '北区', 
            block: '区块4', 
            lastUpdateTime: '2023-09-12 11:00', 
            lastUpdateUser: '赵六', 
            operation: '编辑', 
            state: '停用',
            drillData: [
              { drillIndex: 1, drillName: '钻次D1', drillDepth: 600, drillTime: '2023-09-16' },
              { drillIndex: 2, drillName: '钻次D2', drillDepth: 700, drillTime: '2023-09-17' }
            ]
          },
          { 
            index: 5, 
            name: '井E', 
            startDepth: 1300, 
            endDepth: 1800, 
            area: '中区', 
            block: '区块5', 
            lastUpdateTime: '2023-09-11 13:15', 
            lastUpdateUser: '孙七', 
            operation: '编辑', 
            state: '正常',
            drillData: [
              { drillIndex: 1, drillName: '钻次E1', drillDepth: 800, drillTime: '2023-09-18' },
              { drillIndex: 2, drillName: '钻次E2', drillDepth: 900, drillTime: '2023-09-19' }
            ]
          }
        ], // 表格数据
        selectOptions: {
          options1: [
            { label: '选项1-1', value: '1-1' },
            { label: '选项1-2', value: '1-2' }
          ],
          options2: [
            { label: '选项2-1', value: '2-1' },
            { label: '选项2-2', value: '2-2' }
          ],
          options3: [
            { label: '选项3-1', value: '3-1' },
            { label: '选项3-2', value: '3-2' }
          ],
          options4: [
            { label: '选项4-1', value: '4-1' },
            { label: '选项4-2', value: '4-2' }
          ],
          options5: [
            { label: '选项5-1', value: '5-1' },
            { label: '选项5-2', value: '5-2' }
          ],
          options6: [
            { label: '选项6-1', value: '6-1' },
            { label: '选项6-2', value: '6-2' }
          ],
          options7: [
            { label: '选项7-1', value: '7-1' },
            { label: '选项7-2', value: '7-2' }
          ],
          options8: [
            { label: '选项8-1', value: '8-1' },
            { label: '选项8-2', value: '8-2' }
          ],
          options9: [
            { label: '选项9-1', value: '9-1' },
            { label: '选项9-2', value: '9-2' }
          ],
          options10: [
            { label: '选项10-1', value: '10-1' },
            { label: '选项10-2', value: '10-2' }
          ]
        } // 下拉选项
      };
    },
    methods: {
      async loading() {
        const rlt = await getWellList().then(async (res) => {
            

        });

      },
      searchUser() {
        // 搜索功能的实现
      },
      searchEmail() {
        // 搜索功能的实现
      },
      selectedValues() {
        // 搜索功能的实现
      },
  
      search() {
        // 搜索功能的实现
      },
      reset() {
        // 重置功能的实现
      },
      openNewWellDialog() {
        this.newWellDialogVisible = true;
      },
      openNewDrillDialog() {
        this.newDrillDialogVisible = true;
      },
      createNewWell() {
        // 新建井的逻辑
        this.newWellDialogVisible = false;
      },
      createNewDrill() {
        // 新建钻次的逻辑
        this.newDrillDialogVisible = false;
      },
      handleOperation(action, row) {
        console.log(`操作: ${action}`, row);        
        if (action === '编辑') {
            this.operationDialogVisible = true;
        } else if (action === '删除') {
            this.operationDialogVisible = true;
        } else if (action === '单井信息') {
            this.operationDialogVisible = true;
        } else if (action === '统计分析') {
            this.operationDialogVisible = true;
        } else if (action === '钻次分析') {
            this.operationDialogVisible = true;
        }
      },
      getWellStateImage(state) {
        return wellStateImage;
      },
      // 其他方法...
    },
    mounted() {
        this.loading(); // 组件挂载时获取验证码
     },
  };