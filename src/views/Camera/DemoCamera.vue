<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Page Two</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="mx-0 my-0">
      <div class="container" id="cameraPreview">
        <!-- image -->
        &nbsp;
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
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
  IonButtons,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { CameraPreview } from "@capacitor-community/camera-preview";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonFooter,
    IonButtons,
    IonToolbar,
  },
  mounted() {
    CameraPreview.start({
      parent: "cameraPreview",
      position: "rear",
    });
  },
});
</script>

<style>
.container {
  height: 100%;
  background-color: rgb(255, 0, 255);
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