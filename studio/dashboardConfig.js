export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebdae3b25a5f11b21030e21',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink3-studio',
                  apiId: '2c6d2c5f-5835-4b19-9599-aaaf22f47bb1'
                },
                {
                  buildHookId: '5ebdae3b25a5f1140b031042',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink3',
                  apiId: '14069e6b-8117-4e47-b2f4-033848980c4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cmanspeaker/sanity-kitchen-sink3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
