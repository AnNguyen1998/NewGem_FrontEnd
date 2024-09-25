import React, { useEffect } from 'react'
import ScrollButton from '../ScrollButton/ScrollButton'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogDetail } from '../../redux/blogSlice';
import { useParams } from 'react-router-dom';


export default function BlogDetail() {
    const {id} = useParams();
    const dispatch = useDispatch();

    const { items, BlogList, status, errors, message, totalPage } = useSelector(
        (state) => state.blog
      );
      useEffect(() => {
        dispatch(fetchBlogDetail(id));
    }, [dispatch, id]);
    console.log(id)

    console.log(items)

  return (
    <div>
        <div class="knsl-app">
            <div class="knsl-datepicker-place"></div>
            <div class="">
                <section class="knsl-banner-simple knsl-transition-bottom">
                    <noscript>
                        <img src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg" class="knsl-deco-left" alt="palm"/>
                    </noscript>
                    <img src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg" class="lazyload knsl-deco-left" alt="palm"/>
                    <noscript>
                        <img src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg" class="knsl-deco-right" alt="palm"/>
                    </noscript>
                    <img src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg" class="lazyload knsl-deco-right" alt="palm"/>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="knsl-center knsl-title-frame">
                                    <h1 class="knsl-mb-20 knsl-h1-inner">The Ultimate Guide to Traveling When You Have No Money</h1>
                                    <ul class="knsl-breadcrumbs">
                                        <li>
                                            <a href="https://kinsley.bslthemes.com" title="Kinsley - Hotel &amp; Resort WordPress Theme">Home</a>
                                        </li>
                                        <li>
                                            <a href="https://kinsley.bslthemes.com/blog/">Blog</a>
                                        </li>
                                        <li class="tst-active">
                                            <a>Travel</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="knsl-p-0-100">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <noscript>
                                    <img src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg" alt="The Ultimate Guide to Traveling When You Have No Money" class="knsl-default-img knsl-mb-30"/>
                                </noscript>
                                <img src='https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-2-1.jpg" alt="The Ultimate Guide to Traveling When You Have No Money" class="lazyload knsl-default-img knsl-mb-30"/>
                                <div class="knsl-room-features-lg knsl-mb-30">
                                    <div class="knsl-feature">
                                        <div class="knsl-icon-frame knsl-icon-author">
                                            <noscript>
                                                <img src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg" alt="author"/>
                                            </noscript>
                                            <img class="lazyload" src='https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg' data-src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&#038;d=mm&#038;r=g" alt="author"/>
                                        </div>
                                        <span>Hana Evans</span>
                                    </div>
                                    <div class="knsl-feature">
                                        <div class="knsl-icon-frame">
                                            <span class="img-svg img-svg-time"></span>
                                        </div>
                                        <span>{items && items.createdAt.substring(0, 10)}</span>
                                    </div>
                                </div>
                                <div class="knsl-blog-post knsl-mb-60">
                                    <div id="post-1181" class="post-1181 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-guide tag-places tag-travel tag-trip">
                                        <div class="single-post-text">
                                            <blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
                                                <p>{items && items.content}</p>
                                            </blockquote>
                                        </div>
                                        <div class="post-text-bottom">
                                            <span class="cat-links">
                                                Posted in <a href="https://kinsley.bslthemes.com/blog/category/travel/" rel="category tag">Travel</a>
                                            </span>
                                            <span class="tags-links">
                                                Tags: <a href="https://kinsley.bslthemes.com/blog/tag/guide/" rel="tag">guide</a>
                                                <a href="https://kinsley.bslthemes.com/blog/tag/places/" rel="tag">places</a>
                                                <a href="https://kinsley.bslthemes.com/blog/tag/travel/" rel="tag">travel</a>
                                                <a href="https://kinsley.bslthemes.com/blog/tag/trip/" rel="tag">trip</a>
                                            </span>
                                            <div class="social-share">
                                                <strong>Share:</strong>
                                                <a class="share-btn share-btn-facebook" title="Share on Facebook">
                                                    <i class="icon fab fa-facebook"></i>
                                                </a>
                                                <a class="share-btn share-btn-twitter" title="Share on Twitter">
                                                    <i class="icon fab fa-twitter"></i>
                                                </a>
                                                <a class="share-btn share-btn-linkedin" title="Share on Linkedin">
                                                    <i class="icon fab fa-linkedin"></i>
                                                </a>
                                                <a class="share-btn share-btn-reddit" title="Share on Reddit">
                                                    <i class="icon fab fa-reddit"></i>
                                                </a>
                                                <a class="share-btn share-btn-pinterest" title="Share on Pinterest">
                                                    <i class="icon fab fa-pinterest"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="knsl-navigation">
                                    <a href="https://kinsley.bslthemes.com/blog/2021/12/21/the-best-travel-insurance-companies-for-seniors-2/" class="knsl-left-link">
                                        <span>Previous</span>
                                    </a>
                                    <div class="knsl-navigation-center knsl-m-hidden">
                                        <a class="knsl-link-default" href="https://kinsley.bslthemes.com/blog/">All posts</a>
                                    </div>
                                    <span></span>
                                </div>
                                <div id="comments" class="post-comments">
                                    <section class="form-comment knsl-scroll-animation form-comment-open">
                                        <div id="respond" class="comment-respond">
                                            <div class="comment-reply-title" id="reply-title">
                                                <h3 class="knsl-mb-40">
                                                    Write a comment 
                                                    <small>
                                                        <a rel="nofollow" id="cancel-comment-reply-link" href="/blog/2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/#respond" style={{display:'none'}}>Cancel Reply</a>
                                                    </small>
                                                </h3>
                                            </div>
                                            <form action="https://kinsley.bslthemes.com/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate>
                                                <div class="form-comment-group">
                                                    <textarea placeholder="Comment" id="comment" name="comment" aria-required="true" rows="6"></textarea>
                                                </div>
                                                <div class="form-comment-group">
                                                    <input id="author" name="author" type="text" placeholder="Name" value="" aria-required='true'/>
                                                </div>
                                                <div class="form-comment-group">
                                                    <input id="email" name="email" type="text" placeholder="Email" value="" aria-required='true'/>
                                                </div>
                                                <p class="comment-form-cookies-consent">
                                                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"/>
                                                    <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                                </p>
                                                <div class="form-comment-submit">
                                                    <button type="submit" name="submit" id="submit" class="knsl-btn">Submit</button>
                                                    <input type='hidden' name='comment_post_ID' value='1181' id='comment_post_ID'/>
                                                    <input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="knsl-footer">
                    <div data-elementor-type="wp-post" data-elementor-id="831" class="elementor elementor-831">
                        <section class="elementor-section elementor-top-section elementor-element elementor-element-71ce628 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="71ce628" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                            <div class="elementor-background-overlay"></div>
                            <div class="elementor-container elementor-column-gap-no">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bded771" data-id="bded771" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-bd14a6e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bd14a6e" data-element_type="section">
                                            <div class="elementor-container elementor-column-gap-default">
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5fe4cc3" data-id="5fe4cc3" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-1661bae elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="1661bae" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b509152" data-id="b509152" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-513816c elementor-widget elementor-widget-image" data-id="513816c" data-element_type="widget" data-widget_type="image.default">
                                                                            <div class="elementor-widget-container">
                                                                                <a href="/">
                                                                                    <noscript>
                                                                                        <img loading="lazy" decoding="async" width="399" height="132" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w.png" class="attachment-full size-full wp-image-841" alt="" srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w.png 399w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w-300x99.png 300w" sizes="(max-width: 399px) 100vw, 399px"/>
                                                                                    </noscript>
                                                                                    <img loading="lazy" decoding="async" width="399" height="132" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20399%20132%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w.png" class="lazyload attachment-full size-full wp-image-841" alt="" data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w.png 399w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w-300x99.png 300w" data-sizes="(max-width: 399px) 100vw, 399px"/>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-fd3e23b elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="fd3e23b" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6ba497c" data-id="6ba497c" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-eb2f1d2 elementor-widget elementor-widget-text-editor" data-id="eb2f1d2" data-element_type="widget" data-widget_type="text-editor.default">
                                                                            <div class="elementor-widget-container">
                                                                                <p>
                                                                                    Sequi dolores ratione eos eveniet provident soluta. Omnis nesciunt sit eos at, eius voluptatum rem corporis.<br/>
                                                                                    Doloremque labore assumenda<br/>explicabo velit illo, soluta, inventore hic.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-591a18e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="591a18e" data-element_type="section">
                                                            <div class="elementor-container elementor-column-gap-no">
                                                                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7c8e784" data-id="7c8e784" data-element_type="column">
                                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                                        <div class="elementor-element elementor-element-a8aebc6 elementor-widget elementor-widget-kinsley-footer-social-links" data-id="a8aebc6" data-element_type="widget" data-widget_type="kinsley-footer-social-links.default">
                                                                            <div class="elementor-widget-container">
                                                                                <div class="knsl-footer-social">
                                                                                    <a target="_blank" href="https://twitter.com/" class="tst-icon-link" title="Twitter">
                                                                                        <i class="fab fa-twitter"></i>
                                                                                    </a>
                                                                                    <a target="_blank" href="https://facebook.com/" class="tst-icon-link" title="Facebook">
                                                                                        <i class="fab fa-facebook-f"></i>
                                                                                    </a>
                                                                                    <a target="_blank" href="https://youtube.com/" class="tst-icon-link" title="Youtube">
                                                                                        <i class="fab fa-youtube"></i>
                                                                                    </a>
                                                                                    <a target="_blank" href="https://instagram.com/" class="tst-icon-link" title="Instagram">
                                                                                        <i class="fab fa-instagram"></i>
                                                                                    </a>
                                                                                    <a target="_blank" href="https://linkedin.com/" class="tst-icon-link" title="Linkedin">
                                                                                        <i class="fab fa-linkedin-in"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ccc6374" data-id="ccc6374" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-df594a6 elementor-widget elementor-widget-kinsley-footer-menu" data-id="df594a6" data-element_type="widget" data-widget_type="kinsley-footer-menu.default">
                                                            <div class="elementor-widget-container">
                                                                <h4>
                                                                    <span>Menu </span>
                                                                </h4>
                                                                <ul id="menu-footer-menu-1" class="knsl-footer-menu">
                                                                    <li id="menu-item-875" class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                                                                        <a href="https://kinsley.bslthemes.com/">Home</a>
                                                                    </li>
                                                                    <li id="menu-item-876" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/about/">About Us</a>
                                                                    </li>
                                                                    <li id="menu-item-877" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/accommodations/">Rooms</a>
                                                                    </li>
                                                                    <li id="menu-item-878" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/blog/">Blog</a>
                                                                    </li>
                                                                    <li id="menu-item-879" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/contact/">Contact Us</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-c4d39cf" data-id="c4d39cf" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-1ce252a elementor-widget elementor-widget-kinsley-footer-menu" data-id="1ce252a" data-element_type="widget" data-widget_type="kinsley-footer-menu.default">
                                                            <div class="elementor-widget-container">
                                                                <h4>
                                                                    <span>Meet Kinsley </span>
                                                                </h4>
                                                                <ul id="menu-footer-menu-2" class="knsl-footer-menu">
                                                                    <li id="menu-item-880" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/faq/">FAQ</a>
                                                                    </li>
                                                                    <li id="menu-item-881" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/gallery/">Gallery</a>
                                                                    </li>
                                                                    <li id="menu-item-882" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/menu/">Menu</a>
                                                                    </li>
                                                                    <li id="menu-item-883" class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                        <a href="https://kinsley.bslthemes.com/restaurant/">Restaurant</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3434754" data-id="3434754" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-72e37b0 elementor-widget elementor-widget-kinsley-footer-gallery" data-id="72e37b0" data-element_type="widget" data-widget_type="kinsley-footer-gallery.default">
                                                            <div class="elementor-widget-container">
                                                                <h4>
                                                                    <span>Instagram </span>
                                                                </h4>
                                                                <div class="footer-insta">
                                                                    <a href="https://www.instagram.com/p/CYAVMTDsb6x/" target="_blank">
                                                                        <noscript>
                                                                            <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1-140x140.jpg" alt="Image #1"/>
                                                                        </noscript>
                                                                        <img class="lazyload" decoding="async" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1-140x140.jpg" alt="Image #1"/>
                                                                    </a>
                                                                    <a href="https://www.instagram.com/p/CYAVQXRsWxB/" target="_blank">
                                                                        <noscript>
                                                                            <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2-140x140.jpg" alt="Image #2"/>
                                                                        </noscript>
                                                                        <img class="lazyload" decoding="async" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2-140x140.jpg" alt="Image #2"/>
                                                                    </a>
                                                                    <a href="https://www.instagram.com/p/CYAVSkwMjZM/" target="_blank">
                                                                        <noscript>
                                                                            <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3-140x140.jpg" alt="Image #3"/>
                                                                        </noscript>
                                                                        <img class="lazyload" decoding="async" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3-140x140.jpg" alt="Image #3"/>
                                                                    </a>
                                                                    <a href="https://www.instagram.com/p/CYAVUG8s5ER/" target="_blank">
                                                                        <noscript>
                                                                            <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4-140x140.jpg" alt="Image #4"/>
                                                                        </noscript>
                                                                        <img class="lazyload" decoding="async" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4-140x140.jpg" alt="Image #4"/>
                                                                    </a>
                                                                    <a href="https://www.instagram.com/p/CYAVVmVsN7b/" target="_blank">
                                                                        <noscript>
                                                                            <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5-140x140.jpg" alt="Image #5"/>
                                                                        </noscript>
                                                                        <img class="lazyload" decoding="async" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5-140x140.jpg" alt="Image #5"/>
                                                                    </a>
                                                                    <a href="https://www.instagram.com/p/CYAVXIIMZDl/" target="_blank">
                                                                        <noscript>
                                                                            <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6-140x140.jpg" alt="Image #6"/>
                                                                        </noscript>
                                                                        <img class="lazyload" decoding="async" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6-140x140.jpg" alt="Image #6"/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section class="elementor-section elementor-inner-section elementor-element elementor-element-5d064c0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5d064c0" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                            <div class="elementor-container elementor-column-gap-default">
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b6e696b" data-id="b6e696b" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-f29bce8 elementor-widget elementor-widget-text-editor" data-id="f29bce8" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div class="elementor-widget-container">
                                                                <p>© 2023 Kinsley. All Rights Reserved.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d68c867" data-id="d68c867" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-8517c6f elementor-widget elementor-widget-text-editor" data-id="8517c6f" data-element_type="widget" data-widget_type="text-editor.default">
                                                            <div class="elementor-widget-container">
                                                                <p>
                                                                    Developed by: <a href="https://bslthemes.com/">bslthemes Team</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
            
        </div>
       
        <div class="knsl-popup-frame knsl-popup-frame-2" id="booknow">
            <div class="knsl-book-form knsl-book-form-v knsl-book-popup">
                <span class="knsl-close-popup">+</span>
                <h2 class="knsl-mb-40">Search your Room</h2>
                <div class="mphb_sc_search-wrapper &#039;&quot;">
                    <form method="GET" class="mphb_sc_search-form" action="https://kinsley.bslthemes.com/search-results/">
                        <p class="mphb-required-fields-tip">
                            <small>
                                Required fields are followed by <abbr title="required">*</abbr>
                            </small>
                        </p>
                        <p class="mphb_sc_search-check-in-date">
                            <label for="mphb_check_in_date-mphb-search-form-66f23cac0336a">
                                Check-in <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                            </label>
                            <br/>
                            <input id="mphb_check_in_date-mphb-search-form-66f23cac0336a" data-datepick-group="mphb-search-form-66f23cac0336a" value="" placeholder="Check-in Date" required="required" type="text" name="mphb_check_in_date" class="mphb-datepick" autocomplete="off" inputmode="none"/>
                        </p>
                        <p class="mphb_sc_search-check-out-date">
                            <label for="mphb_check_out_date-mphb-search-form-66f23cac0336a">
                                Check-out <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                            </label>
                            <br/>
                            <input id="mphb_check_out_date-mphb-search-form-66f23cac0336a" data-datepick-group="mphb-search-form-66f23cac0336a" value="" placeholder="Check-out Date" required="required" type="text" name="mphb_check_out_date" class="mphb-datepick" autocomplete="off" inputmode="none"/>
                        </p>
                        <p class="mphb_sc_search-adults">
                            <label for="mphb_adults-mphb-search-form-66f23cac0336a">Adults </label>
                            <br/>
                            <select id="mphb_adults-mphb-search-form-66f23cac0336a" name="mphb_adults">
                                <option value="1" selected='selected'>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                            </select>
                        </p>
                        <p class="mphb_sc_search-children">
                            <label for="mphb_children-mphb-search-form-66f23cac0336a">Children </label>
                            <br/>
                            <select id="mphb_children-mphb-search-form-66f23cac0336a" name="mphb_children">
                                <option value="0" selected='selected'>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </p>
                        <input id="mphb_check_in_date-mphb-search-form-66f23cac0336a-hidden" value="" type="hidden" name="mphb_check_in_date"/>
                        <input id="mphb_check_out_date-mphb-search-form-66f23cac0336a-hidden" value="" type="hidden" name="mphb_check_out_date"/>
                        <p class="mphb_sc_search-submit-button-wrapper">
                            <button type="submit" class="button knsl-btn">Search</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
       
        <div class="knsl-popup-frame knsl-popup-frame-2" id="table-reservation">
            <div class="knsl-book-form knsl-book-form-v knsl-book-popup">
                <span class="knsl-close-popup">+</span>
                <h2 class="knsl-mb-40">Table Reservation</h2>
                <form method="get" class="knsl-opentable-form" action="//www.opentable.com/restaurant-search.aspx" target="_blank">
                    <div class="row">
                        <div class="col-12 form-group">
                            <select id="reservation_party" name="partySize">
                                <option value="1">1 Person</option>
                                <option value="2" selected="selected">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="6">6 People</option>
                                <option value="7">7 People</option>
                                <option value="8">8 People</option>
                                <option value="9">9 People</option>
                                <option value="10">10 People</option>
                                <option value="11">11 People</option>
                                <option value="12">12 People</option>
                                <option value="13">13 People</option>
                                <option value="14">14 People</option>
                                <option value="15">15 People</option>
                                <option value="16">16 People</option>
                                <option value="17">17 People</option>
                                <option value="18">18 People</option>
                                <option value="19">19 People</option>
                                <option value="20">20 People</option>
                                <option value="21">Larger party</option>
                            </select>
                        </div>
                        <div class="col-12 form-group">
                            <input id="reservation_date" name="startDate" type="date" value="2024-06-28" placeholder="Date"/>
                        </div>
                        <div class="col-12 form-group">
                            <select id="reservation_time" name="ResTime">
                                <option value="8:00am">8:00 am</option>
                                <option value="8:30am">8:30 am</option>
                                <option value="9:00am">9:00 am</option>
                                <option value="9:30am">9:30 am</option>
                                <option value="10:00am">10:00 am</option>
                                <option value="10:30am">10:30 am</option>
                                <option value="11:00am">11:00 am</option>
                                <option value="11:30am">11:30 am</option>
                                <option value="12:00pm">12:00 pm</option>
                                <option value="12:30pm">12:30 pm</option>
                                <option value="1:00pm">1:00 pm</option>
                                <option value="1:30pm">1:30 pm</option>
                                <option value="2:00pm">2:00 pm</option>
                                <option value="2:30pm">2:30 pm</option>
                                <option value="3:00pm">3:00 pm</option>
                                <option value="3:30pm">3:30 pm</option>
                                <option value="4:00pm">4:00 pm</option>
                                <option value="4:30pm">4:30 pm</option>
                                <option value="5:00pm">5:00 pm</option>
                                <option value="5:30pm">5:30 pm</option>
                                <option value="6:00pm">6:00 pm</option>
                                <option value="6:30pm">6:30 pm</option>
                                <option value="7:00pm" selected="selected">7:00 pm</option>
                                <option value="7:30pm">7:30 pm</option>
                                <option value="8:00pm">8:00 pm</option>
                                <option value="8:30pm">8:30 pm</option>
                                <option value="9:00pm">9:00 pm</option>
                                <option value="9:30pm">9:30 pm</option>
                                <option value="10:00pm">10:00 pm</option>
                                <option value="10:30pm">10:30 pm</option>
                                <option value="11:00pm">11:00 pm</option>
                                <option value="11:30pm">11:30 pm</option>
                            </select>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="knsl-btn" type="submit" name="button">Reserve a table</button>
                        <p class="knsl-powered pt-3">
                            * Powered by 
                            <noscript>
                                <img src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/opentable.svg" alt="Powered by OpenTable"/>
                            </noscript>
                            <img class="lazyload" src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E' data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/opentable.svg" alt="Powered by OpenTable"/>
                        </p>
                    </div>
                    <input type="hidden" name="RestaurantID" class="RestaurantID" value="108955"/>
                    <input type="hidden" name="rid" class="rid" value="108955"/>
                    <input type="hidden" name="GeoID" class="GeoID" value="15"/>
                    <input type="hidden" name="txtDateFormat" class="txtDateFormat" value="yyyy-mm-dd"/>
                    <input type="hidden" name="RestaurantReferralID" class="RestaurantReferralID" value="108955"/>
                    <input type="hidden" name="lang" class="lang" value="en-US"/>
                </form>
            </div>
        </div>
        <ScrollButton/>
    </div>
  )
}
