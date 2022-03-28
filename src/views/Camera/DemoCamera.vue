<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Page Two</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="mx-0 my-0">
      <div class="container" id="cameraPreview">
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
        <ion-button shape="round" fill="outline" @click="clickBtnFlip()"
          >Change</ion-button
        >
        <ion-icon name="camera-reverse-sharp"></ion-icon>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonFooter,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { CameraPreview } from "@capacitor-community/camera-preview";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonFooter,
    IonToolbar,
    IonButton,
  },
  data() {
    return {
      cameraPosition: "front",
    };
  },
  mounted() {
    CameraPreview.stop();
    CameraPreview.start({
      parent: "cameraPreview",
      position: "front",
      disableAudio: true,
      enableHighResolution: true,
    });
  },
  beforeUnmount() {
    CameraPreview.stop();
    this.cameraPosition = "front";
  },
  unmounted() {
    console.log("unmounted");
    CameraPreview.stop();
    document.getElementById("cameraPreview").remove();
  },
  methods: {
    clickBtnFlip() {
      CameraPreview.stop();
      if (this.cameraPosition === "front") {
        this.cameraPosition = "rear";
      } else {
        this.cameraPosition = "front";
      }
      CameraPreview.start({
        parent: "cameraPreview",
        position: this.cameraPosition,
        disableAudio: true,
        enableHighResolution: true,
      });
    },
  },
});
</script>

<style>
.container {
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>