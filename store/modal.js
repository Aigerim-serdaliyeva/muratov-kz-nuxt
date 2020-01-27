export const state = () => ({
    modalVisible: false,
    modalComponent: null
});

export const mutations = {
    showModal(state) {
        state.modalVisible = true;
    },
    hideModal(state) {
        state.modalVisible = false;
    }
};
