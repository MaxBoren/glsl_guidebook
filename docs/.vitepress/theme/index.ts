import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './styles/vars.css'
import './styles/custom.css'
import GlslEditor from './components/GlslEditor.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('GlslEditor', GlslEditor)
  }
}