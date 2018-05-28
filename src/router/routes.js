export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home'),
    meta: {
      title: 'page.Home',
      authenticated: false
    },
    children: [
      { path: '/login', component: () => import('../pages/Login') },
      { path: '/register/:step', component: () => import('../pages/Register') }
    ]
  }, {
    path: '/hello',
    name: 'Hello',
    component: () => import('../pages/Hello'),
    meta: {
      title: 'page.Hello',
      authenticated: false
    }
  }, {
    path: '/login1',
    name: 'login',
    component: () => import('../pages/Login'),
    meta: {
      title: 'page.Login',
      authenticated: false
    }
  }, {
    path: '/my-account',
    name: 'my-account',
    component: () => import('../pages/MyAccount'),
    meta: {
      title: 'page.MyAccount',
      authenticated: true
    }
  }, {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]
