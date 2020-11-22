<template>
  <div id="site-view" v-if="!showProgress">
    <h2 class="m-4 text-center">
      Welcome to Hackers Housing Association Plot Sale
    </h2>
    <b-row class="m-3 border p-3 rounded border-info">
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [1,2,3,4,5,6]" :key="i">
          <b-card 
            :bg-variant="getVariant()" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
              <span> 
                User{{ i }}
                Contact No: 8723434210
              </span>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="pl-4">
        <img id="road-img" src="../static/img/road.jpg" width="50" height="950">
      </b-col> 
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [7,8,9,10,11,12]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [13,14,15,16,17,18]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="pl-4">
        <img id="road-img" src="../static/img/road.jpg" width="50" height="950">
      </b-col> 
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [19,20,21,22,23,24]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [25,26,27,28,29,30]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="pl-4">
        <img id="road-img" src="../static/img/road.jpg" width="50" height="950">
      </b-col> 
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [31,32,33,34,35,36]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [37,38,39,40,41,42]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col cols="1" class="pl-4">
        <img id="road-img" src="../static/img/road.jpg" width="50" height="950">
      </b-col>
      <b-col cols="1" class="p-0">
        <b-card-group columns v-for="i in [43,44,45,46,47,48]" :key="i">
          <b-card 
            bg-variant="warning" 
            text-variant="white" 
            class="text-center"
            :img-src="require('../static/img/site.jpg')" 
            img-alt="Image" 
            img-top 
          >
            <b-button variant="primary" size="sm">
              Register
            </b-button>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
  <div class="d-flex align-items-center" v-else>
    <b-spinner small />
  </div>
</template>

<script lang="ts">
import { GET_SITES } from '../constants';
import { ISiteViewModel } from 'src/view-models/i-site-view';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '../store';

@Component({
  name: 'site-view',
})

export default class SiteView extends Vue {
  private showProgress = false;
  get sites(): ISiteViewModel[] {
    return store.state.sites;
  }
  public async mounted(): Promise<void> {
    this.showProgress = true;
    await store.dispatch(GET_SITES).then(() => {
      this.showProgress = false;
    });
  }
  public getVariant(): string {
    return 'success';
  }
}
</script>

<style>
.card-columns {
  column-count: 1;
}
</style>
