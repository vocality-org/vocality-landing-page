<script>
    import Navbar from '../components/Navbar.svelte';

    setTimeout(() => {
        svgSetup();
        const searchElement = document.getElementById('search-field');
        searchElement.focus();
        const span = document.getElementById('search-field-helper');

        // checks length of character in the span helper and calculates the new width based on the spans width
        const resizeForText = (text) => {
            if (!text.trim()) {
                text = searchElement.getAttribute('placeholder').trim();
                showSearchIcon();
            } 
            else {
                hideSearchIcon();
            }
            span.innerHTML = text;
            searchElement.style.width = window.getComputedStyle(span).width;
        }

        // listen on keydown and react to all characters
        searchElement.addEventListener('keypress', (char) => {
            if (char.which && char.charCode) {
                const newChar = String.fromCharCode(char.keyCode | char.charCode);
                resizeForText(searchElement.value + newChar);
            }
        });
        // listen to keyup and react to backspace and del
        searchElement.addEventListener('keyup', (char) => {
            if (char.keyCode === 8 || char.keyCode === 46) {
                resizeForText(searchElement.value);
            }
        });

        // set initial width based on placeholder
        resizeForText('');
    }, 0);

    const hideSearchIcon = () => {
        document.getElementsByClassName('search-icon')[0].style.display = 'none';
    }

    const showSearchIcon = () => {
        document.getElementsByClassName('search-icon')[0].style.display = 'block';
    }

    const svgSetup = () => {
        const body = document.getElementsByTagName('body')[0];
        const bodyHeight = window.getComputedStyle(body).height;
        document.getElementsByClassName('bg-svg')[0].style.height = bodyHeight;
    }

    function setActive(event) {
        const tabs = [...document.getElementsByClassName('tab')];
        tabs.forEach(t => {
            t.classList.remove('active');       
        });
        event.target.classList.add('active');
    }
</script>

<style lang="scss">
    // SEARCH FIELD
    // -------------------------------------------
    .search {
        height: 116px;
        .search-icon {
            height: 36px;
            margin: auto 8px;
        }
        input, span {
            font-size: 36px;
            line-height: 36px;
            white-space: pre;
            background-color:  transparent;
            color: var(--text-primary);

            &::placeholder {
                color: var(--text-secondary);
            }
        }
        span {
            // display: none; 
            // (width is auto on display none elements when using computedStyle)
            visibility: hidden;
            position: absolute;
            z-index: -1;
            user-select: none;
        }
    }

    @media (max-width: 40em) {
        .search {
            .search-icon {
                height: 24px;
            }
            input, span {
                font-size: 24px;
                line-height: 24px;
            }
        }
    }

    /* clears the 'X' from Internet Explorer */
    input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

    // LIST
    // ------------------------------------------
    .list-container {
        background-color: var(--body-background);
        height: 1000px;
        .tabs {
            height: 36px;
            margin-top: -18px;
            .tab {
                font-size: var(--footer-font-size);
                line-height: 28px;
                background-color: var(--body-background);
                border-radius: 18px;
                border: 4px solid transparent;
                width: 180px;
                text-align: center;
                cursor: pointer;
                transition: box-shadow 0.15s linear;
                &:hover {
                    background-color: var(--footer-background);
                }
            }
            .active {
                box-shadow: 0 0 0 4px var(--brand-cyan);
                // blurred shadow version
                // box-shadow: 0 0 10px 4px var(--brand-cyan);
            }
        }
    }

    @media (max-width: 40em) {
        .tabs {
            display: none !important;
        }
    }

    // BACKGROUND SVG
    // -------------------------------------------
    .bg-svg {
        position: absolute;
        z-index: -1;
        top: 0;
        height: 100%;
    }
</style>

<Navbar/>

<div class="search flex justify-center pt4 pb2">
    <img src="../assets/search.svg" alt="search" class="search-icon">
    <input type="search" placeholder="Search Commands..." name="search" contenteditable="true" autocomplete="off"
        maxlength="48" id="search-field" class="border-none">
    <span id="search-field-helper"></span>
</div>

<div class="list-container flex col-10 mt4 mx-auto">
    <div class="tabs mx-auto flex">
        <div class="mx2 tab" on:click={setActive}>Music</div>
        <div class="mx2 tab active" on:click={setActive}>All</div>
        <div class="mx2 tab" on:click={setActive}>General</div>
    </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none" viewBox="0 0 1920 2524"
    preserveAspectRatio="none" class="bg-svg">
    <rect width="727.426" height="4670.24" fill="#FF3F60"
        transform="matrix(-0.311873 -0.950124 0.936184 -0.35151 -950.606 3105.51)" />
    <rect width="727.426" height="4670.24" fill="#0C003F"
        transform="matrix(-0.311873 -0.950124 0.936184 -0.35151 -1155.87 2407.65)" />
    <rect width="727.426" height="4670.24" fill="#29ABE2"
        transform="matrix(-0.311873 -0.950124 0.936184 -0.35151 -1361.14 1709.78)" />
</svg>
