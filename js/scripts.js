// slider inicialization
if($('.navigation__swiper')){
	const navigationSwiper = new Swiper('.navigation__swiper', {
	  slidesPerView: "auto",
	  spaceBetween: 25,
	  breakpoints: {
	    740: {
	    	spaceBetween: 47
	      // slidesPerView: 2,
	      // spaceBetween: 20,
	    }
	  },
	});
}

// slider inicialization
if($('.navigation__swiper')){
	const productListSwiper = new Swiper('.product-list__swiper', {
	  // centeredSlides: true,
	  loop: true,
	  slidesPerView: 1,
	  spaceBetween: 15,
	  breakpoints: {
	  	740: {
				slidesPerView: 2,  		
	  	},
	  	940: {
	  		slidesPerView: 3,
	  	},
	  	1240: {
	    	slidesPerView: 4,
			}
	  }

	});
}


// fixed menu
$(window.document).scroll(function(){
	let mScroll  = $(window).scrollTop();
	let navigation = document.querySelector('.navigation');
	let gradientDown = document.querySelector('.gradiend-down');
	let firstDisplay = document.querySelector('.first-display');

	let position = 550;

	if(document.querySelector('.wrapper').classList.contains('other-page')){
		position = 100;
	};

	if(mScroll <= position){
		if(navigation) navigation.classList.remove('navigation--fixed');
		if(gradientDown) gradientDown.classList.remove('gradiend-down--active');
		if(firstDisplay) firstDisplay.classList.remove('first-display--active');
	}else if(mScroll >= position){
		if(navigation) navigation.classList.add('navigation--fixed');
		if(gradientDown) gradientDown.classList.add('gradiend-down--active');
		if(firstDisplay) firstDisplay.classList.add('first-display--active');
	}else{
		return false;
	};

	// .first-display
	// 78

});

// slow scroll
(function(){

  function SlowScrol(id){
    var offset = 80;
    $('html, body').animate ({
    	scrollTop: $(id).offset().top - offset
    }, 2000);
    return false;
  };

  let navigationBtn = $('.navigation__link');

  $('.navigation__link--1').click(function(){
    SlowScrol('.product-list--1');
    navigationBtn.parent().removeClass('navigation__swiper-slide--active');
    $(this).parent().addClass('navigation__swiper-slide--active');
  });
  $('.navigation__link--2').click(function(){
    SlowScrol('.product-list--2');
    navigationBtn.parent().removeClass('navigation__swiper-slide--active');
    $(this).parent().addClass('navigation__swiper-slide--active');
  });
  $('.navigation__link--3').click(function(){
    SlowScrol('.product-list--3');
    navigationBtn.parent().removeClass('navigation__swiper-slide--active');
    $(this).parent().addClass('navigation__swiper-slide--active');
  });
  // $('.navigation__link--4').click(function(){
  //   SlowScrol('.product-list--4');
  //   // this.parentNode.classList.remove('navigation__swiper-slide--active');
  //   navigationBtn.parent().removeClass('navigation__swiper-slide--active');
  //   $(this).parent().addClass('navigation__swiper-slide--active');
  // });
  // $('.navigation__link--5').click(function(){
  //   SlowScrol('.product-list--5');
  //   navigationBtn.parent().removeClass('navigation__swiper-slide--active');
  //   $(this).parent().addClass('navigation__swiper-slide--active');
  // });
  // $('.navigation__link--6').click(function(){
  //   SlowScrol('.product-list--6');
  //   navigationBtn.parent().removeClass('navigation__swiper-slide--active');
  //   $(this).parent().addClass('navigation__swiper-slide--active');
  // });
  // $('.navigation__link--7').click(function(){
  //   SlowScrol('.product-list--7');
  //   navigationBtn.parent().removeClass('navigation__swiper-slide--active');
  //   $(this).parent().addClass('navigation__swiper-slide--active');
  // });
  // $('.navigation__link--8').click(function(){
  //   SlowScrol('.product-list--8');
  //   navigationBtn.parent().removeClass('navigation__swiper-slide--active');
  //   $(this).parent().addClass('navigation__swiper-slide--active');
  // });

  $('.arrow-top').click(function(){
    SlowScrol('.header');
  });

})();


// active card
(function(){
	let cardBtns = document.querySelectorAll('.card__btn');
	let cardBtnPlus = document.querySelectorAll('.card__btn--plus');
	let cardBtnMinus = document.querySelectorAll('.card__btn--minus');

	function activeCard() {
		let card = this.parentNode.parentNode.parentNode;
		card.classList.add('card--active');
	};

	function countPlus() {
		let price = this.parentNode.querySelector('.card__price span');
		let x = price.dataset.price;
		let counter = this.parentNode.parentNode.parentNode.querySelector('.card__count');

		price.textContent = parseInt(price.textContent) + parseInt(x);
		counter.textContent = parseInt(counter.textContent) + 1;

	};	

	function countMinus() {
		let price = this.parentNode.querySelector('.card__price span');
		let x = price.dataset.price;
		let card = this.parentNode.parentNode.parentNode;
		let counter = this.parentNode.parentNode.parentNode.querySelector('.card__count');

		price.textContent = parseInt(price.textContent) - parseInt(x);
		counter.textContent = parseInt(counter.textContent) - 1;

		if(parseInt(price.textContent) == 0){
			card.classList.remove('card--active');
			price.textContent = price.dataset.price;
			counter.textContent = 1;
		};

	};

	if(cardBtns) cardBtns.forEach(function(e){
		e.addEventListener('click', activeCard);	
	});

	if(cardBtnPlus) cardBtnPlus.forEach(function(e){
		e.addEventListener('click', countPlus);	
	});

	if(cardBtnMinus) cardBtnMinus.forEach(function(e){
		e.addEventListener('click', countMinus);	
	});


})();


// acardion
(function(){
	if($("#accordion")){
		$("#accordion").accordion();
	};
}) ();


// basket-products__list calc
(function(){
	let basketBtns = document.querySelectorAll('.basket-products__btn');
	let basketBtnPlus = document.querySelectorAll('.basket-products__item .basket-products__btn--plus');
	let basketBtnMinus = document.querySelectorAll('.basket-products__item .basket-products__btn--minus');

	let basketBtnClear = document.querySelectorAll('.basket-products__btn--clear');
	let basketBtnAdd = document.querySelectorAll('.add-products__add');

	function addItem() {
		// $('.basket-products__list').append('<li class="basket-products__item"><div class="basket-products__img"><img src="img/basket-product-img.png" alt="img"></div><div class="basket-products__center"><h3 class="basket-products__name"><a href="#">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</a></h3><span>Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто</span></div><div class="basket-products__end"><div class="basket-products__count-wrapper"><button class="basket-products__btn basket-products__btn--count basket-products__btn--minus"><i class="icon basket-products__icon icon-minus"></i></button><div class="basket-products__item-count">1</div><button class="basket-products__btn basket-products__btn--count basket-products__btn--plus"><i class="icon basket-products__icon icon-plus"></i></button></div><p class="basket-products__price"><span data-price="1640">1640</span> ₽</p><button class="basket-products__btn basket-products__btn--clear"><i class="icon basket-products__icon icon-clear"></i></button></div></li>');
	}

	function deleteItem() {
		console.log('h');
		let item = this.parentNode.parentNode.parentNode;
		item.classList.add('d-none');
	};

	function countPlus() {
		let price = this.parentNode.parentNode.querySelector('.basket-products__price span');
		let x = price.dataset.price;
		let counter = this.parentNode.querySelector('.basket-products__item-count');

		price.textContent = parseInt(price.textContent) + parseInt(x);
		counter.textContent = parseInt(counter.textContent) + 1;
	};	

	function countMinus() {
		let price = this.parentNode.parentNode.querySelector('.basket-products__price span');
		let x = price.dataset.price;
		let counter = this.parentNode.querySelector('.basket-products__item-count');

		price.textContent = parseInt(price.textContent) - parseInt(x);
		counter.textContent = parseInt(counter.textContent) - 1;

		if(parseInt(price.textContent) == 0){
			price.textContent = price.dataset.price;
			counter.textContent = 1;
		};
	};

	if(basketBtnAdd) basketBtnAdd.forEach(function(e){
		e.addEventListener('click', addItem);	
	});

	if(basketBtnClear) basketBtnClear.forEach(function(e){
		e.addEventListener('click', deleteItem);	
	});

	if(basketBtnPlus) basketBtnPlus.forEach(function(e){
		e.addEventListener('click', countPlus);	
	});

	if(basketBtnMinus) basketBtnMinus.forEach(function(e){
		e.addEventListener('click', countMinus);	
	});
})();

// popup
(function(){
	// let exitPopup  = document.querySelector('.popup-basket__icon');
	if($('.popup .popup-exit')){
		$('.popup .popup-exit').click(function(){
			$(this.parentNode).css("display", "none");
			$('.popup-basket__bg').css("display", "none");
		})
	};

})();

// form scripts
(function(){
	let plus = document.querySelector('.form__counter-plus');
	let minus = document.querySelector('.form__counter-minus');
	let counter  = document.querySelector('.form__counter-count');

	if(plus) plus.onclick = function(){
		counter.textContent = parseInt(counter.textContent) + 1;
	};
	if(minus) minus.onclick = function(){
		if(counter.textContent > 1) counter.textContent = parseInt(counter.textContent) - 1;
	};

	let formBtn = document.querySelectorAll('.form__btn');

	function active() {
		let stack = this.parentNode.parentNode;
		let itemsBtn = stack.querySelectorAll('.form__btn');

		itemsBtn.forEach(function(e){
			e.classList.remove('form__btn--active');
		});

		this.classList.add('form__btn--active');

		if(this.classList.contains('form__btn--delivery')){
			document.querySelector('.form__delivery-delivery').classList.remove('d-none');
			document.querySelector('.form__delivery-time').classList.remove('d-none');
			document.querySelector('.form__delivery-pickup').classList.add('d-none');
		}
		if(this.classList.contains('form__btn--pickup')){
			document.querySelector('.form__delivery-delivery').classList.add('d-none');
			document.querySelector('.form__delivery-time').classList.add('d-none');
			document.querySelector('.form__delivery-pickup').classList.remove('d-none');
		}
	};

	formBtn.forEach(function(e){
		e.addEventListener('click', active);
	});

})();


// custom select
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});