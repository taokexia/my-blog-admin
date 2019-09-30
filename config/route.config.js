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
		{ // 用户管理
		  path: '/otherUser',
		  name: 'otherUser',
		  icon: 'usergroup-add',
		  routes: [
			{
			  path: '/otherUser/list',
			  name: 'list',
			  component: './otheruser/list',
			},
		  ],
		},
		{ // 文章管理
          path: '/article',
          name: 'article',
          icon: 'file-markdown',
          routes: [
            {
              path: '/article/list',
              name: 'list',
              component: './article/list',
            },
            {
              path: '/article/create',
              name: 'create',
              component: './article/articleCreate',
            },
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