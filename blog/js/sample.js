const buttonDarkMode = () => {
    const button = document.querySelector('div[aria-label="dark mode button"]');
    button.addEventListener('click', (e) => {
        document.body.classList.toggle('dark');
    })
}

const sideNav = () => {
    const button = document.querySelector('div[aria-label="side navigation"]');
    button.addEventListener('click', (e) => {
        const element = document.querySelector('body > header');
        const buttonMask = element.querySelector('nav > div:last-child > span');
        const toggle = document.body.classList.toggle('side');
        const mask = element.querySelector('nav > div:last-child');
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const tabIndex = mask.querySelectorAll('[tabindex]');

        const isFalseToggle = (element, tabIndex, buttonMask) => {
            element.style.marginInlineEnd = '';
            tabIndex.forEach(element => {
                element.setAttribute('tabindex', '0');
            });
            document.body.classList.add('off');
            setTimeout(() => {
                document.body.classList.remove('off');
            }, 300);
            buttonMask.remove();
        }
        if (toggle) {
            if (document.body.offsetHeight > window.innerHeight)
                element.style.marginInlineEnd = `${rootFontSize}px`;

            tabIndex.forEach(element => {
                if (element.getAttribute('aria-label') !== 'side navigation') {
                    element.setAttribute('tabindex', '-1');
                }
            })
            mask.insertAdjacentHTML('beforeend', '<span></span>');
            const findMask = element.querySelector('nav > div:last-child > span');
            findMask.addEventListener('click', () => {
                document.body.classList.remove('side');
                isFalseToggle(element, tabIndex, findMask);
            });
        } else {
            isFalseToggle(element, tabIndex, buttonMask);
        }
    })
}

buttonDarkMode();
sideNav();