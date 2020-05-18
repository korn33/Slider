<!-- JS slider -->
<div id="slider-type-seats" class="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">
    <div class="row m-0 d-flex justify-content-end pb-3">
        <div class="d-flex justify-content-between slider-buttons">
            <a href="#slider-type-seats" role="button" data-slide="prev">
						<span class="icon icon-slider-left icon-left-chevron-js slider-icon not-active-button-slider"
                              aria-hidden="true"></span>
                <span class="sr-only"><?= Service::firstCharToUpper(Yii::t('app', 'previous')) ?></span>
            </a>
            <a href="#slider-type-seats" role="button" data-slide="next">
						<span class="icon icon-slider-right slider-icon icon-right-chevron-js"
                              aria-hidden="true"></span>
                <span class="sr-only"><?= Service::firstCharToUpper(Yii::t('app', 'next')) ?></span>
            </a>
        </div>
    </div>
    <div class="carousel-inner">
        <!--Economy class-->
        <div class="carousel-item active">
            <div class="d-block">
                <div class="d-flex flex-row flex-wrap justify-content-center">
                    <div id="carousel_chaild_economy" class="for-height-block-carouselChaild col-lg-6 col-md-9 col-12 d-flex flex-column overflow-hidden px-0">
                        <div class="place-for-child-carousel" style="">
                            <h2 class="h2-block"></h2>
                            <div class="d-flex">
                                <div class="img-block"></div>
                                <span class="icon icon-slider-left arrow arrow-prev align-content-start"></span>
                                <span class="icon icon-slider-right arrow arrow-next align-content-end"></span>
                            </div>
                        </div>
                        <p class="indicators"></p>
                    </div>
                    <div class="col-lg-6 p-0 pl-lg-3">
                        <div class="open-sans-14-85 pl-lg-1 pb-0 pb-lg-5 mb-2">
                            <div class="py-4 open-sans-20-55 pt-lg-0 text-lg-left text-center">
                                <?= Service::firstCharToUpper(Yii::t('app', 'economy class')) ?>
                            </div>
                            <p><?= Yii::t('app', 'Grand Express Economy class description') ?></p>
                            <p>
                                <span class="open-sans-sb"><?= Yii::t('app', 'Services depending on subclasses:') ?></span>
                            </p>
                            <p><?= Yii::t('app', 'Economy default class') ?></p>
                            <p><?= Yii::t('app', 'Economy comfort class') ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--First class-->
        <div class="carousel-item">
            <div class="d-block">
                <div class="d-flex flex-row flex-wrap justify-content-center">
                    <div id="carousel_chaild_first" class="for-height-block-carouselChaild col-lg-6 col-md-9 col-12 d-flex flex-column overflow-hidden px-0">
                        <div class="place-for-child-carousel" style="">
                            <h2 class="h2-block"></h2>
                            <div class="d-flex">
                                <div class="img-block"></div>
                                <span class="icon icon-slider-left arrow arrow-prev align-content-start"></span>
                                <span class="icon icon-slider-right arrow arrow-next align-content-end"></span>                                    </div>
                        </div>
                        <p class="indicators"></p>
                    </div>
                    <div class="col-lg-6 p-0 pl-lg-3">
                        <div class="open-sans-14-85 pl-lg-1 pb-0 pb-lg-5 mb-2">
                            <div class="py-4 open-sans-20-55 pt-lg-0 text-lg-left text-center">
                                <?= Service::firstCharToUpper(Yii::t('app', 'first class')) ?>
                            </div>
                            <p><?= Yii::t('app', 'Description First class') ?></p>
                            <p>
                                <span class="open-sans-sb"><?= Yii::t('app', 'Services depending on subclasses:') ?></span>
                            </p>
                            <p><?= Yii::t('app', 'First default class') ?></p>
                            <p><?= Yii::t('app', 'First comfort class') ?></p>
                            <p><?= Yii::t('app', 'First class business') ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Premium class-->
        <div class="carousel-item">
            <div class="d-block">
                <div class="d-flex flex-row flex-wrap justify-content-center">
                    <div id="carousel_chaild_premium" class="for-height-block-carouselChaild col-lg-6 col-md-9 col-12 d-flex flex-column overflow-hidden px-0">
                        <div class="place-for-child-carousel" style="">
                            <h2 class="h2-block"></h2>
                            <div class="d-flex">
                                <div class="img-block"></div>
                                <span class="icon icon-slider-left arrow arrow-prev align-content-start"></span>
                                <span class="icon icon-slider-right arrow arrow-next align-content-end"></span>
                            </div>
                        </div>
                        <p class="indicators"></p>
                    </div>
                    <div class="col-lg-6 p-0 pl-lg-3">
                        <div class="open-sans-14-85 pl-lg-1 pb-0 pb-lg-5 mb-2">
                            <div class="py-4 open-sans-20-55 pt-lg-0 text-lg-left text-center">
                                <?= Service::firstCharToUpper(Yii::t('app', 'Premium class')) ?>
                            </div>
                            <p><?= Yii::t('app', 'Description Premium class') ?></p>
                            <p>
                                <span class="open-sans-sb"><?= Yii::t('app', 'Services provided') ?></span> <?= Yii::t('app', 'list of premium services') ?>
                            </p>
                            <p>
                                <span class="open-sans-sb"><?= Yii::t('app', 'subclass differences') ?></span>
                            </p>
                            <p><?= Yii::t('app', 'Premium default class') ?></p>
                            <p><?= Yii::t('app', 'Premium single class') ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Grand class-->
        <div class="carousel-item ">
            <div class="d-block">
                <div class="d-flex flex-row flex-wrap justify-content-center">
                    <div id="carousel_chaild_grand" class="for-height-block-carouselChaild col-lg-6 col-md-9 col-12 d-flex flex-column overflow-hidden px-0">
                        <div class="place-for-child-carousel" style="">
                            <h2 class="h2-block"></h2>
                            <div class="d-flex">
                                <div class="img-block"></div>
                                <span class="icon icon-slider-left arrow arrow-prev align-content-start"></span>
                                <span class="icon icon-slider-right arrow arrow-next align-content-end"></span>
                            </div>
                        </div>
                        <p class="indicators"></p>
                    </div>
                    <div class="col-lg-6 p-0 pl-lg-3">
                        <div class="bg-white open-sans-14-85 pl-lg-1 pb-0">
                            <div class="py-4 open-sans-20-55 pt-lg-0 text-lg-left text-center">
                                <?= Service::firstCharToUpper(Yii::t('app', 'Grand class')) ?>
                            </div>
                            <p><?= Yii::t('app', 'Description Grand class') ?></p>
                            <p>
                                <span class="open-sans-sb"><?= Yii::t('app', 'Services provided') ?></span> <?= Yii::t('app', 'list of Grand services') ?>
                            </p>
                            <p>
                                <span class="open-sans-sb"><?= Yii::t('app', 'subclass differences') ?> </span>
                            </p>
                            <p><?= Yii::t('app', 'Grand default class') ?></p>
                            <p><?= Yii::t('app', 'Grand single class') ?></p>
                            <p><?= Yii::t('app', 'Grand de Luxe class') ?></p>
                            <p><?= Yii::t('app', 'Grand Imperial class') ?></p>
                            <p><?= Yii::t('app', 'Grand Imperial Single class') ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End JS slider -->