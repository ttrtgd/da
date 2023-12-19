import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

// Components
import Home from "./pages/Home.vue";
// Menu section
import Menu from "./pages/menu/index.vue";
import MenuTea from "./pages/menu/tea.vue";
import MenuCoffee from "./pages/menu/coffee.vue";
import MenuSogNap from "./pages/menu/sogNap.vue";
import MenuMilkShakes from "./pages/menu/milkShakes.vue";
import MenuLimonades from "./pages/menu/limonades.vue";
import MenuSalates from "./pages/menu/salates.vue";
import MenuDeserti from "./pages/menu/deserti.vue";
import MenuDelicatesi from "./pages/menu/delicatesi.vue";
import MenuProdukti from "./pages/menu/produkti.vue";
// Events
import Events from "./pages/Events.vue";
// Contacts
import Contacts from "./pages/Contacts.vue"

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Events",
    component: Events,
    path: "/events",
  },
  {
    name: "Contacts",
    component: Contacts,
    path: "/contacts"
  },
  {
    name: "Menu",
    component: Menu,
    path: "/menu",
  },
  {
    name: 'Menu | Tea',
    component: MenuTea,
    path: '/menu/tea'
  },
  {
    name: 'Menu | Coffee',
    component: MenuCoffee,
    path: '/menu/coffee'
  },
  {
    name: 'Menu | Sogrevayushie Napitki',
    component: MenuSogNap,
    path: '/menu/sogNap'
  },
  {
    name: 'Menu | Milk Shakes',
    component: MenuMilkShakes,
    path: '/menu/milkShakes'
  },
  {
    name: 'Menu | Limonades',
    component: MenuLimonades,
    path: '/menu/limonades'
  },
  {
    name: 'Menu | Salates',
    component: MenuSalates,
    path: '/menu/salates'
  },
  {
    name: 'Menu | Desserts',
    component: MenuDeserti,
    path: '/menu/deserti'
  },
  {
    name: 'Menu | Delicacies',
    component: MenuDelicatesi,
    path: '/menu/delicatesi'
  },
  {
    name: 'Menu | Products',
    component: MenuProdukti,
    path: '/menu/produkti'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
