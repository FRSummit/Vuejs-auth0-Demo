<template>
    <nav>
        <v-app-bar text app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title class="toolbar_title"> 
                <span>{{ $route.name }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
             <v-menu bottom right>
              <template v-slot:activator="{ on }">
                <v-btn dark icon v-on="on">
                  <!-- <v-icon class="grey--text">mdi-dots-vertical</v-icon> -->
                  <v-list-item-avatar class="profile-img">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-item-avatar>
                </v-btn>
              </template>
  
              <v-list>
                <v-list-item class="menu-text-sec">
                    <v-list-item-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-item-avatar>
  
                    <v-list-item-content left class="right-menu-border">
                        <v-list-item-title>User</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item left class="right-menu-border menu-text-sec">
                  <v-list-item-title>My Profile</v-list-item-title>
                </v-list-item>
                <v-list-item left class="menu-text-sec">
                  <v-list-item-title>Sign Out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
        </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
            <div class="profile-pic">
                <img class="ipdc-logo" src="../assets/ipdc.jpg" alt="IPDC Logo">
            </div>
        <v-list-item-group v-model="group" active-class="" >
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon class="side-menu-icon">
            <v-icon small>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="nav-text">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>
<style>
.profile-pic {
    width: 200px;
    background-color: #fff;
    margin: 20px auto 10px;
    border-radius: 4px;
}
.ipdc-logo {
    width: 100%;
    display: block;
}
.theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
    background-color: #fff;
}
.toolbar_title {
    font-size: 17px;
    font-weight: 500;
    color: #1f1f21;
}
.nav-text{ border-bottom: 1px solid gainsboro; }
.v-list--nav {
    padding-right: 0px !important;
}
.v-list--nav .v-list-item {
    padding-right: 0px !important;
}
.v-list-item__title{font-size: 16px !important;}
.right-menu-border{border-bottom: 1px solid gainsboro;}
.profile-img{margin-right: 0px !important; top: -5px;}
.v-menu__content {
    top: 0 !important;
    right: 0 !important;
    width: 150px;
    left: auto !important;
}
.menu-text-sec{padding: 0 !important; margin-left: 12px;}
.side-menu-icon{margin-right: 12px !important;}
</style>
<script>
export default {
    data(){
        return {
            drawer: false,
            links: [
                { icon: 'mdi-home', text: 'Dashboard', route: '/'},
                { icon: 'mdi-note', text: 'Plan & Reports', route: '/planreports'},
                { icon: 'fas fa-tools fa-2x', text: 'Support', route: '/support'}
            ],
        }
    }
}
</script>