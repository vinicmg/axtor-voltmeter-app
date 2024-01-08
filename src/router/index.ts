import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/placas' }
    },
    {
      path: '/placas',
      name: 'Placas',
      component: () => import('../views/PlateView.vue'),
      children: [
        {
          path: '/placas/:status',
          component: () => import('../views/PlateView.vue')
        }
      ]
    },
    {
      path: '/cadastro/setor',
      name: 'Cadastro de Setor',
      component: () => import('../views/register/SectorView.vue')
    },
    {
      path: '/cadastro/tecnico',
      name: 'Cadastro de Técnico',
      component: () => import('../views/register/TechnicianView.vue')
    },
    {
      path: '/cadastro/tipodeplaca',
      name: 'Cadastro Tipo de Placa',
      component: () => import('../views/register/TypePlateView.vue')
    },
    {
      path: '/cadastro/placas',
      name: 'Cadastro de Placas',
      component: () => import('../views/register/PlateView.vue')
    },
    {
      path: '/cadastro/configuracao',
      name: 'Cadastro de Configuração',
      component: () => import('../views/register/ConfigView.vue')
    },
    {
      path: '/relatorios',
      name: 'Relatórios',
      component: () => import('../views/ReportView.vue')
    },
    {
      path: '/passo-a-passo/:id',
      name: 'Passo a passo',
      component: () => import('../views/stepbystep/PlateView.vue'),
    },
    {
      path: '/passo-a-passo/:id/conferencia-mecanica',
      name: 'conf-mecanica',
      component: () => import('../views/stepbystep/MechanicalConferenceView.vue'),
    },
    {
      path: '/passo-a-passo/:id/conferencia-eletronica',
      name: 'conf-eletronica',
      component: () => import('../views/stepbystep/ElectronicConferenceView.vue'),
    },
    {
      path: '/passo-a-passo/:id/conferencia-eletrica',
      name: 'conf-eletrica',
      component: () => import('../views/stepbystep/ElectricConferenceView.vue'),
    },
    {
      path: '/passo-a-passo/:id/conferencia-qualidade',
      name: 'conf-qualidade',
      component: () => import('../views/stepbystep/QualityConferenceView.vue')
    }
  ]
})

export default router
