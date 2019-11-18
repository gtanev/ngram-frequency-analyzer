import React from "react";
import { NGRAM_TYPE } from "../../../constants";
import {
  Button, Col, CustomInput, Input, InputGroup, InputGroupAddon, InputGroupText,
  PopoverBody, PopoverHeader, Row, UncontrolledPopover
} from "reactstrap";

export default function InputFormFooterRow({ formState, handleReset, handleAnalyze,
                                          handleCheckboxChange, handleSpinnerChange }) {
  return (
    <Row form className="input-form-footer-row mt-2">
      <Col>
        <CustomInput type="checkbox" id="caseSensitive" name="caseSensitive"
                     label="Case sensitive"
                     checked={formState.caseSensitive}
                     onChange={handleCheckboxChange}/>
        <CustomInput type="checkbox" id="trimWhitespace" name="trimWhitespace"
                     label="Ignore whitespace"
                     disabled={formState.mode === NGRAM_TYPE.word}
                     checked={formState.trimWhitespace && formState.mode === NGRAM_TYPE.char}
                     onChange={handleCheckboxChange}/>
      </Col>
      <Col>
        <CustomInput type="checkbox" id="lettersOnly" name="lettersOnly"
                     label="Letters only"
                     checked={formState.lettersOnly}
                     onChange={handleCheckboxChange}/>
        <CustomInput type="checkbox" id="sortByCount" name="sortByCount"
                     label="Presort by count"
                     checked={formState.sortByCount}
                     onChange={handleCheckboxChange}/>
      </Col>
      <Col className="d-flex" md={4}>
        <InputGroup className="col input-form-input-group">
          <InputGroupAddon addonType="prepend" id="n" name="n">
            <InputGroupText>n</InputGroupText>
          </InputGroupAddon>
          <Input min={1} max={formState.ngramLengthMax} type="number" step="1" id="ngramLength"
                 name="ngramLength"
                 className="text-center" value={formState.ngramLength}
                 onChange={handleSpinnerChange}/>
          <UncontrolledPopover trigger="focus" placement="bottom" target="ngramLength">
            <PopoverHeader>N-gram length</PopoverHeader>
            <PopoverBody>The n-gram length expressed as number of {formState.mode}s <i>n</i>.
              Valid values are between 1 and {formState.ngramLengthMax}.</PopoverBody>
          </UncontrolledPopover>
        </InputGroup>
        <InputGroup className="col input-form-input-group">
          <InputGroupAddon addonType="prepend" id="max" name="max">
            <InputGroupText>max</InputGroupText>
          </InputGroupAddon>
          <Input min={1} max={formState.ngramLimitMax} type="number" step="1" id="ngramLimit" name="ngramLimit"
                 className="text-center" value={formState.ngramLimit}
                 onChange={handleSpinnerChange}/>
          <UncontrolledPopover trigger="focus" placement="bottom" target="ngramLimit">
            <PopoverHeader>Maximum number of results</PopoverHeader>
            <PopoverBody>Limit obtained n-grams to a specified maximum. Valid values are
              between 1 and {formState.ngramLimitMax}</PopoverBody>
          </UncontrolledPopover>
        </InputGroup>
      </Col>
      <Col>
        <Button id="resetButton" name="resetButton" color="light"
                type="button"
                className="w-100 border border-dark"
                onClick={handleReset}>Reset
        </Button>
      </Col>
      <Col>
        <Button type="button" color="primary" className="w-100" onClick={handleAnalyze}>
          Analyze
        </Button>
      </Col>
    </Row>
  );
}