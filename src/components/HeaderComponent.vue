<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Visual Computing</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav />
      <b-navbar-nav>
        <b-nav-item to="/visual-illusions">Visual Illusions</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item href="https://github.com/rcalvom/visual-computing-workshop"><b-icon-github/></b-nav-item>
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

<style scoped>
.navbar {
  padding: 1em;
  white-space: pre;
  background-color: #1f2a42 !important;
}
.navbar .navbar-nav .nav-link {
  letter-spacing: 0.5px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
</style>
