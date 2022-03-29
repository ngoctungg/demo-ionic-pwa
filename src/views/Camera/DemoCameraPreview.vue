<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Page Two</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="mx-0 my-0" id="cameraPreviewContainer">
      <div class="container" id="cameraPreview"></div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button fill="solid" @click="clickBtnFlip()"> Change </ion-button>
        </ion-buttons>
        <ion-title>Footer</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="solid" @click="clickBtnStop()"> Stop </ion-button>
        </ion-buttons>
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
  IonButtons,
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
    IonButtons,
  },
  data() {
    return {
      cameraPosition: "front",
    };
  },
  ionViewDidEnter() {
    console.log("Home page  ionViewDidEnter");
    CameraPreview.stop()
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
    CameraPreview.start({
      parent: "cameraPreview",
      position: "front",
      disableAudio: true,
      toBack: true,
      enableHighResolution: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
  ionViewDidLeave() {
    console.log("Home page did leave");
    CameraPreview.stop()
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
    // if (document.getElementById("cameraPreview")) {
    //   document.getElementById("cameraPreview").remove();
    // }
  },
  ionViewWillEnter() {
    console.log("Home page  ionViewWillEnter");

    CameraPreview.stop()
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
    this.cameraPosition = "front";
    // if (document.getElementById("cameraPreviewContainer")) {
    //   const div = document.createElement("div");
    //   div.id = "cameraPreview";
    //   div.classList.add("container");
    //   document.getElementById("cameraPreviewContainer").appendChild(div);
    // }
  },
  ionViewWillLeave() {
    console.log("Home page will leave");
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
        toBack: true,
        enableHighResolution: true,
      });
    },
    clickBtnStop() {
      CameraPreview.stop()
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
      console.log("stop");
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