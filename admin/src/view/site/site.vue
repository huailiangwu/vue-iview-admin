<template>
  <div class="home-wrap">

    <!-- 操作按钮组 -->
    <div class="operate-btn-group">
      <Row :gutter="16">
            <Col span="2" :xs="8" :sm="4" :md="2" :lg="2">
                <Button type="primary" size="large" icon="">编辑</Button>
            </Col>
            <Col span="2" :xs="8" :sm="4" :md="2" :lg="2">
              <Button type="success" size="large">添加</Button>
            </Col>
            <Col span="2" :xs="8" :sm="4" :md="2" :lg="2">
                <Button type="warning" size="large">删除</Button>
            </Col>
            <Col span="2" :xs="8" :sm="4" :md="2" :lg="2">
                <Button type="error" size="large">导出</Button>
            </Col>
        </Row>
    </div>


    <!-- 数据展示 -->
    <div class="data-wrap">
      <Row >
       <Col :xs="23" :sm="23" :md="23" :lg="23"> 
         <Table border :columns="columns" :data="oftenData"></Table>
       </Col>
       <Col :xs="23" :sm="23" :md="23" :lg="23">
          <div class="paging-wrap ">
            <Page :total="data_length" show-total show-elevator show-sizer></Page>
          </div>
        </Col>
      </Row>
    </div>
   
  </div> 
</template>
<script>
export default {
  data() {
    return {
      data_length: 0,
      columns: [
        {
          title: "编号",
          key: "goodsId"
        },
        {
          title: "图片",
          key: "goodsImg",
          render: (h, params) => {
            return h(
              "div",
              {
                attrs: {
                  tyle: "width: 40px;height: 40px;"
                }
              },
              [
                h("img", {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  attrs: {
                    src: params.row.goodsImg,
                    style: "width: 35px;height: 35px;border-radius: 2px;"
                  },
                  style: {}
                })
              ]
            );
          }
        },
        {
          title: "名称",
          key: "goodsName"
        },
        {
          title: "价格",
          key: "price"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      oftenData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    show(index) {
      //   显示详情
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.oftenData[index].goodsId}<br>Age：${this.oftenData[
          index
        ].goodsName}<br>Address：${this.oftenData[index].price}`
      });
    },
    remove(index) {
      //    删除提示
      this.oftenData.splice(index, 1);
      this.$Notice.open({
        title: "删除成功",
        desc: "您已经成功删除" + index + "条数据",
        duration: 3
      });
    },
    getData() {
      //     获取数据
      this.$fetch("http://jspang.com/DemoApi/typeGoods.php").then(res => {
        for (var i in res) {
          for (var j in res[i]) {
            this.oftenData.push(res[i][j]);
          }
        }
        this.data_length = this.oftenData.length;
      });
    }
  }
};
</script>
<style scoped>
.operate-btn-group {
  margin: 10px 0;
}
.data-wrap {
  width: 100%;
  margin: 0 2%;
}
.paging-wrap {
  width: 100%;
  margin: 10px 0;
  text-align: right;
}
.ivu-row {
  margin: 0 !important;
}
</style>



