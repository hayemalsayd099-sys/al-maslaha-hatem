function shareApp() {
    console.log("تم الضغط على زر المشاركة"); // دي عشان نعرف لو الزرار شغال أصلاً
    
    if (navigator.share) {
        navigator.share({
            title: 'تطبيق المصلحة',
            text: 'دليلك الشامل لإدارة مزرعتك وحساباتك بكل سهولة.',
            url: window.location.href 
        })
        .then(() => console.log('تمت المشاركة بنجاح'))
        .catch((error) => console.log('خطأ:', error));
    } else {
        alert('المتصفح لا يدعم المشاركة التلقائية، سيتم نسخ الرابط.');
        navigator.clipboard.writeText(window.location.href);
    }
}
