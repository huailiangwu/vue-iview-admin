<template>
  <div class="home-wrap">

    <!-- 操作按钮组 -->
    <div class="operate-btn-group">
      <Row :gutter="16">
            <Col span="2" :xs="8" :sm="4" :md="2" :lg="2">
                <Button type="primary" size="large" icon="">编辑</Button>
            </Col>
            <Col span="2" :xs="8" :sm="4" :md="2" :lg="2">
                <Button type="info" size="large">查询</Button>
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
         <Table border :columns="columns7" :data="data6" ></Table>
       </Col>
       <Col :xs="23" :sm="23" :md="23" :lg="23">
          <div class="paging-wrap">
            <Page :total="100" show-total show-elevator show-sizer></Page>
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
      columns7: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
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
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: '列表详情',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index]
          .age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
      this.$Notice.open({
        title: "删除成功",
        desc:
          "您已经成功删除"+index+"条数据",
        duration: 3
      });
    }
  }
};
</script>
<style scoped>
@import "home.css";
</style>



