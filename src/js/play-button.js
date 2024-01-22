export function playButton() {
  document.querySelectorAll('.tmpl-hh-video__video-wrapper')
    .forEach((videoBlock) => {
      const cover = videoBlock.querySelector('.tmpl-hh-video__cover');
      const frame = videoBlock.querySelector('.tmpl-hh-video__frame');

      cover.addEventListener('click', () => {
        cover.classList.add('tmpl-hh-video__cover_hidden');
        frame.classList.add('tmpl-hh-video__frame_visible');
        frame.src += "&autoplay=1";
      })
    })
}
