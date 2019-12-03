<template>
    <div class="footer">
        <footer>
            <nav class="mx-auto">
                <div class="logo flex items-center">
                    <img
                        src="@/assets/icons/logo.svg"
                        height="128"
                        alt="logo"
                    />
                </div>
                <div class="bot pt2">
                    <h4 class="h4 m0">Bot</h4>
                    <ul class="list-reset">
                        <li class="pt1">
                            <router-link to="/commands">Commands</router-link>
                        </li>
                        <li class="pt1">
                            <router-link to="/donate">Donate</router-link>
                        </li>
                        <li class="pt1">
                            <a
                                target="_blank"
                                href="https://vocality-web-dashboard.kaindl745.now.sh/"
                                >Web Dashboard</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="resources pt2">
                    <h4 class="h4 m0">Resources</h4>
                    <ul class="list-reset">
                        <li class="pt1">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <li class="pt1">
                            <router-link to="/faq">FAQ</router-link>
                        </li>
                        <li class="pt1">
                            <router-link to="/commands">Support</router-link>
                        </li>
                    </ul>
                </div>
                <div class="team pt2">
                    <h4 class="h4 m0">Team</h4>
                    <ul class="list-reset">
                        <li class="pt1">
                            <router-link to="/members">Members</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    </div>
</template>

<script></script>

<style scoped lang="scss">
footer {
    text-align: left;
    background-color: clr(background, secondary);
    box-shadow: 0 -2px 20px 2px #00000060;
    // margin-top: 128px;
    nav {
        $col-width: 130px;
        max-width: 1040px;
        padding: 60px 20px;
        display: grid;
        grid-template-areas:
            'logo bot . . .'
            'logo resources . . .'
            'logo team . . . ';
        grid-gap: 32px;
        @include mq(sm) {
            grid-template-areas:
                'logo bot resources . .'
                'logo team . . .';
        }
        @include mq(md) {
            grid-template-areas: 'logo bot resources team .';
        }
    }

    .logo {
        grid-area: logo;
    }

    .bot {
        grid-area: bot;
    }

    .resources {
        grid-area: resources;
    }

    .team {
        grid-area: team;
    }

    ul a {
        color: clr(text, secondary);
        &:hover,
        &:focus {
            color: clr(text);
        }
    }
}
</style>
