import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_URL, GET_SITES, REGISTER, SET_SITES } from '../constants';
import { ISiteViewModel } from '../view-models/i-site-view';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sites: []
    },
    mutations: {
        [SET_SITES](state, paylaod) {
            state.sites = paylaod;
        }
    },
    actions: {
        async [GET_SITES]({ commit }) {
            const { data } = await axios.get(`${API_URL}/allSites`);
            commit(SET_SITES, data);
        },
        async [REGISTER]({ commit }, site: ISiteViewModel) {
            await axios.post(`${API_URL}/register`, site);
        }
    }
});