import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Dev Docs',
    social: {
      github: 'https://github.com/avijit969'
    },
    sidebar: [{
      label: 'Javascript',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Introduction',
        slug: 'javascript/introduction'
      }, {
        label: 'Overview',
        slug: 'javascript/overview'
      }, {
        label: 'Running and Loading',
        slug: 'javascript/running_and_loading'
      }, {
        label: 'Basic',
        slug: 'javascript/basic'
      }, {
        label: 'Functions',
        slug: 'javascript/functions'
      }, {
        label: 'Objects',
        slug: 'javascript/objects'
      }, {
        label: 'DOM Manipulation',
        slug: 'javascript/dom_manipulation'
      }, {
        label: 'Asynchronous JavaScript',
        slug: 'javascript/asynchronous_javascript'
      }]
    }, {
      label: 'Python',
      autogenerate: {
        directory: 'python'
      }
    }]
  })],
  output: "server",
  adapter: netlify()
});