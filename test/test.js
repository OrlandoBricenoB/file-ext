const fileExt = require('../index')

const assert = require('assert')
describe('Testing FileExt', () => {
  describe('Get from a path: assets/images/a-white-dog.png', () => {
    it('should return png as string', () => {
      assert.equal(fileExt('assets/images/a-white-dog.png'), 'png')
    })
  })
  describe('Get from a filename: index.css', () => {
    it('should return css as string', () => {
      assert.equal(fileExt('index.css'), 'css')
    })
  })
  describe('Get from a filename with multiple extensions: orlando.briceno.tar', () => {
    it('should return tar as string', () => {
      assert.equal(fileExt('orlando.briceno.tar'), 'tar')
    })
  })
  describe('Get from an extension: md', () => {
    it('should return md as string', () => {
      assert.equal(fileExt('md'), 'md')
    })
  })
  describe('Get extension with invalid keepCase: Jo-Sword', () => {
    it('should return Jo-Sword', () => {
      assert.equal(
        fileExt('.Jo-Sword', { keepCase: true }),
        'Jo-Sword'
      )
    })
  })
  describe('Get from filename with mimeType: isEmptyObject.js', () => {
    it('should return { extName: "js", type: "application/javascript; charset=utf-8" }', () => {
      assert.equal(
        String(fileExt('isEmptyObject.js', { withType: true })),
        String({ extName: 'js', type: 'application/javascript; charset=utf-8' })
      )
    })
  })
  describe('Get extension with invalid mimeType: gitignore', () => {
    it('should return { extName: "gitignore", type: false }', () => {
      assert.equal(
        String(fileExt('gitignore', { withType: true })),
        String({ extName: "gitignore", type: false })
      )
    })
  })
})
