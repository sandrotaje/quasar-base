<template>
    <q-layout view="lHh Lpr lFr">
        <!-- Header -->
        <q-layout-header>
            <q-toolbar reveal="false" inverted>

                <q-btn flat v-if="!back || !$q.platform.is.mobile"  @click="leftDrawerOpen = !leftDrawerOpen">
                    <q-icon name="menu" size="30px" />
                </q-btn>
                <q-btn v-if="back" flat @click="$router.go(-1)">
                    <q-icon name="keyboard_arrow_left" />
                </q-btn>

                <q-toolbar-title class="text-center text-dark">
                    {{title}}
                </q-toolbar-title>

            </q-toolbar>
            <router-view name="headerTabs" />
        </q-layout-header>
        <!-- Left Side Panel -->
        <q-layout-drawer v-model="leftDrawerOpen" v-if="!back || !$q.platform.is.mobile">
            <nav-menu></nav-menu>
        </q-layout-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import NavMenu from "components/NavMenu";
export default {
  components: { NavMenu },
  data() {
    return {
        leftDrawerOpen: true
    };
  },
  computed: {
    title() {
      return this.$store.state.title || "OMEM";
    },
    back() {
      return this.$route.query.back;
    }
  }
};
</script>
<style>

</style>

