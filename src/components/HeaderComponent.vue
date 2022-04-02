<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-brand to="/">Visual Computing</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav class="float-left">
      <b-navbar-nav>
        <b-nav-item to="/visual-illusions">Visual Illusions</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-b-tooltip.hover title="Github Repository" href="https://github.com/rcalvom/visual-computing-workshop"><b-icon-github/></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
};
</script>
