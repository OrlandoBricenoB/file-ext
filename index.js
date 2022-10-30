/*! file-ext v1.0.0 | (c) orlandobricenob | ISC License */
const path = require('path')
const mime = require('mime-types')
const isEmptyObject = require('./utils/isEmptyObject')

/**
 * Our main object
 * @constructor
 * @param {string} filename - The filename or path.
 * @param {object} opt - Options of the FileExt.
 */
const FileExt = (filename, opt) => {
  const ext = {
    extName: path.extname(filename)
  }
  if (!opt) opt = {}
  if (ext.extName === '') ext.extName = filename

  // * Remove dot of extName
  ext.extName = ext.extName.startsWith('.') ? ext.extName.replace('.', '') : ext.extName

  // * Include mimeTypes
  if (opt.withType) {
    ext.type = mime.contentType(ext.extName)
  }

  // * Convert toLowerCase
  if (!opt.keepCase) {
    ext.extName = ext.extName.toLowerCase()
  }

  return isEmptyObject(opt) ? ext.extName : ext
}

module.exports = FileExt
