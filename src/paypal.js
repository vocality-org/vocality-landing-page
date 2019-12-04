const sdkUrl = 'https://www.paypal.com/sdk/js?client-id=';

export default class Paypal {
    static setup(callback) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = callback;

        if (process.env.NODE_ENV === 'production') {
            // the value of this env variable is only set in the now build process
            // to test locally add it to a .env.local file and set NODE_ENV to production
            script.src = `${sdkUrl}${process.env.VUE_APP_PAYPAL_LIVE_CLIENT_ID}`;
        } else {
            script.src = `${sdkUrl}${process.env.VUE_APP_PAYPAL_SANBOX_CLIENT_ID}`;
        }

        document.head.appendChild(script);
    }
}
