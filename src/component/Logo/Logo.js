import { Link } from "react-router-dom";

function Logo() {
    return <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ffc3c15"
        data-id="ffc3c15" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-6fc63e6 knsl-logo-frame elementor-widget elementor-widget-image"
                data-id="6fc63e6" data-element_type="widget" data-widget_type="image.default">
                <div class="elementor-widget-container">
                    <Link to="/home"> <img fetchpriority="high" decoding="async" width="399"
                        height="132"
                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                        class="attachment-full size-full wp-image-282" alt=""
                        srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png 399w, https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo-300x99.png 300w"
                        sizes="(max-width: 399px) 100vw, 399px" /> </Link>
                </div>
            </div>
        </div>
    </div>
}

export default Logo;