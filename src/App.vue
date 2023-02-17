<template>
  <div class="app">
    <h1>svelte-jsoneditor in Vue</h1>

    <p>
      <label>
        <input type="checkbox" v-model="showEditor" /> show JSON editor
      </label>
    </p>
    <p>
      <label> <input type="checkbox" v-model="readOnly" />Read only </label>
    </p>

    <h2>Editor</h2>
    <div class="my-editor">
      <VueJSONEditor
        v-if="showEditor"
        :content="content"
        :onChange="onChange"
        :readOnly="readOnly"
      />
    </div>

    <h2>Contents</h2>
    <pre><code>{{JSON.stringify(content, null, 2)}}</code></pre>
  </div>
</template>

<script>
import VueJSONEditor from "./components/VueJSONEditor.vue";
export default {
  name: "App",
  components: {
    VueJSONEditor,
  },
  data() {
    return {
      showEditor: true,
      readOnly: false,
      content: {
        json: {
          greeting: "Hello World",
          color: "#ff3e00",
          ok: true,
          values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        text: undefined,
      },
    };
  },
  methods: {
    onChange: function (content) {
      console.log("onChange", content);
      this.content = content;
    },
  },
};
</script>

<style>
.app {
  font-family: sans-serif;
}

.my-editor {
  width: 700px;
  height: 400px;
  display: flex;
}
</style>
