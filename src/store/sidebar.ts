import { defineStore } from 'pinia';

export const useMenuSidebarStore = defineStore('menuSidebar', {
    state: () => {
        return {
            collapse: false
        };
    },
    getters: {},
    actions: {
        handleCollapse() {
            this.collapse = !this.collapse;
        }
    }
});

export const useUserSidebarStore = defineStore('userSidebar', {
    state: () => {
        return {
            collapse: false
        };
    },
    getters: {},
    actions: {
        handleCollapse() {
            this.collapse = !this.collapse;
        }
    }
});