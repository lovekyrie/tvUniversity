<template>
  <!--热门课程-->
  <!--内容-->
  <div class="inContent">
    <div class="learnSearch">
      <el-select v-model="value" filterable>
        <el-option label="课程名称" value="1" disabled></el-option>
        <el-option v-for="vl in options" :label="vl.label" :value="vl.value" :key="vl.label"></el-option>
      </el-select>
    </div>
    <el-table
      style="width: 100%"
      :data="signTable"
      :cell-style="cellStyle"
      :header-cell-style="headerStyle"
    >
      <el-table-column prop="name" label="课程名称" align="left"></el-table-column>
      <el-table-column prop="time" label="签到时间" align="left"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:"1",
      options: [
        {
          label: "所有",
          value: "2"
        },
        {
          label: "音乐",
          value: "3"
        },
        {
          label: "美术",
          value: "4"
        },
        {
          label: "舞蹈",
          value: "5"
        }
      ],

      //    签到表单
      cellStyle: {
        fontSize: "20px",
        paddingLeft: "5%"
      },
      headerStyle: {
        fontSize: "18px",
        paddingLeft: "5%",
        fontWeight: "300"
      },
      signTable: [
        {
          name: "计算机名称",
          time: "2017.11.16 14:51"
        },
        {
          name: "计算机名称",
          time: "2017.11.16 14:51"
        },
        {
          name: "计算机名称",
          time: "2017.11.16 14:51"
        },
        {
          name: "计算机名称",
          time: "2017.11.16 14:51"
        },
        {
          name: "计算机名称",
          time: "2017.11.16 14:51"
        },
        {
          name: "计算机名称",
          time: "2017.11.16 14:51"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style type="text/less" lang="less" scoped>
//内容
.inContent {
  flex: 1 0 83%;
  background-color: #f6f6f6;
  padding: 0px 60px 90px 30px;

  .learnSearch {
    height: 100px;
    padding: 30px 0;

    .el-select {
    }
  }
}
</style>