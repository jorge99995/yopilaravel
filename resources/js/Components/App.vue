<template>
    <div class="main-wrapper">
        <div class="header">
            <Navbar></Navbar>
            <Aside></Aside>
            <div class="page-wrapper">
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./Plantilla/Navbar";
import Aside from "./Plantilla/Aside";

export default {
    components: {
        Navbar,
        Aside,
    },
};
</script>
