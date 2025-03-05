import React, { Component } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "./Content";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 20vw auto;
  background-color: var(--themeDark);

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;

    .layout-first {
      display: none;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    grid-template-columns: 1fr;

    .layout-first {
      display: none;
    }
  }
`;

export default class Layout extends Component {
  render() {
    const { slug, url, color, title } = this.props;

    return (
      <LayoutWrapper>
        <div className="layout-first">
          <Sidebar slug={slug} url={url} color={color} />
        </div>
        <div className="layout-second">
          <Content slug={slug} url={url} title={title} color={color} />
        </div>
      </LayoutWrapper>
    );
  }
}
