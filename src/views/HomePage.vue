<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
            >UI Components</a
          >
        </p>
        <ion-button @click="setOpen(true)">Show Toast</ion-button>
        <ion-button @click="takePicture()">Take picture</ion-button>
        <ion-toast
          :is-open="isOpenRef"
          message="Your settings have been saved."
          :duration="2000"
          @didDismiss="setOpen(false)"
        >
        </ion-toast>

        <div id="preview" class="cameraPreview"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToast,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
// import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import {
  CameraPreview,
  // CameraPreviewOptions,
} from "@capacitor-community/camera-preview";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonToast,
    IonButton,
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
  methods: {
    async takePicture() {
      // const image = await Camera.getPhoto({
      //   quality: 90,
      //   allowEditing: true,
      //   resultType: CameraResultType.Uri,
      //   source: CameraSource.Camera,
      // });

      // this.myImage = image.webPath;
      const cameraPreviewOptions = {
        position: "rear",
        // height: 1920,
        // width: 1080,
        parent:"preview",
        class:"cameraPreview"
      };
      CameraPreview.start(cameraPreviewOptions);
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
