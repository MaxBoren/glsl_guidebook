<template>
    <div id="glsl_editor">
    </div>
</template>

<script lang="ts" setup>
    import { reactive, toRefs, onMounted, onBeforeUnmount } from 'vue'
    
    
    // 定义属性
    const props = defineProps({
      dataList: {
        type: Array,
        default: () => []
      }
    })
    
    onMounted(() => {
        const glslEditor = new GlslEditor('#glsl_editor', { 
            canvas_size: 500,
            canvas_draggable: true,
            theme: 'monokai',
            multipleBuffers: true,
            watchHash: true,
            fileDrops: true,
            menu: true
        });
        var text = `#ifdef GL_ES
        precision mediump float;
        #endif

        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;

        void main() {
            vec2 st = gl_FragCoord.xy/u_resolution.xy;
            st.x *= u_resolution.x/u_resolution.y;

            vec3 color = vec3(0.000,0.000,0.000);
            color = vec3(st.x,st.y,abs(sin(u_time)));

            gl_FragColor = vec4(color,1.440);
        }`
        glslEditor.editor.doc.setValue(text)
    })
    
    onBeforeUnmount(() => {
    })
</script>