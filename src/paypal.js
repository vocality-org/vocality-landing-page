const sdkUrl = 'https://www.paypal.com/sdk/js?client-id=';

export default class Paypal {
    static setup(callback) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = callback;

        if (process.env.NODE_ENV === 'production') {
            script.src = `${sdkUrl}Ac_VG0aFSUTEqCXUI7g4bstecPNJa1a7LSLwfaIHgZPTtJXk8e3549YcOQbpuayhBJBF170lwvdTvKnH`;
        } else {
            script.src = `${sdkUrl}Ac_VG0aFSUTEqCXUI7g4bstecPNJa1a7LSLwfaIHgZPTtJXk8e3549YcOQbpuayhBJBF170lwvdTvKnH`;
        }

        document.head.appendChild(script);
    }
}
