export const gqlQuery = `
    query ListChannels($project: String!) {
      listChannels(project: $project) {
        items {
          id
          channelCode
          name
          activeConfigGroup {
            id
            streams {
              id
              url
              drmProtected
              isLive
              streamSchema {
                id
                levels {
                  name
                }
              }
            }
            fields {
              name
              type
              value

            }
          }
        }
      }
    }
  `
  export const gqlVars = {
    project: 'harmonic'
  }
