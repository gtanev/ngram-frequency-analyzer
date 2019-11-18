import React from "react";
import { Col, CustomInput, InputGroup, Row } from "reactstrap";
import { NGRAM_TYPE } from "../../../constants";
import AppBadge from "../AppBadge";
import stringUtils from "../../../services/stringUtils";


export default function InputFormHeaderRow({ analyzerMode, handleChange, text }) {
  const unitLength = analyzerMode === NGRAM_TYPE.char
    ? text.length
    : stringUtils.splitIntoWords(text).length;
  return (
    <Row form className="my-2">
      <Col md={12} className="d-inline-flex align-items-center">
        <AppBadge id="counter"
                  style={{ cursor: "crosshair" }}
                 text={unitLength}
                 tooltipPlacement="right"
                 tooltipText={`Number of ${analyzerMode}s`}/>
        <InputGroup className="justify-content-end">
          <CustomInput id={NGRAM_TYPE.char}
                       name={NGRAM_TYPE.char}
                       type="radio"
                       onChange={handleChange}
                       checked={analyzerMode === NGRAM_TYPE.char}
                       className="mr-2">Characters</CustomInput>
          <CustomInput id={NGRAM_TYPE.word}
                       name={NGRAM_TYPE.word}
                       type="radio"
                       onChange={handleChange}
                       checked={analyzerMode === NGRAM_TYPE.word}
                       className="ml-2">Words</CustomInput>
        </InputGroup>
      </Col>
      <Col/>
    </Row>
  );
}