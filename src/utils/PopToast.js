import $ from 'jQuery'

let icons = {
  loading: '<svg class="icon loading"><use xlink:href="#icon-loading"></use></svg>',
  success: '<svg class="icon"><use xlink:href="#icon-check-fill"></use></svg>',
  info: '<svg class="icon"><use xlink:href="#icon-notice-fill"></use></svg>',
  warning: '<svg class="icon"><use xlink:href="#icon-warn-fill"></use></svg>',
  error: '<svg class="icon"><use xlink:href="#icon-close-fill"></use></svg>'
}

function PopToast(type, message) {
  let $message = $(`<message class="message message-${type}">
      ${icons[type]}
      <span class="text">${message}</span>
    </message>`)
  $('.message-box').append($message)
  setTimeout(() => {
    $('.message-box').find('message:first').remove();
  }, 2500)
}

export {PopToast}
