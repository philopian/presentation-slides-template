# Presentation Slides

```
$ npm install
$ npm start
```

- `src/index.js` contains reveal.js config and themes
- [docs here](https://github.com/hakimel/reveal.js/)
- Add your slides to the index.html file
  ```html
  <section id="page-01">
    <h2>Hello</h2>
    <h4>slides!</h4>
    <p>
      <i class="fa fa-child" />
    </p>
  </section>
  ```

- nested slides
  ```html
  <section>
    <section>
      <h2>Nested Slides</h2>
      <p>One</p>
    </section>
    <section>
      <h2>Nested Slides</h2>
      <p>Two</p>
    </section>
    <section>
      <h2>Nested Slides</h2>
      <p>Three</p>
    </section>
  </section>
  ```

- fragments
  ```html
  <section>
    <h2>Fragments</h2>
    <ul>
      <li class="fragment highlight-blue">
        One
      </li>
      <li class="fragment highlight-blue">
        Two
      </li>
      <li class="fragment highlight-blue">
        Three
      </li>
    </ul>
  </section>
  ```