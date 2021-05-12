<template>
    <div class="row pt-3 d-flex">
        <div class="col-3 col-sm-2 pb-3 text-center align-self-center">
            <img src="../assets/tz_logo.png" class="img-fluid tz-logo" />
        </div>
        <div class="col d-none d-sm-block">

        </div>
        <div class="col-xl-5 col-9 col-sm-8 pb-3 text-center align-self-center">
            <h1 class="align-middle">
                Tomasz Zaj&#261;c - devblog
            </h1>
        </div>
        <div class="col-xl-4 col-12 px-0 align-self-end">
            <ul class="nav justify-content-end text-uppercase fw-bold">
                <li class="nav-item">
                    <a class="nav-link w-100 link-light" v-bind:class="{ active: path === '/'}" :aria-current="path === '/' ? 'page' : ''" href="/">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-light" v-bind:class="{ active: path === '/about'}" :aria-current="path === '/about' ? 'page' : ''" href="/about">
                        About me
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-light" v-bind:class="{ active: path === '/showcase'}" :aria-current="path === '/showcase' ? 'page' : ''" href="/showcase">
                        Showcase
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Header',
        data() {
            return {
                path: window.location.pathname
            }
        }
    });
</script>