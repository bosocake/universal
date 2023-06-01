// clone()
// function clone() {
//     for (let n=0; n<12; n++) {
//         let parent = document.getElementById('group');
//         let elem = parent.querySelector('.product');
//         let clone = elem.cloneNode(true);
//         clone = parent.appendChild(clone);
//     }
// }

// const element = document.querySelector('.header_title');
// const element2 = document.querySelector('.header_sublink_limit');

// element.addEventListener('mouseenter', () => {
//     element2.style.cssText = 'margin-top: 50px; opacity: 1;';
// });

// element.addEventListener('mouseleave', () => {
//     element2.style.cssText = 'margin-top: -40%; opacity: 0;';
// });

// const region = document.querySelector('.region');
// const regionCity = document.querySelectorAll('.region-city');
// const regionClose = document.querySelector('.region-close');
// const regionDisplay = document.querySelector('.region-display');
// const regionSelected = document.querySelector('.region-selected');
// const loginTitle = document.querySelector('.login');
// const loginLogin = document.querySelector('.login-login');
// const loginDisplay = document.querySelector('.login-display');

// function BlockRegionDisplay() {
//   regionDisplay.style.display = 'flex';
// }

// function NoneRegionDisplay() {
// 	regionDisplay.style.display = 'none';
// }

// function BlockLoginDisplay() {
// 	loginDisplay.style.display = 'flex';
// }
// // function NoneLoginDisplay() {
// // 	loginDisplay.style.display = 'none';
// // }

// regionCity.forEach(function(regionCity) {
// 	regionCity.addEventListener('click', NoneRegionDisplay);
// });

// regionClose.addEventListener('click', NoneRegionDisplay);

// loginTitle.addEventListener('click', BlockLoginDisplay);

// // loginLogin.addEventListener('click', NoneLoginDisplay);

// region.addEventListener('click', BlockRegionDisplay);


// regionCity.forEach(function(regionCity) {
//   regionCity.addEventListener('click', function() {
//     const regionCity = this.textContent;
// 	regionCityReplace = regionCity.replace(/[^a-zA-Z]/g, "");
//     regionSelected.textContent = regionCityReplace;
// 	// const regionCityLenght = regionCityReplace.length > 6 ? regionCityReplace.substring(0, 5) + '...' : cityText;
//     // regionSelected.textContent = regionCityLenght;
//   });
// });

// const sortedRegionCities = Array.from(regionCity).sort(function(a, b) {
//   return a.textContent.localeCompare(b.textContent);
// });

// const regionContainer = document.querySelector('.region-choice');

// sortedRegionCities.forEach(function(city) {
//   regionContainer.appendChild(city);
// });


// var loginFormatClick = document.querySelector('.login-format-click')
// var loginChoiceNumber = document.querySelector('.login-choice-number');

// var menu = document.querySelector('.header-menu');
// var close = document.querySelector('.header-close');
// var open = document.querySelector('.header-menu-logo');
const logo = document.querySelector('.header-menu-logo');
const menu = document.querySelector('.header-menu');
var img = document.querySelector('.header-menu-logo');
var originalSrc = 'image/img/menu.png';
var newSrc = 'image/img/close.png';
logo.addEventListener('click', function() {
  anime({
    targets: menu,
    easing: 'easeInOutQuad',
    duration: 0,
    complete: function() {
      
      menu.classList.toggle('show-menu');

      
      if (img.src === originalSrc) {
        img.src = newSrc;
      } else {
        img.src = originalSrc;
      }
    }
  });
});

// // Обработчик события клика на элементе .header-close
// function closeMenu() {
//   // Меняем стиль элемента .header-menu
//     menu.style.cssText = 'margin-left: -100%; opacity: 0;'; // Пример стиля
// }
// function openMenu() {
//     // Меняем стиль элемента .header-menu
//       menu.style.cssText = 'margin-left: 0%; opacity: 1;'; // Пример стиля
//   }
// // Добавляем обработчик события клика на элемент .header-close
// close.addEventListener('click', closeMenu);

// open.addEventListener('click', openMenu);

// // Получаем все элементы с классом .header-link-main
// var divs = document.getElementsByClassName('header-link-main');
// var parentGroups = document.getElementsByClassName('header-link-parent-group');

// // Обработчик события клика на элементе .header-link-main
// function handleClick(index) {
//   // Проверяем текущий стиль блока .header-link-parent-group
//   var currentStyle = parentGroups[index].style.cssText;

//   // Если текущий стиль равен 'red', возвращаем исходный стиль
//   if (currentStyle != 'margin: 0px;') {
//     parentGroups[index].style.cssText = 'margin: 0px;'; // Исходный стиль
//   } else {
//     parentGroups[index].style.cssText = 'margin: -140px 0 0 -100%;'; // Изменяем стиль
//   }
// }

// // Добавляем обработчик события клика на каждый элемент .header-link-main
// for (var i = 0; i < divs.length; i++) {
//   (function(index) {
//     divs[index].addEventListener('click', function() {
//       handleClick(index); // Вызываем функцию для изменения стиля
//     });
//   })(i);
// }




// var loginChoicePhones = document.querySelectorAll('.login-choice-phone');
// var loginFormatClick = document.querySelector('.login-format-click');
// var inputElement = document.querySelector('.login-input');

// loginChoicePhones.forEach(function(choicePhone) {
//   choicePhone.addEventListener('click', function() {
//     var imageSrc = choicePhone.querySelector('img').src;
//     var text = choicePhone.querySelector('.login-number-main').textContent;
    
//     loginFormatClick.innerHTML = '';
    
//     var imageElement = document.createElement('img');
//     imageElement.src = imageSrc;
//     imageElement.classList.add('login-flag');
//     loginFormatClick.appendChild(imageElement);
    
//     var textElement = document.createElement('span');
//     textElement.textContent = text;
//     textElement.classList.add('login-number-main');
//     loginFormatClick.appendChild(textElement);
//     if (loginChoiceNumber.style.color != 'white') {
//       loginChoiceNumber.style.cssText = 'color: white; top: 22.5%; z-index: 1; opacity: 1; border-top-left-radius: 0px; border-top-right-radius: 0px;';
//       loginNumber.style.cssText = 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;';
//     } else {
//       loginChoiceNumber.style.cssText = 'color: red; ';
//       loginNumber.style.cssText = 'border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;';

//     }
//     inputElement.value = '';
//   });
// });

// document.addEventListener('click', function(event) {
//   if (!loginForm.contains(event.target)) {
//     loginChoiceNumber.style.cssText = 'top: -300%;';
    
//   }
// });




// loginNumber.addEventListener('click', function() {
//   loginNumber.style.cssText = 'border: 2px solid #7adcff;';
  
// });

// document.addEventListener('click', function(event) {
//   if (!loginNumber.contains(event.target)) {
//     loginNumber.style.cssText = 'border: 2px solid #ffffff50;';
    
//   }
// });



// regionDisplay.addEventListener('click', function() {
// 	regionDisplay.style.display = 'none';
// });



// function applyPhoneMask(input) {
//   var phoneNumber = input.value.replace(/\D/g, '');
//   var formattedPhoneNumber = '';

//   if (phoneNumber.length > 0) {
//     formattedPhoneNumber += '(';
//     formattedPhoneNumber += phoneNumber.substring(0, 3);
//     formattedPhoneNumber += ')';

//     if (phoneNumber.length > 3) {
//       formattedPhoneNumber += ' ' + phoneNumber.substring(3, 6);
//     }

//     if (phoneNumber.length > 6) {
//       formattedPhoneNumber += '-' + phoneNumber.substring(6, 8);

//       if (phoneNumber.length > 8) {
//         formattedPhoneNumber += '-' + phoneNumber.substring(8, 10);
//       }
//     }
//   }

//   input.value = formattedPhoneNumber;
// }

// // Получаем поле ввода номера телефона
// var phoneInput = document.getElementById('phone');

// // Обработчик события ввода для поля номера телефона
// phoneInput.addEventListener('input', function() {
//   applyPhoneMask(this);
// });