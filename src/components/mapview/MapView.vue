<script lang="ts" src="./MapView.ts"></script>
<!-- para conectar el otro archivo con este-->

<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor...</h3>
      <span>Localizando...</span>
    </div>
  </div>
  <div
    v-show="isUserLocationReady"
    class="map-container"
    ref="mapElement"
  ></div>
</template>

<style scoped>
.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
  color: white;
}
.map-container {
  height: 100vh;
  position: fixed;
  width: 100vw;
}
.marker {
  background-image: url('../../../public/mapbox-icon.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
