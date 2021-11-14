import React, { Component } from "react";

interface ILettering {
  className: string;
  charClass: string;
  children: string;
  lineClass: string;
  tagName: tagNames;
  wordClass: string;
}

type tagNames = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export class Lettering extends Component<ILettering> {
  getSpanElement(elem: any, className: any, index: any, spacer?: any) {
    const key = `${className}-${index}`;
    return (
      <span key={key} className={`${className} ${key}`}>
        {elem}
        {spacer}
      </span>
    );
  }

  getWrappedChars = () => {
    let lineIndex = 0;
    let wordIndex = 0;
    let charIndex = 0;

    const { children, lineClass, wordClass, charClass } = this.props;
    const childrenArr = children.split("\\n");

    const lines: any = childrenArr.map((line: any) => {
      lineIndex += 1;
      const wordsArray = line.split(" ");
      const words = wordsArray.map((word: any) => {
        wordIndex += 1;
        const charsArray = word.split("");
        const chars = charsArray.map((char: any) => {
          charIndex += 1;
          return this.getSpanElement(char, charClass, charIndex);
        });
        return this.getSpanElement(chars, wordClass, wordIndex, " ");
      });
      return this.getSpanElement(words, lineClass, lineIndex, " ");
    });
    return lines;
  };

  render() {
    const wrappedChars = this.getWrappedChars();
    // @ts-ignore
    return React.DOM[this.props.tagName](
      { className: this.props.className },
      wrappedChars
    );
  }
}
