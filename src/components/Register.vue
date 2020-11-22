<template>
  <div id="register">
    <h2 class="m-4 text-center">
      Register Site {{ $route.params.id }}
    </h2>
    <div class="d-flex justify-content-center">
      <b-form inline>
        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input type="text" id="inline-form-input-username" placeholder="Username" v-model="name" maxlength="10" />
        </b-input-group>
        <label class="sr-only" for="inline-form-input-contact-number">Contact Number</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input type="text" id="inline-form-input-contact-number" placeholder="Contact Number" v-model="contactNo" maxlength="10" />
        </b-input-group>
        <b-button variant="primary" @click="book($route.params.id)">
          Book Site
          <b-spinner small v-if="showProgress" />
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import { REGISTER } from '../constants';
import { ISiteViewModel } from 'src/view-models/i-site-view';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '../store';

@Component({
  name: 'register-site',
})

export default class RegisterSite extends Vue {
  private showProgress = false;
  private name = '';
  private contactNo = '';

  public async book(id: number): Promise<void> {
    this.showProgress = true;
    const data: ISiteViewModel = {} as ISiteViewModel;
    data.siteNo = Number(id);
    data.name = this.name;
    data.contactNo = Number(this.contactNo);
    data.userId = 'user'+id;
    data.isRegistered = true;
    await store.dispatch(REGISTER, data).then(() => {
      this.showProgress = false;
      this.$router.push('/');
    });
  }
}
</script>
