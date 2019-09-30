export default [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
	  Routes: ['src/pages/Authorized'],
	  authority: ['admin', 'taokexia'],
      routes: [
	    // dashboard
		{ path: '/', redirect: '/user/login' },
        {
          path: '/dashboard',
		  name: 'dashboard',
		  icon: 'dashboard',
          routes: [
			{
				path: '/dashboard/workplace',
				name: 'workplace',
				component: './dashboard/workplace'
			}
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ]