module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                ratio: 1.77,
                related: false,
                noIframeBorder: true,
                loadingStrategy: 'lazy',
                urlOverrides: [
                  {
                    id: "youtube",
                    embedURL: videoId =>
                      `https://www.youtube-nocookie.com/embed/${videoId}`,
                  },
                ],
                containerClass: "video-container",
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
            resolve: 'gatsby-remark-emojis',
            options: {
              class  : 'emoji-icon',
              escapeCharacter : '#',
              size   : 64,
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          }
        ]
      }
    }
  ],
  siteMetadata: {
    title: "Eduardo Ribeiro",
    titleTemplate: "%s · Eduardo Ribeiro",
    description: "Personal Website and Blog of Eduardo Ribeiro",
    siteUrl: "https://eduardocribeiro.com",
    image: "/images/profile-photo.jpg"
  },
};
