<script>
    export let open = false;
    let sidenav;
    setTimeout(() => {
        sidenav = document.getElementById('side-navigation');
    }, 0);
</script>

<style lang="scss">
    #side-navigation:target {
        width: 40%;
    }

    #side-navigation:target + .page-wrap {
        margin-right: 40%;

        .open-menu {
            display: none;
        }

        .close-menu {
            display: flex;
        }
    }

    .sidenav {
        width: 0; 
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        transition: width 0.3s ease;
        background-color: var(--footer-background);

        a {
            height: 48px;
            line-height: 48px;
            &:hover,
            &:focus
            {
                background-color: var(--brand-pink);
            }
        }
    }
</style>

<nav id="side-navigation" class="sidenav show-on-sm">
    <ul class="list-reset flex-column">
        <li>
            <a href="commands" class="text-decoration-none block h-100 pl2">Commands</a>
        </li>
        <li>
            <a href="faq" class="text-decoration-none block h-100 pl2">FAQ</a>
        </li>
        <li>
            <a href="about" class="text-decoration-none block h-100 pl2">About</a>
        </li>
    </ul>
</nav>

