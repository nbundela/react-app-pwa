// import webpush from 'web-push'
// const vapidKeys = webpush.generateVAPIDKeys();

export default function swDev() {
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
          .replace(/-/g, '+')
          .replace(/_/g, '/');
       
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
       
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    function determineAPPServerKey() {
        return urlBase64ToUint8Array('BMyXHTun1S8M5ZC5Dd2GvQC5ttmK708jJYA57NQ6PQoUsDtThPmkw0-G1bt0pvdU6sMEtBVOz9w7aop6eydHq7g');
    }

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((resp) => {
        console.warn("response----",resp);
        return resp.pushManager.getSubscription()
        .then(function(subs){
            resp.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: determineAPPServerKey()
            })
        })
    });
}