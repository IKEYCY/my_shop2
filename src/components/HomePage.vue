<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="" width="50px" height="50px">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出登陆</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 左侧区域 -->
      <el-aside width="210px">
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subitem.id + ''" v-for="subitem in item.children" :key="subitem.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ subitem.authName }}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧区域 -->
      <el-main>Main</el-main>
    </el-container>
    <footer class="footer">
      版权所有 2023 - 广歌
    </footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: []
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$message.info('退出成功')
    },
    async getMenuList () {
      const { data: res } = await this.$http.post('menus')
      console.log(res)
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
  min-height: 730px;

  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;

    >div {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
    }
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }
}

.footer {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #262c35;
  color: #fff;
}
</style>
