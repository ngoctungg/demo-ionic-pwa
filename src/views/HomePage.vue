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
        <ion-button router-link="/demoCameraPreview" router-direction="forward"
          >CameraPreview</ion-button
        >
        <ion-button router-link="/democamera" router-direction="forward"
          >Get Photo</ion-button
        >
        <ion-button @click="callNativeEx()">Call native</ion-button>
        <ion-button @click="nativeCallback()">Native callback</ion-button>
        <ion-toast
          :is-open="isOpenRef"
          message="Your settings have been saved."
          :duration="2000"
          @didDismiss="setOpen(false)"
        >
        </ion-toast>
        <input
          type="file"
          id="my_file"
          @change="onFileChange"
          name="file"
          accept="image/*"
          capture
          hidden
        />
        <img v-if="url" :src="url" />
        <ion-item>
          <ion-label position="fixed">Fixed Label</ion-label>
          <ion-input v-model="msg" id="msgion"></ion-input>
        </ion-item>
      </div>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="actionClickInput()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
  IonInput,
  IonItem,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { camera } from "ionicons/icons";
import Bridge from "../../src/utils/bridge";

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
    IonInput,
    IonItem,
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = state);
    window.showSum = function showSum(a) {
      document.getElementById("msgion").value = a;
    };
    return { isOpenRef, setOpen, camera, };
  },
  data() {
    return {
      url: "",
      msg: "",
    };
  },
  methods: {
    actionClickInput() {
      document.getElementById("my_file").click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      console.log(file);
    },
    callNativeEx() {
      //  alert("Call");
      Bridge.callNative(this.msg,'nvShowToast');
    },
    nativeCallback() {
      //  alert("Call");
      Bridge.callNative(this.msg,'sum');
    },
  },
});
/* eslint-disable */
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
