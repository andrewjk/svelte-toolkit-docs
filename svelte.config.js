const sass = require('node-sass')

module.exports = {
  preprocess: {
    style: async ({ content, attributes }) => {
      if (attributes.lang !== 'scss') {
        return
      }
      return processSass(content)
    }
  }
}

function processSass(content) {
  return new Promise((resolve, reject) => {
    sass.render(
      {
        data: content,
        sourceMap: true,
        outFile: 'x' // this is necessary, but is ignored
      },
      (err, result) => {
        if (err) {
          return reject(err)
        }
        resolve({
          code: result.css.toString(),
          map: result.map.toString()
        })
      }
    )
  })
}
