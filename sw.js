// استماع لحدث التنبيه (Push)
self.addEventListener('push', function(event) {
    let data = { title: 'تنبيه المصلحة', body: 'وقت مراجعة جدول اليوم!' };
    if (event.data) {
        data = event.data.json();
    }

    const options = {
        body: data.body,
        icon: 'logo.png', // تأكد من وجود صورة بهذا الاسم لاحقاً
        badge: 'logo.png',
        vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110],
        data: { url: 'alarm.html' }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// فتح التطبيق عند الضغط على التنبيه
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
