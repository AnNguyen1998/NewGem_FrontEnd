import React from 'react';
import { Link } from 'react-router-dom';

const HotelBanner = () => {
    return (
        <section className="elementor-section elementor-top-section elementor-element elementor-element-79cf5ef elementor-section-full_width elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-37888e8">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-a3f9896 elementor-widget elementor-widget-kinsley-intro">
                            <div className="elementor-widget-container">
                                <section className="knsl-banner-simple knsl-transition-bottom">
                                    <noscript>
                                        <img
                                            decoding="async"
                                            src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                            className="knsl-deco-left"
                                            alt="palm"
                                        />
                                    </noscript>
                                    <img
                                        decoding="async"
                                        src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                        data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                        className="knsl-deco-left lazyloaded"
                                        alt="palm"
                                    />
                                    <noscript>
                                        <img
                                            decoding="async"
                                            src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                            className="knsl-deco-right"
                                            alt="palm"
                                        />
                                    </noscript>
                                    <img
                                        decoding="async"
                                        src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                        data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                        className="knsl-deco-right lazyloaded"
                                        alt="palm"
                                    />
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="knsl-center knsl-title-frame">
                                                    <h1 className="knsl-title--h knsl-mb-20 knsl-h1-inner">
                                                        <span>Choose your Hotel</span>
                                                    </h1>
                                                    <p className="knsl-text knsl-mb-30">
                                                        <span>
                                                            Laborum accusantium libero commodi. Voluptate consequatur itaque
                                                            expedita accusamus impedit perspiciatis asperiores
                                                            necessitatibus assumenda magnam ipsa.
                                                        </span>
                                                    </p>
                                                    <ul className="knsl-breadcrumbs">
                                                        <li>
                                                            <Link
                                                                to="/"
                                                            >
                                                                Home
                                                            </Link>
                                                        </li>
                                                        <li className="tst-active">
                                                            Hotels
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelBanner;
