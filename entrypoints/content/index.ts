import { defineContentScript } from 'wxt/utils/define-content-script'
export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    // eslint-disable-next-line no-console
    console.log('Hello content script!')
  },
})
