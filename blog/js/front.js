window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        console.log("test")
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}