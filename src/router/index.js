import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add-task',
    name: 'add-task',
    component: AddTask,
  },
  {
    path: '/task-list',
    name: 'task-list',
    component: TaskList,
  },
  {
    path: '/combined-view',
    name: 'combined-view',
    component: CombinedView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

