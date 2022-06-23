<template>
  <b-navbar toggleable="md" type="dark" variant="primary" sticky>
    <b-navbar-brand to="/">Visual Computing</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav class="float-left">
      <b-navbar-nav>
        <b-nav-item to="/visual-illusions">Visual Illusions</b-nav-item>
        <b-nav-item to="/scene-trees">Scene Trees</b-nav-item>
        <b-nav-item to="/antialiasing">Anti-aliasing</b-nav-item>
        <b-nav-item-dropdown text="Shaders" right>
          <b-dropdown-header>Applications</b-dropdown-header>
          <b-dropdown-item to="/shaders">Coloring</b-dropdown-item>
          <b-dropdown-item to="/shaders">Texturing</b-dropdown-item>
          <b-dropdown-item to="/shaders">Image processing</b-dropdown-item>
          <b-dropdown-item to="/shaders">Procedural texturing</b-dropdown-item>
          <b-dropdown-divider/>
          <b-dropdown-header>Unity</b-dropdown-header>
          <b-dropdown-item to="/shaders">Unity WEBGL</b-dropdown-item>
          <b-dropdown-item to="/shaders">Shader in unity</b-dropdown-item>
          <b-dropdown-item to="/shaders">Shader graph</b-dropdown-item>
        </b-nav-item-dropdown>
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

<style >
li .dropdown-menu{
  background-color: #1e1e1e !important;
}
li .dropdown-menu a{
  color: rgba(255, 255, 255, 0.5) !important;
  background-color: #1e1e1e !important;
}
li .dropdown-menu a:hover{
  color: rgba(255, 255, 255, 1) !important;
  background-color: #1e1e1e !important;
}
</style>
