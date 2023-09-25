import { defineStore } from 'pinia';
import type {TaskListObj} from "@/components/card/TaskCard.vue";

export const classTaskStore = defineStore('classTask', {
    state: () => {
        return {
            taskList: [
                {
                    id: 0,
                    classId: 0,
                    title: '我的任务1',
                    info: 'hahahahahahahahahahahah',
                },
                {
                    id: 1,
                    classId: 0,
                    title: '我的任务2',
                    info: 'hahahadfafdsafasdfsdaasdfdsahahahahahah',
                }
            ] as TaskListObj[],
        };
    },
    getters: {

    },
    actions: {
        addTask(task: TaskListObj) {
          this.taskList.push(task);
        },
        removeTask(task: TaskListObj) {
            this.taskList.splice(this.taskList.indexOf(task), 1);
        }
    }
});