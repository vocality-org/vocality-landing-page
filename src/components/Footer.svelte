<script>
</script>

<style lang="scss">
    footer {
        background-color: var(--footer-background);
        font-size: var(--footer-font-size);
        box-shadow: 0 -2px 20px 2px #00000060;
        margin-top: 128px;

        ul a {
            color: var(--text-secondary);
            &:hover, &:focus {
                color: var(--text-primary);
            }
        }

        li  {
            text-align: center;
            min-width: 80px;
        }

        @media (max-width: 40em) {
            ul {
                flex-direction: column;
                li {
                    padding: 8px 0;
                }
            }
        }
    }
</style>

<footer>
    <div class="flex justify-center py3">
        <nav>
            <ul class="list-reset flex items-center">
                <li class="px3">
                    <a href="commands" class="text-decoration-none h5">Commands</a>
                </li>
                <li class="px3">
                    <a href="donate" class="text-decoration-none h5">Donate</a>
                </li>
                <li class="px3">
                    <a href="support" class="text-decoration-none h5">Support</a>
                </li>
                <li class="px3">
                    <a href="faq" class="text-decoration-none h5">FAQ</a>
                </li>
                <li class="px3">
                    <a href="about" class="text-decoration-none h5">About</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="flex justify-center" style="padding-bottom: 48px">
        <img src="assets/logo.svg" width="42" height="42" alt="vocality-logo">
    </div>
</footer>