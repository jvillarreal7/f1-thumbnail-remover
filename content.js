const observer = new MutationObserver(() => {
    document.querySelectorAll('img.img-loaded').forEach((thumbnail) => {
        thumbnail.src = '';
        thumbnail.srcset = '';
    });
});

observer.observe(document.body, { childList: true, subtree: true });
