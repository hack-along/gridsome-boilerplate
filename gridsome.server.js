// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({
    addCollection,
    addSchemaTypes,
    addSchemaResolvers
  }) => {

    addSchemaTypes(`
    type MdPage implements Node @infer {
      id: ID!,
      title: String,      
    }
  `)

    addSchemaTypes(`
    type Event implements Node @infer {
      id: ID!,
      title: String,
      excerpt: String,
      date: String,
      start_time: String,
      end_time: String,
      thumbnail: String,
      
    }
  `)
    addSchemaTypes(`
    type Blocks implements Node @infer {
      title: String,
      subtitle: String,
      content: String,
      img: Image,
      link: String,
      emoji: String,
      extraClass: String,
      tags: String,
      extraClassImg: String,
      extraClassHeader: String,  
    }
  `)
    addSchemaResolvers({
      Blocks: {
        fileName: {
          type: 'String',
          resolve(obj) {
            return `${obj.fileInfo.name}`
          }
        }
      }
    })
    addSchemaResolvers({
      Event: {
        hasContent: {
          type: 'Boolean',
          resolve(obj) {
            return obj.content.length
          }
        }
      }
    })

  })

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

}