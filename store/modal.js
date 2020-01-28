export const state = () => ({
    modalVisible: false,
    formTitle: 'Получить консультацию',
    modalComponent: null
});

export const mutations = {
    showModal(state) {
        state.modalVisible = true;
    },
    hideModal(state) {
        state.modalVisible = false;
    },
    changeFormTitle(state, newFormTitle) {
        state.formTitle = newFormTitle;
    }
};

export const actions = {
    showModalChangeFormTitle({ commit }, newFormTitle) {
        commit('showModal');
        commit('changeFormTitle', newFormTitle);
    }
};
