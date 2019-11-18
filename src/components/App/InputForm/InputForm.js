import React, { Component } from "react";
import { Form } from "reactstrap";

import * as service from "../../../services/nGramService";
import { NGRAM_TYPE } from "../../../constants";

import InputFormHeaderRow from "./InputFormHeaderRow";
import InputFormBodyRow from "./InputFormBodyRow";
import InputFormFooterRow from "./InputFormFooterRow";

const defaultFormState = {
  mode: NGRAM_TYPE.char,
  textInput: "",
  textInputDisabled: false,
  textInputPlaceholder: "Enter text or drag & drop file to analyze",
  textInputValid: false,
  textInputInvalid: false,
  fileContent: "",
  caseSensitive: true,
  trimWhitespace: true,
  lettersOnly: false,
  sortByCount: false,
  ngramLength: 1,
  ngramLengthMax: 100,
  ngramLimit: 100,
  ngramLimitMax: Number.POSITIVE_INFINITY,
};

export default class InputForm extends Component {
  state = defaultFormState;

  handleInputTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInputCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleInputRadioButtonChange = (e) => {
    this.setState({
      mode: e.target.name,
      ngramLengthMax: e.target.name === NGRAM_TYPE.char ? 100 : 10,
      ngramLength: 1
    });
  };

  handleInputNumberChange = (e) => {
    const val = Number(e.target.value);
    const min = Number(e.target.min);
    const max = Number(e.target.max);

    if (!Number.isNaN(val) && val <= max && val >= min)
      this.setState({ [e.target.name]: val });
  };

  handleFile = (fileName, fileContent, isValidExtension) => {
    this.setState({
      textInput: "",
      textInputDisabled: true,
      textInputPlaceholder: fileName,
      fileContent: isValidExtension ? fileContent : null,
      textInputValid: isValidExtension && fileContent.length > 0,
      textInputInvalid: !isValidExtension
    });

    document.getElementById("textInput").rows = 1;
  };

  handleUpdate = (updatePromise) => {
    this.props.dispatch({ type: "handleReset" });
    updatePromise
      .then(data => this.props.dispatch({ type: "handleData", payload: data }))
      .catch(error => this.props.dispatch({ type: "handleError", payload: error }));
  };

  getResults = () => {
    const args = {
      text: this.state.textInput.replace(/\r\n/g, " ") || this.state.fileContent,
      caseSensitive: this.state.caseSensitive,
      lettersOnly: this.state.lettersOnly,
      trim: this.state.trimWhitespace,
      n: this.state.ngramLength,
      limit: this.state.ngramLimit,
      sort: this.state.sortByCount
    };

    let results;

    if (!args.text && this.state.fileContent === null) {
      results = Promise.reject(new Error("Unsupported file type."));
    } else {
      results = this.state.mode === NGRAM_TYPE.char
        ? service.getCharNGramFrequencies(args)
        : service.getWordNGramFrequencies(args);
    }

    this.handleUpdate(results);
  };

  resetState = () => {
    this.setState(defaultFormState);
    //this.props.dispatch({ type: "handleReset" });
    this.handleUpdate(Promise.resolve([]));
  };

  render() {
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <InputFormHeaderRow analyzerMode={this.state.mode}
                         text={this.state.textInput}
                         handleChange={this.handleInputRadioButtonChange}/>
        <InputFormBodyRow formState={this.state}
                       handleChange={this.handleInputTextChange}
                       handleFile={this.handleFile}/>
        <InputFormFooterRow formState={this.state}
                         handleCheckboxChange={this.handleInputCheckboxChange}
                         handleSpinnerChange={this.handleInputNumberChange}
                         handleReset={this.resetState}
                         handleAnalyze={this.getResults}/>
      </Form>
    );
  };
}