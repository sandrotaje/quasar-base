<template>
    <div class="column full-height">
        <div class="col-2 row justify-center items-center">
            <q-icon name="settings" size="150px" color="primary"></q-icon>
        </div>
        <div class="col">
            <div class="column justify-between full-height no-wrap">
                <q-list class="no-padding-top" no-border link inset-separator>
                    <q-item to="/list" class="col">
                        <q-item-side icon="settings" />
                        <q-item-main :label="$t('LIST')" />
                    </q-item>
                    <q-item to="/settings">
                        <q-item-side icon="settings" />
                        <q-item-main :label="$t('SETTINGS')" />
                    </q-item>
                    <q-item to="/profile">
                        <q-item-side icon="person" />
                        <q-item-main :label="$t('PROFILE')" />
                    </q-item>
                </q-list>
                <div class="q-pa-xs">
                    <q-btn class="full-width" big @click="logout" icon="exit_to_app" block color="primary">
                        {{$t('LOGOUT')}}
                    </q-btn>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import UserService from "src/services/UserService";
export default {
  methods: {
    async logout() {
      await UserService.logout();
      this.$router.push("/login");
    }
  }
};
</script>
<style>
</style>


