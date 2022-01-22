// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import React from "react";
import ReactDOM from "react-dom";
import Hello from "components/hello"

const container = document.querySelector("#hello");
if (container) {
  ReactDOM.render(
    React.createElement(Hello, { toWhat: container.dataset.toWhat }, null),
    container
  );
}
