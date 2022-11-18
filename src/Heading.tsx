import React, { Component } from "react";

type HeadingProps = {};

class Heading extends Component<HeadingProps> {
  constructor(props: HeadingProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <div className=" py-6 px-6 bg-gray-300 font-black text-4xl text-black ">
          ToDo App
        </div>
      </>
    );
  }
}
export default Heading;
