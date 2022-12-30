scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0 
    });
    console
}

document.getElementById("tentang-button").addEventListener('click', () => {
    scrollTo(document.getElementById("content-1"));
});
document.getElementById("tema-button").addEventListener('click', () => {
    scrollTo(document.getElementById("content-2"));
});
document.getElementById("narasumber-button").addEventListener('click', () => {
    scrollTo(document.getElementById("content-3"));
});
document.getElementById("tentang-button").addEventListener('click', () => {
    scrollTo(document.getElementById("content-1"));
});

sc