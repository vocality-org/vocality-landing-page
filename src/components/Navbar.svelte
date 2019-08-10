<script>

</script>

<style lang="scss">
header {
    background-color: transparent;
    height: var(--nav-bar-height);

    li > a {
        color: var(--text-secondary);
        font-size: var(--navbar-text-font-size);
        font-weight: 900;
        position: relative;
        transition: color 0.3s ease;

        &::after {
            content: "";
            display: block;
            position: absolute;
            height: 4px;
            width: 0;
            background-color: var(--brand-pink);
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.3s ease;
        }

        &:hover, 
        &:focus {
            color: var(--text-primary);
            &::after {
                width: 30%;
            }
        }
    }
}
</style>

<header class="flex py1 px3">
    <div class="icon flex">
        <img src="../assets/logo.svg" alt="vocality-logo" class="my-auto">
    </div>
    <div class="flex-auto"></div>
    <nav class="hide-on-sm">
        <ul class="list-reset flex items-center m0 h-100">
            <li>
                <a href="commands" class="text-decoration-none px3">Commands</a>
            </li>
            <li>
                <a href="faq" class="text-decoration-none px3">FAQ</a>
            </li>
            <li>
                <a href="about" class="text-decoration-none px3">About</a>
            </li>
        </ul>
    </nav>
</header>