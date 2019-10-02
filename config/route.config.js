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
          path: '/message',
          name: 'message',
          icon: 'message',
          routes: [
            {
              path: '/message/list',
              name: 'list',
              component: './message/list',
            },
          ],
        },
		{
          path: '/tag',
          name: 'tag',
          icon: 'tags',
          routes: [
            {
              path: '/tag/list',
              name: 'list',
              component: './tag/list',
            },
          ],
        },
		{
          path: '/link',
          name: 'link',
          icon: 'link',
          routes: [
            {
              path: '/link/list',
              name: 'list',
              component: './link/list',
            },
          ],
        },
		{
          path: '/category',
          name: 'category',
          icon: 'book',
          routes: [
            {
              path: '/category/list',
              name: 'list',
              component: './category/list',
            },
          ],
        },
		{ // 时间轴管理
          path: '/timeAxis',
          name: 'timeAxis',
          icon: 'clock-circle',
          routes: [
            {
              path: '/timeAxis/list',
              name: 'list',
              component: './timeAxis/list',
            },
          ],
        },
		{ // 项目管理
          path: '/project',
          name: 'project',
          icon: 'clock-circle',
          routes: [
            {
              path: '/project/list',
              name: 'list',
              component: './project/list',
            },
          ],
        },
		{
          name: 'exception',
          icon: 'warning',
          path: '/exception',
          routes: [
            // exception
            {
              path: '/exception/403',
              name: 'not-permission',
              component: './exception/403',
            },
            {
              path: '/exception/404',
              name: 'not-find',
              component: './exception/404',
            },
            {
              path: '/exception/500',
              name: 'server-error',
              component: './exception/500',
            },
            {
              path: '/exception/trigger',
              name: 'trigger',
              hideInMenu: true,
              component: './exception/TriggerException',
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