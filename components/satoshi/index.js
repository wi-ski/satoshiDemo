import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Button from "./button";
import Paywall from "./paywall";
import Content from "./content";

export default class extends React.Component {
  state = {
    data: false,
    price: this.props.price,
    type: this.props.type
  };

  purchase = () => {
    this.setState({ data: true });
  };

  render() {
    var { data } = this.state;
    if (!data) {
      return (
        <Paywall {...this.props}>
          <Button {...this.props} click={this.purchase} />
        </Paywall>
      );
    } else {
      return <Content {...this.props} />;
    }
  }
}
