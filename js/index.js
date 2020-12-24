$('#brifForm').validate({
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true,
    },
    privacy: {
      required: true,
    },
  },
  messages: {
    name: {
      required: jQuery.validator.format("Укажите имя")
    },
    phone: {
      minlength: jQuery.validator.format("Номер указан не полностью"),
      required: jQuery.validator.format("Укажите телефон")
    },
    privacy: {
      required: jQuery.validator.format("Прочтите это")
    },
  },
  errorElement: "div",
  errorClass: "invalid",

});

$('input[name="phone"').mask('0 (000) 000 00-00')


let headerHeight = 0

if (window.innerWidth <= 1100)
  headerHeight = 0
if (window.innerWidth <= 860)
  headerHeight = 90
if (window.innerWidth <= 660)
  headerHeight = 70


const anchors = document.querySelectorAll('a.anchor')
if (anchors)
  anchors.forEach(function (item) {
    item.addEventListener('click', function () {
      let blockID = item.getAttribute('href').substring(1)

        $("html, body").animate({
          scrollTop: $('#' + blockID).offset().top - headerHeight /2 + "px"
        }, {
          duration: 500,
          easing: "swing"
        });
    })
  })

const headerFixPoint = document.querySelector('.js-headerFixPoint')
const headerFixed = document.querySelector('.header-fixed')
let point = getCoords(headerFixPoint)
window.addEventListener('scroll', function () {
  // console.log(headerFixPoint.pageY)
  // if (getCoords)
  // console.log(getCoords(headerFixPoint))
  if (window.pageYOffset >= point - 50)
    headerFixed.classList.add('active')
  else
    headerFixed.classList.remove('active')

  // console.log('scroll: ' + pageYOffset)
  // console.log('point: ' + point)
})

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return box.top + pageYOffset

}



const privacyCheckbox = document.querySelector('#privacy')
const brifFromSubmit = document.querySelector('#brifForm .submit')
privacyCheckbox.addEventListener('click', function () {
  // if (privacyCheckbox.('checked'))
  // alert('filre  ')
  if (privacyCheckbox.getAttribute('checked') == 'checked') {
    privacyCheckbox.setAttribute('checked', 'unchecked')
    brifFromSubmit.classList.add('disactive')

  } else {
    brifFromSubmit.classList.remove('disactive')

    privacyCheckbox.setAttribute('checked', 'checked')
  }
})