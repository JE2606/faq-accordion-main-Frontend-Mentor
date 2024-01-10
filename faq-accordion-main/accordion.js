document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('details');

    details.forEach(detail => {
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                details.forEach(item => {
                    if (item !== detail && item.open) {
                        item.open = false;
                    }
                });
            }
        });
    });
});
