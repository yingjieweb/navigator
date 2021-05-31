import $ from 'jQuery'

let $noticeButton = $('.notice') // 获取通知 button
let $noticeModal = $('.notice-modal') // 获取 map 模态框
let $noticeModalClose = $('.notice-modal-close') // 获取 map 模态框 close

$noticeButton.on('click', () => {$noticeModal.addClass('show-notice-modal')})
$noticeModalClose.on('click', () => {$noticeModal.removeClass('show-notice-modal')})
