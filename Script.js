let carouselChaild = {
    buttonPrev: null,
    buttonNext: null,
    imgBlock: null,
    h2Block: null,
    indicatorsBlock: null,
    currentImgIndex: 0, //индекс слайда малой карусели
    strIndicatorsArray: null,
    currentDivCarousel: null,
    buttonGlobalSliderRight:null,
    buttonGlobalSliderNext:null,
    indexCarouselChaild: 0, //индекс самой малой карусели (0 : Economy, 1 : First, 2 : Premium, 3 : Grand)
    functionsPrevSlide: null,
    functionsNextSlide: null,

    //для того чтобы когда мы полистали карусель 0 : Economy, потом ушли на 1 : First, что то там сделали, потом вернулись на 0 : Economy, а там все еще открыт последний открытый нами слайд
    currentImgIndexEconomy: 0,
    currentImgIndexFirst: 0,
    currentImgIndexPremium: 0,
    currentImgIndexGrand: 0,

    //работа идет с этими переменными, которые заполняются в зависомости от indexCarouselChaild, перезапись идет при кликах по глобальной карусели
    currentImgStr: null,
    currentSrc: null,
    currentListImgSrc: null,
    currentListImgDatasrc: null,
    currentListH2: null,
    currentImgTitle: null,

    htmlImgFromBeginToSrc: `<img class="img-active align-items-center img-fluid w-100 img-sapsan-type-seat lazyload" src="/images/grandexpress/classes`,

    srcEconomy: `/1_economy_class/`,
    srcFirst: `/2_first_class/`,
    srcPremium: `/3_premium_class/`,
    srcGrand: `/4_grand_class/`,

    htmlImgFromDatasrcToClasses: `" data-src="/images/grandexpress/classes`,

    imgTitleEconomy: `" title="Grand Express, Economy class" alt="Grand Express, Economy class">`,
    imgTitleFirst: `" title="Grand Express, First class" alt="Grand Express, First class">`,
    imgTitlePremium: `" title="Grand Express, Premium class" alt="Grand Express, Premium class">`,
    imgTitleGrand: `" title="Grand Express, Grand class" alt="Grand Express, Grand class">`,

    listImgSrcEconomy: [
        `economy1_tn.jpg`,
        `economy2_tn.jpg`,
        `economy3_tn.jpg`,
        `economyPlus1_tn.jpg`,
        `economyPlus2_tn.jpg`,
        `economyPlus3_tn.jpg`,
        `economyPlus4_tn.jpg`,
        `economyPlus5_tn.jpg`,
    ],
    listImgSrcFirst: [
        `firstDefault1_tn.jpg`,
        `firstDefault2_tn.jpg`,
        `firstDefault3_tn.jpg`,
        `firstDefault4_tn.jpg`,
        `firstDefault5_tn.jpg`,
        `firstBusiness4_tn.jpg`,
    ],
    listImgSrcPremium: [
        `premium1_tn.jpg`,
        `premium2_tn.jpg`,
        `premium3_tn.jpg`,
        `premium4_tn.jpg`,
        `premium5_tn.jpg`,
        `premium6_tn.jpg`,
    ],
    listImgSrcGrand: [
        `grand_default_and_single_1_tn.jpg`,
        `grand_default_and_single_2_tn.jpg`,
        `grand_default_and_single_3_tn.jpg`,
        `grand_default_and_single_4_tn.jpg`,
        `grand_default_and_single_5_tn.jpg`,
        `grand_default_and_single_6_tn.jpg`,
        `grand_de_luxe_1_tn.jpg`,
        'grand_de_luxe_2_tn.jpg',
        'grand_de_luxe_3_tn.jpg',
        'grand_de_luxe_4_tn.jpg',
        'grand_imperial_and_single_1_tn.jpg',
        'grand_imperial_and_single_2_tn.jpg',
        'grand_imperial_and_single_3_tn.jpg',
    ],

    listImgDatasrcEconomy: [
        `economy1.jpg`,
        `economy2.jpg`,
        `economy3.jpg`,
        `economyPlus1.jpg`,
        `economyPlus2.jpg`,
        `economyPlus3.jpg`,
        `economyPlus4.jpg`,
        `economyPlus5.jpg`,
    ],
    listImgDatasrcFirst: [
        `firstDefault1.jpg`,
        `firstDefault2.jpg`,
        `firstDefault3.jpg`,
        `firstDefault4.jpg`,
        `firstDefault5.jpg`,
        `firstBusiness4.jpg`,
    ],
    listImgDatasrcPremium: [
        `premium1.jpg`,
        `premium2.jpg`,
        `premium3.jpg`,
        `premium4.jpg`,
        `premium5.jpg`,
        `premium6.jpg`,
    ],
    listImgDatasrcGrand: [
        `grand_default_and_single_1.jpg`,
        `grand_default_and_single_2.jpg`,
        `grand_default_and_single_3.jpg`,
        `grand_default_and_single_4.jpg`,
        `grand_default_and_single_5.jpg`,
        `grand_default_and_single_6.jpg`,
        `grand_de_luxe_1.jpg`,
        'grand_de_luxe_2.jpg',
        'grand_de_luxe_3.jpg',
        'grand_de_luxe_4.jpg',
        'grand_imperial_and_single_1.jpg',
        'grand_imperial_and_single_2.jpg',
        'grand_imperial_and_single_3.jpg',
    ],

    listH2Economy: [
        'Compartments Economy class',
        'Compartments Economy class',
        'Compartments Economy class',
        'Compartments Economy Comfort class',
        'Compartments Economy Comfort class',
        'Compartments Economy Comfort class',
        'Compartments Economy Comfort class',
        'Compartments Economy Comfort class',
    ],
    listH2First: [
        'Compartments First class',
        'Compartments First class',
        'Compartments First class',
        'Compartments First class',
        'Compartments First class',
        'Safe in compartments First-business class',
    ],
    listH2Premium: [
        `premium1.jpg`,
        `premium2.jpg`,
        `premium3.jpg`,
        `premium4.jpg`,
        `premium5.jpg`,
        `premium6.jpg`,
    ],
    listH2Grand: [
        `grand_default_and_single_1.jpg`,
        `grand_default_and_single_2.jpg`,
        `grand_default_and_single_3.jpg`,
        `grand_default_and_single_4.jpg`,
        `grand_default_and_single_5.jpg`,
        `grand_default_and_single_6.jpg`,
        `grand_de_luxe_1.jpg`,
        'grand_de_luxe_2.jpg',
        'grand_de_luxe_3.jpg',
        'grand_de_luxe_4.jpg',
        'grand_imperial_and_single_1.jpg',
        'grand_imperial_and_single_2.jpg',
        'grand_imperial_and_single_3.jpg',
    ],

    listDivsCaroudelChaild: [
        '#carousel_chaild_economy',
        '#carousel_chaild_first',
        '#carousel_chaild_premium',
        '#carousel_chaild_grand'
    ],

    //метод снимает addEventListener с кнопок когда мы уходим на другую каресель
    remover: function () {
        if (this.buttonPrev.removeEventListener) {                   // For all major browsers, except IE 8 and earlier
            this.buttonPrev.removeEventListener('click', this.functionsPrevSlide);
            this.buttonNext.removeEventListener('click', this.functionsNextSlide);
        } else if (this.buttonPrev.detachEvent) {                    // For IE 8 and earlier versions
            this.buttonPrev.detachEvent('click', this.functionsPrevSlide);
            this.buttonNext.detachEvent('click', this.functionsNextSlide);
        }
    },

    initialization: function (n) {
        let that = this;
        window.addEventListener('load', function (e) {
            that.resize(e);
        });
        window.addEventListener('resize', function (e) {
            that.resize(e);
        });
        this.currentDivCarousel = document.querySelector(this.listDivsCaroudelChaild[n]);
        this.buttonPrev = this.currentDivCarousel.querySelector('.arrow-prev');
        this.buttonNext = this.currentDivCarousel.querySelector('.arrow-next');
        this.imgBlock = this.currentDivCarousel.querySelector('.img-block');
        this.h2Block = this.currentDivCarousel.querySelector('.h2-block');
        this.indicatorsBlock = this.currentDivCarousel.querySelector('.indicators');

        switch (n) {
            case 0:
                this.currentSrc = this.srcEconomy;
                this.currentListImgSrc = this.listImgSrcEconomy;
                this.currentListImgDatasrc = this.listImgDatasrcEconomy;
                this.currentListH2 = this.listH2Economy;
                this.currentImgTitle = this.imgTitleEconomy;
                this.currentImgIndex = this.currentImgIndexEconomy;
                break;
            case 1:
                this.currentSrc = this.srcFirst;
                this.currentListImgSrc = this.listImgSrcFirst;
                this.currentListImgDatasrc = this.listImgDatasrcFirst;
                this.currentListH2 = this.listH2First;
                this.currentImgTitle = this.imgTitleFirst;
                this.currentImgIndex = this.currentImgIndexFirst;
                break;
            case 2:
                this.currentSrc = this.srcPremium;
                this.currentListImgSrc = this.listImgSrcPremium;
                this.currentListImgDatasrc = this.listImgDatasrcPremium;
                this.currentListH2 = this.listH2Premium;
                this.currentImgTitle = this.imgTitlePremium;
                this.currentImgIndex = this.currentImgIndexPremium;
                break;
            case 3:
                this.currentSrc = this.srcGrand;
                this.currentListImgSrc = this.listImgSrcGrand;
                this.currentListImgDatasrc = this.listImgDatasrcGrand;
                this.currentListH2 = this.listH2Grand;
                this.currentImgTitle = this.imgTitleGrand;
                this.currentImgIndex = this.currentImgIndexGrand;
                break;
        }

        this.functionsPrevSlide = function (e) {
            that.prevSlide(e);
            that.loadedImg();
        };
        this.functionsNextSlide = function (e) {
            that.nextSlide(e);
            that.loadedImg();
        };
        this.buttonPrev.addEventListener('click', this.functionsPrevSlide); // делаем через переменные, так как если тут будет анонимная функция, то remover() не сработает
        this.buttonNext.addEventListener('click', this.functionsNextSlide);

        this.indicatorsBlock.innerHTML = '';
        for (let i = 1; i < this.currentListImgSrc.length + 1; i++) {
            this.indicatorsBlock.insertAdjacentHTML('afterbegin', '<span class="one-indicator">•</span>');
        }

        this.currentImgStr = this.htmlImgFromBeginToSrc + this.currentSrc + this.currentListImgSrc[this.currentImgIndex] + this.htmlImgFromDatasrcToClasses + this.currentSrc + this.currentListImgDatasrc[this.currentImgIndex] + this.currentImgTitle;
        this.h2Block.innerHTML = this.currentListH2[this.currentImgIndex];
        this.imgBlock.innerHTML = this.currentImgStr;
        this.strIndicatorsArray = this.currentDivCarousel.querySelectorAll('.one-indicator');
        this.strIndicatorsArray[this.currentImgIndex].classList.toggle('active-indicator');

    },

    nextSlide: function (e) {
        this.currentImgIndex++;
        if (this.currentImgIndex === this.currentListImgSrc.length) {
            this.currentImgIndex = 0;
        }
        this.changeSlide(this.currentImgIndex);
    },

    prevSlide: function (e) {
        this.currentImgIndex--;
        if (this.currentImgIndex === -1) {
            this.currentImgIndex = this.currentListImgSrc.length - 1;
        }
        this.changeSlide(this.currentImgIndex);
    },

    changeSlide: function (currentImgIndex) {
        //по принимаемому индексу отобразить нужный слайд
        this.imgBlock.innerHTML = '';
        let strImg = this.htmlImgFromBeginToSrc + this.currentSrc + this.currentListImgSrc[this.currentImgIndex] + this.htmlImgFromDatasrcToClasses + this.currentSrc + this.currentListImgDatasrc[this.currentImgIndex] + this.currentImgTitle;
        this.imgBlock.insertAdjacentHTML('afterbegin', strImg);
        this.h2Block.innerHTML = this.currentListH2[currentImgIndex];

        // включение загрузки data-src у img
        lazyload();

        //переключение кружков-индикаторов
        for (let i = 0; i < this.strIndicatorsArray.length; i++) {
            this.strIndicatorsArray[i].classList.remove('active-indicator');
        }
        this.strIndicatorsArray[currentImgIndex].classList.toggle('active-indicator');

        //анимация
        this.imgBlock.classList.add('img-item-none');

        function delayOpacity() {
            carouselChaild.imgBlock.classList.remove('img-item-none');
        }

        setTimeout(delayOpacity, 300);
    },

    resize: function () {
        let arrayDivsBlocksCarouselsHeights = [];
        let heightBlockCarouselMax;
        let arrayDivsBlocksCarousels = document.querySelectorAll('.for-height-block-carouselChaild'); //найти все карусели
        for (let i = 0; i < arrayDivsBlocksCarousels.length; i++) {
            arrayDivsBlocksCarousels[i].style = ''; // у всех обнулить style (height)
        }
        for (let i = 0; i < arrayDivsBlocksCarousels.length; i++) {
            arrayDivsBlocksCarouselsHeights.push(arrayDivsBlocksCarousels[i].clientHeight); // создать массив из высот всех каруселей
        }
        heightBlockCarouselMax = Math.max.apply(null, arrayDivsBlocksCarouselsHeights); // найти наибольшее (остальные будут нули)
        for (let i = 0; i < arrayDivsBlocksCarousels.length; i++) {
            arrayDivsBlocksCarousels[i].style.height = heightBlockCarouselMax + 'px'; // назначить эту высоту всем каруселям (в том числе и невидимым) чтобы не искать одну нужную
        }
        let buttonsArrowsResize = document.querySelectorAll('.arrow'); // найти кнопки
        for (let i = 0; i < buttonsArrowsResize.length; i++) {
            buttonsArrowsResize[i].style.paddingTop = heightBlockCarouselMax / 2 + 'px'; // назначить им размер во всю высоту карусели
            buttonsArrowsResize[i].style.paddingBottom = heightBlockCarouselMax / 2 + 'px';
        }
    },

    loadedImg: function () {
        let that = this;
        let activeImg = that.currentDivCarousel.querySelector('.img-active'); //найти отображаемую в карусели картинку
        if (activeImg.complete) { // если она загружена, то прогнать resize
            that.resize();
        } else {
            activeImg.addEventListener('load', that.resize); // если нет, то прогнать как загрузится
        }
    },

    initCarouselChaild: function () {
        this.buttonGlobalSliderRight = document.querySelector('.icon-right-chevron-js');
        this.buttonGlobalSliderLeft = document.querySelector('.icon-left-chevron-js');
        let that = this;
        this.initialization(this.indexCarouselChaild);
        this.buttonGlobalSliderRight.addEventListener('click', function (e) {
            that.nextCarouselChaild(e);
        });
        this.buttonGlobalSliderLeft.addEventListener('click', function (e) {
            that.prevCarouselChaild(e);
        });
    },

    rememberCurrentImgIndexAndRemuver: function () {
        this.remover();
        //запомнить какие картинки сейчас отображаются
        switch (this.indexCarouselChaild) {
            case 0:
                this.currentImgIndexEconomy = this.currentImgIndex;
                break;
            case 1:
                this.currentImgIndexFirst = this.currentImgIndex;
                break;
            case 2:
                this.currentImgIndexPremium = this.currentImgIndex;
                break;
            case 3:
                this.currentImgIndexGrand = this.currentImgIndex;
                break;
        }
    },

    prevCarouselChaild: function () {
        if (this.indexCarouselChaild === 0) {
            return;
        }
        this.rememberCurrentImgIndexAndRemuver();
        this.indexCarouselChaild--;
        this.initialization(this.indexCarouselChaild);
    },

    nextCarouselChaild: function () {
        if (this.indexCarouselChaild === 3) {
            return;
        }
        this.rememberCurrentImgIndexAndRemuver();
        this.currentImgIndex = 0;
        this.indexCarouselChaild++;
        this.initialization(this.indexCarouselChaild);
        console.log('prevCarouselChaild, indexCarouselChaild = ', this.indexCarouselChaild, 'listDivsCaroudelChaild = ', this.listDivsCaroudelChaild[this.indexCarouselChaild]);
    }
};

carouselChaild.initCarouselChaild();