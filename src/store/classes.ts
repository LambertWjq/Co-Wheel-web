import { defineStore } from 'pinia';
import type { ClassesListObj } from "@/components/card/ClassesCard.vue";

export const myClassStore = defineStore('myClass', {
    state: () => {
        return {
            classesList: [
                {
                    id: 0,
                    title: '我的班级1',
                    info: 'hahaha',
                    like: 3,
                    start: 3,
                    member: 1
                }
            ] as ClassesListObj[],
        };
    },
    getters: {

    },
    actions: {
        addClass(myClass: ClassesListObj) {
          this.classesList.push(myClass);
        },
        removeClass(myClass: ClassesListObj) {
            this.classesList.splice(this.classesList.indexOf(myClass), 1);
        }
    }
});

export const myManageClassStore = defineStore('myManageClass', {
    state: () => {
        return {
            myManageClassesList: [
                {
                    id: 0,
                    title: '我的班级1',
                    info: 'hahaha',
                    like: 3,
                    start: 3,
                    member: 1
                }
            ] as ClassesListObj[],
        };
    },
    getters: {

    },
    actions: {
        addClass(myManageClass: ClassesListObj) {
            this.myManageClassesList.push(myManageClass);
        },
        removeClass(myManageClass: ClassesListObj) {
            this.myManageClassesList.splice(this.myManageClassesList.indexOf(myManageClass), 1);
        }
    }
});