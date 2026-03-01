// Main site JS
function copyEmail() {
    navigator.clipboard.writeText('hello@digitize.com.pk');
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.classList.remove('translate-y-20', 'opacity-0');
    // hide after 3s
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Expose to global scope for inline handlers
window.copyEmail = copyEmail;
