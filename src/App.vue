<template>
  <v-app>
    <v-navigation-drawer 
    v-model="sideNav"
    disable-resize-watcher="true"
    absolute="true"
    >
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="green darken-1">
      <v-toolbar-side-icon 
      @click.native.stop="sideNav = !sideNav"
      class="hidden-md-and-up"
      style="color: white"
      ></v-toolbar-side-icon>
      <v-toolbar-title style="color: white">
        <router-link to="/" tag="span" style="cursor: pointer">Öz Çelebi Plastik</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in menuItems" :key="item.title">
        <v-btn 
        style="color: white" 
        flat
        router
        :to="item.link"
        >
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      sideNav: false,
      menuItems:[
        { icon: 'dashboard', title: 'Anasayfa', link: '/' },
        { icon: 'business', title: 'Hakkımızda', link: '/aboutus' },
        { icon: 'settings_input_component', title: 'Ürünlerimiz', link: '/products' },
        { icon: 'photo_library', title: 'Galeri', link: '/gallery' },
        { icon: 'contact_phone', title: 'İletişim', link: '/contact' },
      ]
    }
  }
}
</script>
